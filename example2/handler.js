'use strict';



module.exports.hello = async (event, context) => {
  // OR include configuration options
  const mysql = require('serverless-mysql')({
    backoff: 'decorrelated',
    base: 5,
    cap: 200
  })
	
mysql.config({
  host     : process.env.ENDPOINT,
  database : process.env.DATABASE,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD
})

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
