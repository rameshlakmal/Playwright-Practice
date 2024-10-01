import {test,expect} from "../fixtures/fixtures.js"



test.describe('Login Test' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })


    test('Register without empty required fields', async ({loginPage,page}) => {
        await loginPage.loginPage();
        await loginPage.login('ramesh@mailinator.com','Mangotree@1999')
        await page.waitForURL('https://practicesoftwaretesting.com/account');
        await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })

})