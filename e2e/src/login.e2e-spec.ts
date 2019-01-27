import { LoginPage } from './login.po';

describe('Login Page', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('should display login title', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Please Login');
    });

    it('should show Login button as disabled', () => {
        expect(page.getLoginButton().isPresent()).toBeTruthy();
        expect(page.getLoginButton().getText()).toBe('Login');
    });

    describe('When keyin invalid username', () => {
        beforeEach(() => {
            page.enterInvalidUserNameCredential();
        });

        afterEach(() => {

        });

        it('Should enable Login button', () => {

        });

        describe('When Login button is clicked', () => {
            beforeEach(() => {
                page.clickLoginButton();
            });

            it('should display invalid credential message', () => {
                const errorMessage = page.getErrorMessage();
                expect(errorMessage).toBe('Invalid UserName');
            });
        });
    });
});
