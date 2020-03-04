const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser').json();
const mailer = require('./mailer');
const app = express();
app.use(cors());
app.use(bodyParser);
app.post('/email', (request, response, next) => {
    const body = request.body;
    const mailOptions = {
    from: 'contact@noreply.com',
    to: 'danielaramirez0722@gmail.com',
    subject: 'Questions...',
    text: body.message
};
mailer.sender(mailOptions);
response.status(200).end();
});

app.get('/', (request, response, next) => {
    console.log('hi get');
});
app.listen(3000);