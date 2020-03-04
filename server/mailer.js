const mailer = require('nodemailer');

const sender = mailer.createTransport({
     service: 'gmail',
     secure: false,
     auth: {
        type: "login",
         user: process.env.GMAIL,
          pass: process.env.GMAIL_PASS
      }
});

const send = (mailOptions) => {
    sender.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
              console.log('Email sent: ' + info.response);
        }
    });
};

 exports.sender = send;