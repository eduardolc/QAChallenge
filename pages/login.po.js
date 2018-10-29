//var dataUser = browser.params.dataUser;

class Login {

    constructor() {
        this.email = 'eduardolimacruz2@gmail.com';
        this.password = '123456';
        this.campoEmail = element(by.id('email'));
        this.campoPassword = element(by.id('passwd'));
        this.bntLogin = element(by.id('SubmitLogin'));
    }

    loginComEmailSenhaEmbranco() {
        this.campoEmail.sendKeys('');
        this.campoPassword.sendKeys('');
        this.bntLogin.click();
    }

    loginSenhaEmBranco() {
        this.campoEmail.sendKeys(this.email);
        this.campoPassword.sendKeys('');
        this.bntLogin.click();
    }

    loginEmailEmBranco() {
        this.campoEmail.sendKeys('');
        this.campoPassword.sendKeys(this.password);
        this.bntLogin.click();
    }

    loginSenhaInvalida() {
        this.campoEmail.sendKeys(this.email);
        this.campoPassword.sendKeys('ed123456');
        this.bntLogin.click();
    }

    loginEmailInvalido() {
        this.campoEmail.sendKeys('eduardolima@gmail.com');
        this.campoPassword.sendKeys(this.password);
        this.bntLogin.click();
    }

    loginEmailSenhaValidos() {
        this.campoEmail.sendKeys(this.email);
        this.campoPassword.sendKeys(this.password);
        this.bntLogin.click();
    }
}

module.exports = Login;