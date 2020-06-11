# EKS-get-token
Fetch the AWS EKS auth-token for your cluster.

## Usage
```
const token = require('eks-get-token')
const main = async () => {
  let token = await token('myClusterName', 'accessKeyId', 'secretAccessKey')
}
main();
```

## Importance
Fetch tokens on a system without the AWS CLI installed. The SDK's do not include this method, so it can often be quite straining to fetch cluster data. 
