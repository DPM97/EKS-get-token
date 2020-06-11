module.exports = (clusterName, accessKeyId, secretAccessKey) => {
    return new Promise((resolve, reject) => {
        const aws4 = require('aws4')
        const options = {
            host: 'sts.amazonaws.com',
            service: 'sts',
            path: '/?Action=GetCallerIdentity&Version=2011-06-15&X-Amz-Expires=60',
            headers: {
                'x-k8s-aws-id': clusterName,
            },
            signQuery: true,
        };
        const credentials = {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey
        }
        const query = aws4.sign(options, credentials);
        let t = `https://${query.host}${query.path}`
        t = Buffer.from(t).toString('base64')
        t = `k8s-aws-v1.${t}`
        resolve(t)
    })
}
