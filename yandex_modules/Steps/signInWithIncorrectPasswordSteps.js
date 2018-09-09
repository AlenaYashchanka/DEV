var dataForLoginPage = require('../Data/dataForLoginPage.js');
var FormPage = require('../Page/form.page.js');

var loginData = dataForLoginPage.login;
var passwordData = dataForLoginPage.password;

function SignInWithIncorrectPassword () {
    FormPage.login.setValue(loginData.correctEmailLogin);
    FormPage.password.setValue(passwordData.incorrectPassword);
    FormPage.signIn();
    FormPage.errorMessage.waitForExist();
}


module.exports = SignInWithIncorrectPassword;
