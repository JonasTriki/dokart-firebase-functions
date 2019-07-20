import * as functions from 'firebase-functions'

const sendFeedback = (request: functions.https.Request, response: functions.Response) => {
    response.send("sendFeedback called!");
}

export default sendFeedback

/*

require("dotenv").config()
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = (service, email, password) => (
    nodemailer.createTransport({
        service: service,
        auth: {
            user: email,
            pass: password
        }
    })
);

exports.sendFeedback = functions.https.onRequest((req, res) => {
    const opts = {
        to: process.env.TO_EMAIL,
        subject: "Dokart Feedback",
        html: (req.body.from ? "<p><strong>From: </strong>" + req.body.from + "</p>" : "") +
              "<p><strong>Type: </strong>" + req.body.type + "</p>" +
              "<p><strong>Device: </strong>" + req.body.device + "</p>" +
              "<p><strong>Message: </strong>" + req.body.message + "</p>"
    };
    transporter(process.env.SERVICE, process.env.EMAIL, process.env.PASSWORD).sendMail(opts, (err, info) => {
        if (err) {
            console.log("Error sending mail: ", err);
            res.status(500).send("Internal server error!");
            return;
        }
        res.status(200).send("Mail sent!");
    });
});

*/