const { SendEmailCommand, SESClient } = require("@aws-sdk/client-ses");

const sendEmailBySES = async (REGION, accessKeyId, secretAccessKey, toEmail, fromEmail, subject, template) => {
  const sesClient = new SESClient({ region: REGION, credentials: { accessKeyId, secretAccessKey} });
  const sendEmailCommand = createSendEmailCommand(toEmail, fromEmail, subject, template);
  try {
    return await sesClient.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.");
    return e;
  }
};

const createSendEmailCommand = (toEmail, fromEmail, subject, template) => {
  return new SendEmailCommand({
    Source: '"Grupos de Conexion" <noreply@gruposdeconexion.info>',
    Destination: {
      /* required */
      CcAddresses: [],
      ToAddresses: [toEmail],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: template,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    // Source: fromEmail,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

module.exports = sendEmailBySES;