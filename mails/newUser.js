const hbs = require('handlebars');

const images = require('./images/cids');
const html = require('./templates/newUser');
const env = require('../environments/environment');

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
		buttonURL: `${env.appURL}/login`,
		buttonText: 'ACESSAR O APP',
		titleText: 'Bem vindo, ',
		bodyText: 'Agora você faz parte da comunidade do Whims Music.<br>E pode ter acesso à 2 músicas por tempo limitado*.',
		obsText: 'Você recebeu esta mensagem porque foi adicionado à um projeto na plataforma Whims Music. Entre em contato conosco se tiver alguma dúvida. Cancele a inscrição a qualquer momento.',
};

function getOptions(email) {
	return {
		to: email,
		attachments: images,
		from: env.contactEmail,
		subject: 'Bem vindo ao Whims Music',
		html: hbs.compile(html)(keyValues)
	};
}

function setValues(values) {
	keyValues.userName = values.userName;
}

module.exports = { setValues, getOptions };