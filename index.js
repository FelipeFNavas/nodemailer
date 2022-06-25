import nodemailer from "nodemailer";
import {} from "dotenv/config";

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: false, // true for 465, false for other ports - nodemailer docs
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASSWORD,
  },
});

transporter
  .sendMail({
    from: "Felipe Navas",
    to: "felipefnavas@gmail.com",
    subject: "Sending the second email with NodeJs",
    text: "I think that this is the second email with NodeJs",
  })
  .then(() => {
    console.log("Email sent!");
  })
  .catch((error) => {
    console.log(error);
  });
