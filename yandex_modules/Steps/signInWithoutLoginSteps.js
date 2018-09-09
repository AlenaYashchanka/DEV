var FormPage = require('../Page/form.page.js');


function SignInWithoutLogin () {
    FormPage.signIn();
    FormPage.errorMessage.waitForExist();
}



module.exports = SignInWithoutLogin;