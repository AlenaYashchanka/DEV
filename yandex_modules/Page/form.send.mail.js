class SendMailForm {
    //define elements

    get mailTo () { return $('.mail-Compose-Field_to > div:nth-child(3) > div:nth-child(1)') }
    get mailTopic () { return $('input.mail-Compose-Field-Input-Controller') }
    get mailText () { return $('.cke_wysiwyg_div') }
    get sendMailButton () { return $('#nb-13') }

    sendMail () {
        this.sendMailButton.click();
    }
}

module.exports = new SendMailForm;