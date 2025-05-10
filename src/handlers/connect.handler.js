const sendEmailBySES = require("../controllers/sendEmailBySES.controller");
const connectTemplates = require("../templates/connect_templates");
const {
  CONNECT_AWS_SES_ACCESS_KEY,
  CONNECT_AWS_SES_SECRET_ACCESS_KEY,
  REGION,
  CONNECT_AWS_SES_FROM_EMAIL
} = process.env;

const connectEmailsHandler = async (req, res) => {
  try {
    const { email, template, userData } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const templateGenerated = connectTemplates[template](userData.name, userData.last_name)

    const sending = await sendEmailBySES(REGION,CONNECT_AWS_SES_ACCESS_KEY, CONNECT_AWS_SES_SECRET_ACCESS_KEY, email, CONNECT_AWS_SES_FROM_EMAIL, "Connect", templateGenerated);
    console.log(sending);

    res.status(200).json({ success: true, message: 'email sent successfully'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'error sending email' });
  }
};

module.exports = connectEmailsHandler;