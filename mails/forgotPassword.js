const hbs = require('handlebars');

const html = require('./templates');
const images = require('./images/cids');

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
		from: env.CONTACT_EMAIL,
		subject: 'Redefinir senha do Whims Music',
		html: hbs.compile(html)(keyValues)
	};
}

function setValues(values) {
	keyValues.userName = values.userName;
}

module.exports = { setValues, getOptions };