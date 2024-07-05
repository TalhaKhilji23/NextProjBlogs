

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const sendEmail = async (emailData) => {
    let emailParams = {
      Destination: {
        ToAddresses: [emailData.to],
      },
      Message: {
        Body: {
          Text: {
            Data: emailData.body,
          },
        },
        Subject: {
          Data: emailData.subject,
        },
      },
      Source: emailData.from,
    }
    try {
      await ses.sendEmail(emailParams).promise()
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
const { SES } = require('aws-sdk')
const ses = new SES()
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log("Event Body", event.arguments.subject)
    const subject = event.arguments.subject;
    const name = event.arguments.name;
    const email = event.arguments.email;
    const explanation = event.arguments.explanation;

    console.log("Subject:", subject);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Explanation:", explanation);
    
    let userEmailBody = {
        from: process.env.SES_EMAIL,
        to: email,
        body: ` Dear ${name} ,
    
        Thank you very much for your inquiry to Nihongo Talker.
    
        We are working hard to examine the details of your inquiry and provide you with an appropriate response.
        Our staff will reply to you within 2-3 days, so we hope you will be patient.
    
        If you have any questions or concerns, please feel free to contact us at any time.
        Thank you for your continued support.
    
        Inquiry details
    
        Name: ${name}
        Email: ${email}
        Message: ${explanation}
        
        
        Nihono Talker.
        `,
        subject: subject,
      }
    
    
    await sendEmail(userEmailBody)
    return {
        
        success: 200,
        message :"Sent Succesffuly",
    };
};
