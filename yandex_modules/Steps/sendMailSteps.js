var dataForSendMailPage = require('../Data/dataForSendMailPage.js');
var MailPage = require('../Page/mailPage.js');

var mail_to = dataForSendMailPage.mailToAdresses.mailToLena;
var topic = dataForSendMailPage.topics.helloTopic;
var mail_text = dataForSendMailPage.texts.helloText;


function SendMail () {
    MailPage.myMails.writeMail();
    MailPage.sendMailForm.mailTo.waitForExist();
    MailPage.sendMailForm.mailTo.setValue(mail_to);
    MailPage.sendMailForm.mailTopic.setValue(topic);
    MailPage.sendMailForm.mailText.setValue(mail_text);
    MailPage.sendMailForm.sendMail();
}


module.exports = SendMail;