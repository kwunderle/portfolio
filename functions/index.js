const functions = require("firebase-functions");
const {Resend} = require("resend");

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const {name, email, message, company} = data;

  // Honeypot check: silently ignore if filled
  if (company) return {success: true};

  // Basic validation
  if (!name || !email || !message) {
    throw new functions.https.HttpsError("invalid-argument", "Missing fields");
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
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

    return {success: true};
  } catch (err) {
    throw new functions.https.HttpsError("internal", err.message);
  }
});
