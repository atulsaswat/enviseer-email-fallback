const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize SendGrid with API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, jobTitle } = req.body;
    
    const msg = {
      to: 'devip@enviseer.com',
      from: 'devip@enviseer.com',
      subject: `Demo Request from: ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Phone: ${phone}
Job Title: ${jobTitle}`,
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 