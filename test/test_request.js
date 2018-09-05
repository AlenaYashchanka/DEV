var webdriverio = require('webdriverio');
var request = require ('request');
var rp = require('request-promise');
var checkResponse = require('./request_modules/checkResponse.js');
var checkElementProperty = require('./request_modules/checkElementProperty.js');
var checkBody = require('./request_modules/checkBody.js');
var options = require('./request_modules/options.js');

describe ('Http request', () => { 
    it('should have correct data', async done => {
        request('https://jsonplaceholder.typicode.com/users', (err, response, body) => {
            checkResponse();
            checkBody(10);
        });
    });

    it('check users', async done => {
        rp(options)
        .then( users => {
            users.forEach( element => {
                checkElementProperty();
            })
        });
    });

    
});
