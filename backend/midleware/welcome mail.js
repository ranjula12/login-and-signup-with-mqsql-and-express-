const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ranjulabandara790@gmail.com',
        pass: 'ykjv vhog zuxk czdw'
    }
});


const sendWelcomeEmail = (recipientEmail) => {
    const mailOptions = {
        from: 'ranjulabandara790@gmail.com',
        to: recipientEmail,
        subject: 'Welcome to Our Website!',
        text: 'Hello and welcome to our website. We are glad to have you on board!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending welcome email:', error);
        } else {
            console.log('Welcome email sent:', info.response);
        }
    });
};

module.exports = { sendWelcomeEmail };
