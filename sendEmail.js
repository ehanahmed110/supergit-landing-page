// sendEmail.cjs
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'


const app = express();
app.use(cors());
app.use(express.json());

// ✅ Create reusable transporter using Gmail SMTP + app password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ehan.ahmed.1156@gmail.com",            // ✅ your Gmail
    pass: "vesh xigb ngdc nseg",            // ✅ your App Password
  },
});

// ✅ Route to send email
app.post("/send-email", async (req, res) => {
 const { name, l_name, email, phone, services, message, company, date, time } = req.body;



  // ✅ Construct email template
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #ffffff;">
      <h2 style="color: #f14f3e; border-bottom: 2px solid #fab768; padding-bottom: 10px;">📅 New Appointment Request</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 8px;"><strong>👤 Full Name:</strong></td><td>${name} ${l_name}</td></tr>
        <tr><td style="padding: 8px;"><strong>🏢 Company:</strong></td><td>${company}</td></tr>
        <tr><td style="padding: 8px;"><strong>📧 Email:</strong></td><td>${email}</td></tr>
        <tr><td style="padding: 8px;"><strong>📞 Phone:</strong></td><td>${phone}</td></tr>
        <tr><td style="padding: 8px;"><strong>🛠️ Service:</strong></td><td>${services}</td></tr>
        <tr><td style="padding: 8px;"><strong>📆 Date:</strong></td><td>${date}</td></tr>
        <tr><td style="padding: 8px;"><strong>⏰ Time:</strong></td><td>${time}</td></tr>
        <tr><td style="padding: 8px; vertical-align: top;"><strong>📝 Message:</strong></td><td>${message}</td></tr>
      </table>
      <div style="margin-top: 30px; text-align: center;"><p style="color: #888;">Sent via SuperGit Consultation Form</p></div>
    </div>
  `;

  const mailOptions = {
    from: `"SuperGit Consultation" <ehan.ahmed.1156@gmail.com>`,
    to:`${email}, ehan.ahmed.1156@gmail.com`, // ✅ send to the person who filled the form
    subject: `Appointment Confirmation for ${name} ${l_name}`,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).send("Error sending email.");
  }
});
app.get("/",(req,res)=>
  {
    res.send("server running")
  })

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 SMTP server running on http://localhost:${PORT}`);
});
