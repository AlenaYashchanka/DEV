
class FormPage {
    //define elements

    get login () { return $('div.passport-Domik-Form-Field:nth-child(10) > label:nth-child(1) > input:nth-child(1)') }
    get password () { return $('div.passport-Domik-Form-Field:nth-child(11) > label:nth-child(1) > input:nth-child(1)') }
    get signInButton () { return $('button.passport-Button:nth-child(1)') }
    get errorMessage () { return $('.passport-Domik-Form-Error') }

    signIn () {
        this.signInButton.click();
    }
}

module.exports = new FormPage;