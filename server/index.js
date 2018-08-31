const express = require("express")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
app.use(express.json())


app.use(express.static(`${__dirname}/../dist`))

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

app.put('/api/send', (req, res) => {
    console.log(req.body);
    var mailOptions = {
        from: req.body.from,
        to: 'erinhales20@gmail.com',
        subject: req.body.subject,
        html: req.body.message
    }
    transporter.sendMail(mailOptions, function(err, info){
        if(err) console.log(err)
        else console.log(info)
    })
})



const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})