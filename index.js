const app = require("express")();
const bodyParser = require("body-parser")
const mailer = require('nodemailer')

const config = {
  host: "youremailserver ex: gmail",
  port: 2525,
  auth: {
    user: "youruser",
    pass: "yourpassword"
  }
}

const transporter = mailer.createTransport(config)

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {

    const message = {
        from: '',
            to: '',
            subject: '',
            text: ''
    }

    transporter.sendMail(message, (error, info) => {
        if (error){
            return res.status(400).send('Error!')
        }
        return res.status(200).send('Email sent successfully')
    })
})

app.listen(3000)