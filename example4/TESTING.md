# Testing our API locally

Before we deploy our API, we’re going to want to test the routes locally. In the sample project I’ve included five events that replicate what API Gateway could send to your Lambda function. You can test your functions using these with Serverless’ invoke local command


```
$ sls invoke local -f serverless-api-sample -p test/get_sample.json
$ sls invoke local -f serverless-api-sample -p test/post_sample.json
$ sls invoke local -f serverless-api-sample -p test/put_sample.json
$ sls invoke local -f serverless-api-sample -p test/delete_sample.json
$ sls invoke local -f serverless-api-sample -p test/form_sample.json
```

The GET sample will return the following from our sample project:

```
{
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With"
  },
  "statusCode": 200,
  "body": {
    "status": "ok",
    "version": "v1.0",
    "auth": true,
    "body": null,
    "query": {
      "qs1": "q1"
    }
  }
}
```
