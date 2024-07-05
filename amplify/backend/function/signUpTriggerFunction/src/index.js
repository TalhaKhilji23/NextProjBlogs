

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
        id : event.request.userAttributes.sub,
        email : event.request.userAttributes.email,
        first_name : event.request.userAttributes.given_name,
        last_name : event.request.userAttributes.family_name,
        user_name : event.request.userAttributes.preferred_username,
        banner_pic : event.request.userAttributes["custom:bannerpic"],
        user_pic : event.request.userAttributes.picture,
        explanation : event.request.userAttributes["custom:explanation"],
        createdAt : new Date().toISOString(),
        updatedAt : new Date().toISOString()
      }
    }).promise()
    console.info(`Successfully executed put in User Table`)
    return event
  } catch (err) {
    console.error(err)
    throw err
  }

};
