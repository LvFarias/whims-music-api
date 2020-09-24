const hbs = require('handlebars');

const images = require('./images/cids');
const html = require('./templates/newUser');
const env = require('../environments/environment');

const keyValues = {
	email: '',
	userName: '',
	password: '',
	appURL: env.appURL,
	siteURL: env.siteURL,
	facebookURL: env.facebookURL,
	instagramURL: env.instagramURL,
	contactEmail: env.contactEmail,
	buttonURL: `${env.appURL}/login`,
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
	keyValues.email = values.email;
	keyValues.userName = values.userName;
	keyValues.password = values.password;
}

module.exports = { setValues, getOptions };