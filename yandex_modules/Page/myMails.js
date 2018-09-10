class MyMails {
    //define elements

    get writeMailButton () { return $('.mail-ComposeButton-Text') }

    writeMail () {
        this.writeMailButton.click();
    }
}

module.exports = new MyMails;