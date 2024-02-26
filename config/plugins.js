// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: env("SMTP_HOST"),
//         port: env("SMTP_PORT", 25),
//         secure: false,
//         ignoreTLS: true,
//         auth: {
//           user: env("SMTP_USERNAME"),
//           pass: env("SMTP_PASSWORD"),
//         },
//       },
//       settings: {
//         defaultFrom: env("SMTP_EMAIL"),
//         defaultReplyTo: env("SMTP_EMAIL"),
//       },
//     },
//   },
// });
