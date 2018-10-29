browser.ignoreSynchronization=true; 

var os = require('os'); 
os.tmpDir = os.tmpdir;
const Login = require('../pages/login.po');

describe ('Cenário de Login E-commerce', function() {
    const login = new Login();

    it ("CT001 - Efetuar login com os campos 'Email address' e 'Password' em branco.", 
    function() {
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        login.loginComEmailSenhaEmbranco();
        expect(element(by.xpath('//*[(@id = "center_column")]//li')).getText()).toEqual("An email address required.");
    })

    it ("CT002 - Efetuar o login preenchendo o campo 'Email address' com um" + 
    "Email válido e deixar o campo Password  em branco.", 
    function() {
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        login.loginSenhaEmBranco();
        expect(element(by.xpath('//*[(@id = "center_column")]//li')).getText()).toEqual("Password is required.");
        
    })

    it ("CT003 - Efetuar login com o campo 'Email address' em branco e preencher o campo 'Password'" +
    "com uma senha válida.", 
    function() {
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        login.loginComEmailSenhaEmbranco();
        expect(element(by.xpath('//*[(@id = "center_column")]//li')).getText()).toEqual("An email address required.");
        
    })

    it ("CT004 - Efetuar login preenchendo o campo 'Email address' com um email válido e preencher o " +
	"campo 'Password' com uma senha inválida.", 
    function() {
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        login.loginComEmailSenhaEmbranco();
        expect(element(by.xpath('//*[(@id = "center_column")]//li')).getText()).toEqual("Invalid password.");
        
    })

    it ("CT005 - Efetuar login preenchendo o campo 'Email address' com um email inválido e preencher o" + 
	"campo 'Password' com uma senha válida.", 
    function() {
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        login.loginComEmailSenhaEmbranco();
        expect(element(by.xpath('//*[(@id = "center_column")]//li')).getText()).toEqual("Authentication failed.");
        
    })

    it ("CT006 - Efetuar login preenchendo o campo 'Email address' com um email v?lido e o campo"+ 
	"'Password' com uma senha válida.", 
    function() {
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        login.loginComEmailSenhaEmbranco();
        expect(element(by.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "navigation_page", " " ))]'))
        .getText()).toEqual("Authentication");
        
    })

});