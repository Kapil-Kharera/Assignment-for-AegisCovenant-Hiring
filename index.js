const ReadText = require('text-from-image')

const findCaptcha = () => {
    ReadText('./Captcha-United.png').then(text => {
        console.log(text);
    }).catch(err => {
        console.log(err);
    });
}

findCaptcha();
