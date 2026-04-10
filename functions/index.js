/* eslint-disable object-curly-spacing */
require("dotenv").config();
const functions = require("firebase-functions");
const { Resend } = require("resend");
const cors = require("cors");

const corsHandler = cors({ origin: true });
exports.sendFormEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ success: false, error: "API key not set" });
    }

    const resend = new Resend(apiKey);

    try {
      // Extract fields from the request body
      const { name, email, message, company } = req.body.data;
      if (company) return res.json({ success: true }); // honeypot

      // Validate required fields
      if (!name || !email || !message) {
        return res
            .status(400)
            .json({ success: false, error: "Missing fields" });
      }

      // Send email using Resend API
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["katharinewunderle@gmail.com"],
        subject: `New message from ${name}`,
        reply_to: email,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  });
});
