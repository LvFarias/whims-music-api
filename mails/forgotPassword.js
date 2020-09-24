const hbs = require('handlebars');

const images = require('./images/cids');
const env = require('../environments/environment');
const html = require('./templates/forgotPassword');

const keyValues = {
	userName: '',
	buttonURL: '',
	appURL: env.appURL,
	siteURL: env.siteURL,
	facebookURL: env.facebookURL,
	instagramURL: env.instagramURL,
	contactEmail: env.contactEmail,
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
	keyValues.buttonURL = values.buttonURL;
}

module.exports = { setValues, getOptions };