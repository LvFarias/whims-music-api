const environment = {
    token_secret: 'VGhpcyBpcyB0aGUgV2hpbXMgTXVzaWMgQVBJIHRva2VuIGluIGJhc2U2NC4gSSBkb24ndCBjYXJlIGlmIHlvdSB0aG91Z2h0IGl0IHdhcyBiYWQu',
    password_secret: 'QXMgc2VuaGFzIGRhIFdoaW1zIE11c2ljIEFQSSBzw6NvIGVuY29kYWRhcyB1c2FuZG8gSldUIGUgZXNzYSBmcmFzZSBlbSBiYXNlNjQgY29tbyBoYXNoLg==',
    facebookURL: 'https://facebook.com/whims_music_app',
    instagramURL: 'https://instagram.com/whims_music_app',
    mysqlPort: process.env.DB_PORT || '9632',
    mysqlUser: process.env.DB_USER || 'whims',
    mysqlHost: process.env.DB_HOST || '127.0.0.1',
    mysqlPassword: process.env.DB_PASSWORD || '94467068742',
    mysqlDatabase: process.env.DB_DATABASE || 'whims_music',
    apiURL: process.env.API_URL || 'http://localhost:9274',
    appURL: process.env.APP_URL || 'http://localhost:9277',
    siteURL: process.env.SITE_URL || 'http://localhost:9936',
    contactEmail: process.env.CONTACT_EMAIL || 'luan.vfarias@gmail.com',
};
module.exports = environment;
