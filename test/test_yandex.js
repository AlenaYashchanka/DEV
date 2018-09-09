var webdriverio = require('webdriverio');
var assert = require('assert');
var dataForLoginPage = require('../yandex_modules/Data/dataForLoginPage.js');
var FormPage = require('../yandex_modules/Page/form.page.js');
var SignInWithoutLogin= require('../yandex_modules/Steps/signInWithoutLoginSteps.js');
var SignInWithoutPassword = require('../yandex_modules/Steps/signInWithoutPasswordSteps.js');
var SignInWithIncorrectPassword = require('../yandex_modules/Steps/signInWithIncorrectPasswordSteps.js');
var SignInWithIncorrectLogin = require('../yandex_modules/Steps/signInWithIncorrectLoginSteps.js');

var error_message = dataForLoginPage.errorMessages;

describe ('Yandex mail', function(){ 
    before ('Open sign in form', 
    () => {
        browser
            .url('http://mail.yandex.ru')
            .$('.button2_theme_mail-white').click()
        }
    );
    it('try to sign in without login and password and should display error message', done => {
        SignInWithoutLogin(); 
        assert.equal(FormPage.errorMessage.getText(), error_message.noLogin);
        browser.call(done);
    });

    it('try to sign in without password and should display error message', done => {
        SignInWithoutPassword();  
        assert.equal(FormPage.errorMessage.getText(), error_message.noPassword);
        browser.call(done);
     });

    it('try to sign in with incorrect password and should display error message', done => {
        SignInWithIncorrectPassword();  
        assert.equal(FormPage.errorMessage.getText(), error_message.incorrectPassword);
        browser.call(done);
    });

    it('try to sign in with incorrect login and should display error message', done => {
        SignInWithIncorrectLogin();  
        assert.equal(FormPage.errorMessage.getText(), error_message.incorrectLogin);
        browser.call(done);
    });

/*
    it ('should send e-mail', async function(done){
        browser
            .url('http://mail.yandex.ru')
            .click('.button2_theme_mail-white');
        browser
            .setValue('div.passport-Domik-Form-Field:nth-child(10) > label:nth-child(1) > input:nth-child(1)', 'mailf0rtraining')
            .setValue('div.passport-Domik-Form-Field:nth-child(11) > label:nth-child(1) > input:nth-child(1)', 'sMKO159')
            .click('button.passport-Button:nth-child(1)')
            .waitForExist('.mail-ComposeButton-Text');
        browser
            .click('.mail-ComposeButton-Text')
            .waitForExist('.mail-Compose-Field_to > div:nth-child(3) > div:nth-child(1)');
        browser
            .setValue('.mail-Compose-Field_to > div:nth-child(3) > div:nth-child(1)', 'lena1509y@yandex.ru')
            .setValue('input.mail-Compose-Field-Input-Controller', 'Hello test!')
            .setValue('.cke_wysiwyg_div', 'Hello World!');
        browser
            .click('#nb-13');
        browser.call(done);
    });
*/

});
