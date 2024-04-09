const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your gmail',
        pass: 'your genareded app password for gmail'
    }
});


const sendWelcomeEmail = (recipientEmail) => {
    const mailOptions = {
        from: 'your gmail',
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
