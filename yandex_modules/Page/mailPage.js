var MyMails = require('./myMails.js');
var SendMailForm = require('./form.send.mail.js');

class MailPage {
    constructor(){
        this.myMails = MyMails;
        this.sendMailForm = SendMailForm;
    }   
}

module.exports = new MailPage;