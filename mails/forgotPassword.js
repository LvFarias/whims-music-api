const hbs = require('handlebars');

const images = require('./images/cids');
const env = require('../environments/environment');
const html = require('./templates');

const keyValues = {
	appURL: env.appURL,
	siteURL: env.siteURL,
	teamName: env.teamName,
	copyright: env.copyright,
	socialText: env.socialText,
	facebookURL: env.facebookURL,
	instagramURL: env.instagramURL,
	contactEmail: env.contactEmail,
	userName: '',
	buttonURL: '',
	titleText: 'Olá ',
	buttonText: 'REDEFINIR SENHA',
	bodyText: 'Recebemos uma solicitação para redefinir sua senha da plataform Whism Music',
	obsText: 'Você recebeu esta mensagem porque foi feita uma solicitação na plataforma Whims Music. Caso não tenha sido você ignore essa menssagem e sua senha não será alterada. Entre em contato conosco se tiver alguma dúvida.',
};

function getOptions(email) {
	return {
		to: email,
		attachments: images,
		from: env.contactEmail,
		subject: 'Redefinir senha do Whims Music',
		html: hbs.compile(html)(keyValues)
	};
}

function setValues(values) {
	keyValues.userName = values.userName;
}

module.exports = { setValues, getOptions };