const environment = {
    token_secret: 'VGhpcyBpcyB0aGUgV2hpbXMgTXVzaWMgQVBJIHRva2VuIGluIGJhc2U2NC4gSSBkb24ndCBjYXJlIGlmIHlvdSB0aG91Z2h0IGl0IHdhcyBiYWQu',
    password_secret: 'QXMgc2VuaGFzIGRhIFdoaW1zIE11c2ljIEFQSSBzw6NvIGVuY29kYWRhcyB1c2FuZG8gSldUIGUgZXNzYSBmcmFzZSBlbSBiYXNlNjQgY29tbyBoYXNoLg==',
    facebookURL: 'https://facebook.com/whims_music_app',
    instagramURL: 'https://instagram.com/whims_music_app',
    sqliteUser: process.env.DB_USER || 'whims',
    sqlitePassword: process.env.DB_PASSWORD || '94467068742',
    sqliteDatabase: process.env.DB_DATABASE || 'whims_music',
    apiURL: process.env.API_URL || 'http://localhost:9274',
    appURL: process.env.APP_URL || 'http://localhost:9277',
    siteURL: process.env.SITE_URL || 'http://localhost:9936',
    contactEmail: process.env.CONTACT_EMAIL || 'luan.vfarias@gmail.com',
    teamName: process.env.TEAM_NAME || 'Equipe Whims',
    copyright: process.env.COPYRIGHT || '© 2019 Whims Inc. | São Paulo - BR',
    socialText: process.env.SOCIAL_TEXT || 'Acompanhe-nos nas redes sociais!',
};
module.exports = environment;
