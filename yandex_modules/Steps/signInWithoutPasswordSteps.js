var dataForLoginPage = require('../Data/dataForLoginPage.js');
var FormPage = require('../Page/form.page.js');

var loginData = dataForLoginPage.login;

function SignInWithoutPassword () {
    FormPage.login.setValue(loginData.correctEmailLogin);
    FormPage.signIn();
    FormPage.errorMessage.waitForExist();
}


module.exports = SignInWithoutPassword;
