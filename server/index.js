const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

let {USERNAME, PASSWORD, SERVER_PORT, GMAIL_USER, GMAIL_PASS} = process.env;

app.use(express.static(`${__dirname}/../dist`));

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
    }
})

app.put('/api/send', (req, res) => {
    console.log(req.body)
    var mailOptions = {
        from: req.body.from,
        to: 'erinhales20@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
})

const port = SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})