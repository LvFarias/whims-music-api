const nodeMailer = require('nodemailer');

const logger = require('./logger');

const transporter = nodeMailer.createTransport({
    port: 465,
    secure: true,
    host: 'mail.ifnito.com',
    auth: {
        user: 'contato@ifnito.com',
        pass: '2668286@ifnito'
    }
});

function getTemplateOptions(templateName, emailTo, values) {
    const templateConfig = require(`../../mails/${templateName}.js`);
    log.debug(`get template config for: ${templateName}`);
    templateConfig.setValues(values);
    const options = templateConfig.getOptions(emailTo);
    log.debug(`get option for: ${templateName}`);

    return options;
}
function sendEmail(options) {
    return new Promise((res, rej) => {
        log.debug('send email');
        transporter.sendMail(options, (error, info) => {
            if (error) rej(error);
            log.debug(info);
            res(info);
        });
    });
}

function newUser(email, userName, password) {
    return new Promise((res, rej) => {
        const options = getTemplateOptions('newUser', email, { email, userName, password });
        sendEmail(options).then(res).catch(rej);
    });
}
function receivedSurvey(email, buttonURL, projectName) {
    return new Promise((res, rej) => {
        const options = getTemplateOptions('receivedSurvey', email, { email, buttonURL, projectName });
        sendEmail(options).then(res).catch(rej);
    });
}
function forgotPassword(email, userName, buttonURL) {
    return new Promise((res, rej) => {
        const options = getTemplateOptions('forgotPassword', email, { userName, buttonURL });
        sendEmail(options).then(res).catch(rej);
    });
}

module.exports = {
    newUser,
    receivedSurvey,
    forgotPassword
};