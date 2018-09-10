var dataForLoginPage = require('../Data/dataForLoginPage.js');
var FormPage = require('../Page/form.page.js');
var MyMails = require('../Page/myMails.js');

var loginData = dataForLoginPage.login;
var passwordData = dataForLoginPage.password;

function SignInSuccess () {
    FormPage.login.setValue(loginData.correctEmailLogin);
    FormPage.password.setValue(passwordData.correctPassword);
    FormPage.signIn();
    MyMails.writeMailButton.waitForExist();
}

module.exports = SignInSuccess;
