function checkSendMail () {
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
}

module.exports = checkSendMail;