import nodemailer from "nodemailer";
import 'dotenv/config'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  },
});

async function mailSend({ subject, message }) {
  try {
    const info = await transporter.sendMail({
      from: `"Beveromatic" <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_USERNAME,
      subject: subject,
      html: message
    });
    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(error || error.message);
  }
}

export async function contactformsend({ name, email, phone, company, message }) {
  const html = `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4b2514; padding: 20px; color: white; text-align: center;">
        <h1 style="margin: 0;">New Enquiry</h1>
        <p style="margin: 5px 0 0;">You have received a new contact form submission.</p>
      </div>
      <div style="padding: 20px; background-color: #fafafa;">
        <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 16px;"><strong>Company:</strong> ${company}</p>
        <p style="font-size: 16px;"><strong>Message:</strong><br>${message}</p>
      </div>
      <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 14px; color: #666;">
        <p style="margin: 0;">This message was sent from the Beveromatic website contact form.</p>
      </div>
    </div>
      `;
  const responsive = await mailSend({ subject: "New Enquiry", message: html });
  return responsive;
}

export async function homecontactsend({ name, email, message }) {
  const html = `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
    <div style="background-color: #4b2514; padding: 20px; color: white; text-align: center;">
      <h1 style="margin: 0;">New Enquiry</h1>
      <p style="margin: 5px 0 0;">You have received a new contact form submission.</p>
    </div>
    <div style="padding: 20px; background-color: #fafafa;">
      <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 16px;"><strong>Message:</strong><br>${message}</p>
    </div>
    <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 14px; color: #666;">
      <p style="margin: 0;">This message was sent from the Beveromatic website contact form.</p>
    </div>
  </div>
    `;
  await mailSend({ subject: "New Enquiry", message: html });
}
