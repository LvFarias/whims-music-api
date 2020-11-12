const hbs = require('handlebars');

const images = require('./images/cids');
const html = require('./templates/newUser');

const env = process.env;

const keyValues = {
	appURL: env.APP_URL,
		siteURL: env.SITE_URL,
		teamName: env.TEAM_NAME,
		copyright: env.COPYRIGHT,
		socialText: env.SOCIAL_TEXT,
		facebookURL: env.FACEBOOK_URL,
		instagramURL: env.INSTAGRAM_URL,
		contactEmail: env.CONTACT_EMAIL,
		userName: '',
		buttonURL: `${env.APP_URL}/login`,
		buttonText: 'ACESSAR O APP',
		titleText: 'Bem vindo, ',
		bodyText: 'Agora você faz parte da comunidade do Whims Music.<br>E pode ter acesso à 2 músicas por tempo limitado*.',
		obsText: 'Você recebeu esta mensagem porque foi adicionado à um projeto na plataforma Whims Music. Entre em contato conosco se tiver alguma dúvida. Cancele a inscrição a qualquer momento.',
};

function getOptions(email) {
	return {
		to: email,
		attachments: images,
		from: env.CONTACT_EMAIL,
		subject: 'Bem vindo ao Whims Music',
		html: hbs.compile(html)(keyValues)
	};
}

function setValues(values) {
	keyValues.userName = values.userName;
}

module.exports = { setValues, getOptions };