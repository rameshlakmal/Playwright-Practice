import {test,expect} from "../fixtures/fixtures.js"



test.describe('Login Test' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })


    test('Register without empty required fields', async ({ registrationPage, locators, commonActions }) => {
        await registrationPage.registrationPage();
        await commonActions.click(locators.REG_BTN_XPATH);
    
        // Array of locator and message pairs
        const errorChecks = [
            { locator: locators.FIRST_NAME_ERR, message: 'First name is required' },
            { locator: locators.LAST_NAME_ERR, message: 'fields.last-name.required' },
            { locator: locators.DOB_ERR, message: 'Date of Birth is required' },
            { locator: locators.ADDRESS_ERR, message: 'Address is required' },
            { locator: locators.POSTAL_CODE_ERR, message: 'Postcode is required' },
            { locator: locators.CITY_ERR, message: 'City is required' },
            { locator: locators.STATE_ERR, message: 'State is required' },
            { locator: locators.COUNTRY_ERR, message: 'Country is required' },
            { locator: locators.PHONE_NUMBER_ERR, message: 'Phone is required.' },
            { locator: locators.EMAIL_ERR, message: 'Email is required' },
            { locator: locators.PW_ERR, message: 'Password is required' },
        ];
    
        // Loop through each error check and assert the message
        for (const { locator, message } of errorChecks) {
            await registrationPage.assertErrorMessage(locator, message);
        }
    });
    

})