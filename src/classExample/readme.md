The intent of `usesClasses.js`'s dependencies, `naiveService` and `naiveRequest`, is to appear loosely similar to how `aws-sdk`'s `.promise()` is used. For example:

```js
const AWS = require('aws-sdk');
const dc = new AWS.DynamoDB.DocumentClient();
const response = await dc.query(param).promise();
```

A similar pattern, albeit with a contrived implementation, is in `usesClasses.js`:

```js
const NaiveService = require('./naiveService');
const service = new NaiveService();
const response = service.send(param).receiveAsync();
```

Repeat calls to `service.send(...)` might invite the test author to create temporary/conditional mock implementations.


In the case of both `aws-sdk` and `naiveService.js`, a kind of `Request` object is returned. Although it would be a useful development exercise for me, the unit tests gain nothing from an implementation of `NaiveService` that more closely matches the behavior of `aws-sdk`. 

I found these links useful when learning about how `aws-sdk` works its magic.
- [AWS Developer Tools Blog: Support for Promises in the SDK](https://aws.amazon.com/blogs/developer/support-for-promises-in-the-sdk/)
- [aws-sdk: Using JavaScript Promises](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-promises.html)
- [aws-sdk: Using an Anonymous Callback Function](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-a-callback-function.html)
