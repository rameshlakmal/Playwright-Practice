import {test,expect} from "../fixtures/fixtures.js"



test.describe('Login form test cases' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Verify that user can login to the system with valid credentials', async ({loginPage,page}) => {
        await loginPage.loginPage();
        await loginPage.login('ramesh@mailinator.com','Mangotree@1999')
        await page.waitForURL('https://practicesoftwaretesting.com/account');
        await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })

    test('Verify that user cannot login to the system with invalid credentials',async ({loginPage,locators}) => {
        await loginPage.loginPage();
        await loginPage.login('gihan@mailinator.com','FRT@1999')
        await loginPage.assertErrorMessage(locators.INVALID_CREDENTIALS_XPATH,'Invalid email or password')

    })

    test('Verify that user cannot login to the system without email',async ({loginPage,locators}) => {
        await loginPage.loginPage();
        await loginPage.login('','FRT@1999') 
        await loginPage.assertErrorMessage(locators.LOGIN_EMAIL_ERR,'Email is required')
    })

    test('Verify that user cannot login to the system without password',async ({loginPage,locators}) => {
        await loginPage.loginPage();
        await loginPage.login('ramesh@mailinator.com','') 
        await loginPage.assertErrorMessage(locators.LOGIN_PW_ERR,'Password is required')
    })

    test('Verify that user cannot login to the system without email and password',async ({loginPage,locators}) => {
        await loginPage.loginPage();
        await loginPage.login('','') 
        await loginPage.assertErrorMessage(locators.LOGIN_PW_ERR,'Password is required')
        await loginPage.assertErrorMessage(locators.LOGIN_EMAIL_ERR,'Email is required')

    })

    test('Verify that login form does not allow customer to enter invalid email formats',async ({loginPage,locators}) => {
        await loginPage.loginPage();
        await loginPage.login('rameshmailinator.com','Mangotree@1999') 
        await loginPage.assertErrorMessage(locators.LOGIN_INVALID_EMAIL_FORMAT,'Email format is invalid')

    })

    test('Verify that login form does not allow customer to enter leangthy passwords',async ({loginPage,locators}) => {
        await loginPage.loginPage();
        await loginPage.login('rameshmailinator.com','sdafsdfsdfevawefawef42asdytvaybwegfw7aeftg7weg6yf87weqfg') 
        await loginPage.assertErrorMessage(locators.LOGIN_WITH_LEANGTHY_PW,'Password length is invalid')

    })

    test('Verify functionality of the registration page link',async ({loginPage,locators,commonActions,page}) => {
        await loginPage.loginPage();
        await commonActions.click(locators.REG_PAGE_LINK)
        await page.waitForURL('https://practicesoftwaretesting.com/auth/register');
        await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/auth/register')

    })

    test('Verify functionality of the forgot password page link',async ({loginPage,locators,commonActions,page}) => {
        await loginPage.loginPage();
        await commonActions.click(locators.FORGOT_PW_LINK)
        await page.waitForURL('https://practicesoftwaretesting.com/auth/forgot-password');
        await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/auth/forgot-password')

    })

    test('Verify functionality of the password visibility button',async ({loginPage,locators,commonActions,page}) => {
        await loginPage.loginPage();
        await loginPage.login('','FRT@1999') 

        const passwordField = page.locator(locators.PW_XPATH);
        let fieldType = passwordField.getAttribute('type');

        expect(fieldType).toBe('password');

        await commonActions.click(locators.PW_VISIBILITY_BTN)

        fieldType = passwordField.getAttribute('type');
        expect(fieldType).toBe('text');
    })

})

