

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { DynamoDB, SES } = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
const dynamodb = new DynamoDB.DocumentClient()

exports.handler = async (event) => {
  // if(event.triggerSource ==="PostConfirmation_ConfirmSignUp"){
  //   console
  // }
  console.log("Event Got>>>>>>>>>>>>> ",event)
  try {
    await dynamodb.put({
      TableName :  `${process.env.User_Table}-${process.env.ENV}`,
      Item :{
        id : uuidv4(),
        email : event.request.userAttributes.email
      }
    }).promise()
    console.info(`Successfully executed put in User Table`)
    return event
  } catch (err) {
    console.error(err)
    throw err
  }

};
