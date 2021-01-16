
// web server
const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors())
// const morgan = require('morgan')

//processing variables
require("dotenv").config()

// handles the email submission form
const nodemailer = require('nodemailer')

// to handle json requests
const bodyParser = require('body-parser')
server.use(bodyParser.json())

// static files
const path = require("path")
server.use(express.static(path.join(__dirname, "build")))

// handles my api
// server.use('/api', require("./routes"))

// seerves up react app by default if we don't recognize the route
server.use( (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// brings in the DB connection
// const { client } = require("./db")

//for nodemailer
server.get('/', (req, res, next) => {
  res.send('welcome message')
})

// https://nodemailer.com/about/

server.post('/api/emailForm', (req, res, next) => {
  let data = req.body
  console.log('data in server', data)

  let smtpTransport = nodemailer.createTransport({
    name:'mail.samuelmckaig.com' ,
    port:465,
    secure: true,
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_PASSWORD
    }
  });

  let mailOptions = {
    from:data.email,
    to: process.env.TO_EMAIL ,
    subject: `message sent from ${data.name} on your website`,
    html: `
      <h3> Message from contact form </h3>
        <ul>
          <li>Name: ${data.name} </li>
          <li>Email: ${data.email} </li>
          <li> Subject: ${data.subject} </li>
        </ul>

        <h3> Full Message </h3>
          <p> ${data.message} </p>
    `
  };
  console.log("Message sent: %s", mailOptions.messageId);


  smtpTransport.sendMail(mailOptions, (error, res) => {
    if (error) {
      res.send(error)
    }
    else {
      res.send("successful")
    }
  })
  smtpTransport.close();

})


//error handler
server.use( (err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
})

//  connection to server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`)


})



