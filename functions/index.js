const functions = require("firebase-functions");
const {Resend} = require("resend");
const cors = require("cors");

const corsHandler = cors({origin: true});

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") return res.status(405).send("Method No Allowed");

    const {name, email, message, company} = req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (company) return res.json({success: true}); // honeypot

    if (!name || !email || !message) {
      return res.status(400).json({success: false, error: "Missing fields"});
    }

    try {
      await resend.emails.send({
        from: "Contact Form <contact@katiewunderle.com>",
        to: ["katharinewunderle@gmail.com"],
        subject: `New message from ${name}`,
        reply_to: email,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong>: ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.json({success: true});
    } catch (err) {
      console.error(err);
      res.status(500).json({success: false, error: err.message});
    }
  });
});
