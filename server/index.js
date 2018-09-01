const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../dist`))

let transporter = nodemailer.createTransport({
    // host: "smtp.mailtrap.io",
    host: "smtp.sendgrid.net",
    port: 587,
    // auth: {
    //     user: "f04defa62b0554",
    //     pass: "c9182f392c4db0"
    // }
    // service: 'Gmail',
    auth: {
        user: "apikey",
        pass: "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"
    }
})

app.put('/api/send', (req, res) => {
    console.log("Hello")
    console.log(req.body)
    var mailOptions = {
        from: req.body.from,
        to: 'erinhales20@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err)
        else console.log(info)
    })
})

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})