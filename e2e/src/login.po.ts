import { browser, by, element, $ } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class LoginPage {

    navigateTo() {
        return browser.get('/login');
    }

    getTitleText() {
        return element(by.css('app-login h1')).getText();
    }

    getLoginPageComponent() {
        return $('app-login');
    }

    enterInvalidUserNameCredential() {
        this.getLoginPageComponent().$('input[type="text"]').sendKeys('InvalidUserName');
        this.getLoginPageComponent().$('input[type="password"]').sendKeys('InvalidPassword');
    }

    getLoginButton() {
        return this.getLoginPageComponent().$('button');
    }

    async clickLoginButton() {
        await this.getLoginButton().click();
    }

    getErrorMessage(): any {
        this.getLoginPageComponent().$('.error-message').getText();
    }
}
