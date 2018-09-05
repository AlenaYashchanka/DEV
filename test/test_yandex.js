var webdriverio = require('webdriverio');
var assert = require('assert');
var checkTextError = require('./yandex_modules/checkTextError.js')

describe ('Yandex mail', function(){ 
    it('should display an error message', function(done) {
        browser
            .url('http://mail.yandex.ru')
            .click('.button2_theme_mail-white')
            .click('button.passport-Button:nth-child(1)')
            .waitForExist('.passport-Domik-Form-Error');
        
        var error_text = browser.getText('.passport-Domik-Form-Error');
        checkTextError(error_text, 'Логин не указан');
        browser.call(done);
    });

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

});
