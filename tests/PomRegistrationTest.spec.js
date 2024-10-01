import {test,expect} from "../fixtures/fixtures.js"



test.describe('Registration form test cases' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })


    test('Verify that customer cannot complete registration with empty required fields', async ({ registrationPage, locators, commonActions }) => {
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

    test('Verify that customer can register successfully with valid details', async ({ registrationPage, locators, commonActions,page }) => {
        await registrationPage.registrationPage();
        await registrationPage.enterFirstName('Ramesh')
        await registrationPage.enterLastName('Lakmal')
        await registrationPage.enterDOB('12/13/1999')
        await registrationPage.enterAddress('34,Kandy,Peradeniya')
        await registrationPage.enterPostCode('31242')
        await registrationPage.enterCity('Kandy')
        await registrationPage.enterState('Central Province')
        await registrationPage.selectCountry('LK')
        await registrationPage.enterPhoneNumber('0770740389')
        await registrationPage.enterEmail('ramesdhs@mailinator.com')
        await registrationPage.enterPassword('FR3sf@1999')

        await commonActions.click(locators.REG_BTN_XPATH);


        await page.waitForURL('https://practicesoftwaretesting.com/auth/login');
        await registrationPage.assertCurrentURL('https://practicesoftwaretesting.com/auth/login')
    });


    test('Verify that customer should be 18+ years old to complete the registration', async ({ registrationPage, locators, commonActions,page }) => {
        await registrationPage.registrationPage();
        await registrationPage.enterFirstName('Ramesh')
        await registrationPage.enterLastName('Lakmal')
        await registrationPage.enterDOB('10/10/2024')
        await registrationPage.enterAddress('34,Kandy,Peradeniya')
        await registrationPage.enterPostCode('31242')
        await registrationPage.enterCity('Kandy')
        await registrationPage.enterState('Central Province')
        await registrationPage.selectCountry('LK')
        await registrationPage.enterPhoneNumber('0770740389')
        await registrationPage.enterEmail('ramesdhs@mailinator.com')
        await registrationPage.enterPassword('FR3fsf@1999')

        await commonActions.click(locators.REG_BTN_XPATH);

        await registrationPage.assertErrorMessage(locators.REG_VALIDATION,'Customer must be 18 years old.')
    });

    test('Verify that customer cannot register using same email more than once', async ({ registrationPage, locators, commonActions,page }) => {
        await registrationPage.registrationPage();
        await registrationPage.enterFirstName('Ramesh')
        await registrationPage.enterLastName('Lakmal')
        await registrationPage.enterDOB('13/12/1999')
        await registrationPage.enterAddress('34,Kandy,Peradeniya')
        await registrationPage.enterPostCode('31242')
        await registrationPage.enterCity('Kandy')
        await registrationPage.enterState('Central Province')
        await registrationPage.selectCountry('LK')
        await registrationPage.enterPhoneNumber('0770740389')
        await registrationPage.enterEmail('ramesh@mailinator.com')
        await registrationPage.enterPassword('FR3fsf@1999')

        await commonActions.click(locators.REG_BTN_XPATH);

        await registrationPage.assertErrorMessage(locators.REG_VALIDATION,'A customer with this email address already exists.')
    });


    test('Verify that customer cannot register by entering letters to the phone number field', async ({ registrationPage, locators, commonActions,page }) => {
        await registrationPage.registrationPage();
        await registrationPage.enterFirstName('Ramesh')
        await registrationPage.enterLastName('Lakmal')
        await registrationPage.enterDOB('13/12/1999')
        await registrationPage.enterAddress('34,Kandy,Peradeniya')
        await registrationPage.enterPostCode('31242')
        await registrationPage.enterCity('Kandy')
        await registrationPage.enterState('Central Province')
        await registrationPage.selectCountry('LK')
        await registrationPage.enterPhoneNumber('sdfsdfgsgfhg')
        await registrationPage.enterEmail('ramesh@mailinator.com')
        await registrationPage.enterPassword('FR3fsf@1999')

        await commonActions.click(locators.REG_BTN_XPATH);

        await registrationPage.assertErrorMessage(locators.PHONE_VALIDATION,'Only numbers are allowed.')
    });
    

})