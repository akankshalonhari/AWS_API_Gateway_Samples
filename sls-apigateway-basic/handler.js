'use strict';

module.exports.hello = async event => {

  var message = 'HELLO WORLD';

  const name = event.queryStringParameters && event.queryStringParameters.name;

  if(name !== null){
     message = 'Hello ' + name; 
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Hello '+ message,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.create = async event => {

  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: body,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.search = async event => {

  const email = event.pathParameters && event.pathParameters.email;
  var message = 'Hello World';
  if(email !== null){
    message = 'Hello Jerry';
  } 

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.upload = async event => {

  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: body,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.download = async event => {

  const email = event.pathParameters && event.pathParameters.email;
  var message = 'Hello World';
  if(email !== null){
    message = 'Hello Jerry. Download measurements from Jerry`s account';
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.update = async event => {

  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: body,
        input: event,
      },
      null,
      2
    ),
  };
};
