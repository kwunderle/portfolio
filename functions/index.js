/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const { Resend } = require("resend");

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // if (company) return res.json({ success: true }); // honeypot

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ success: false, error: "API key not set" });
  }

  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["katharinewunderle@gmail.com"],
      subject: "please work",
      html: "boop",
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});
