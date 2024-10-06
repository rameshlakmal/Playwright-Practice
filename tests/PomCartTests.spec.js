import {test,expect} from "../fixtures/fixtures.js"



test.describe('Home page test cases' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Verify that user can add product to the cart', async ({homePage,page}) => {
        await homePage.NavhomePage();
        await homePage.selectProductOne();
        await page.waitForURL('https://practicesoftwaretesting.com/product/01J9CB0XWJH7FV9F5H7S6ZT792');
        await homePage.clickAddToCart();
        await page.waitForSelector('//span[@id="lblCartCount"]', { state: 'visible' });
        await homePage.assertTextValue('//span[@id="lblCartCount"]','1')
    })

    test('Verify that user cannot add products that have no stocks', async ({homePage,page}) => {
        await homePage.NavhomePage();
        await homePage.selectProduct('//img[@alt="Long Nose Pliers"]')
        await page.waitForURL('https://practicesoftwaretesting.com/product/01J9CB0XXH67SFPHTTXKYPANQB');
        await page.isDisabled('//button[@id="btn-add-to-cart"]')

    })

    test('Verify that user can search for a specific product using search bar', async ({homePage,commonActions,page}) => {
        await homePage.NavhomePage();
        await commonActions.fill('//input[@id="search-query"]','Slip Joint Pliers')
        await commonActions.click('//button[normalize-space()="Search"]')
        const products = await page.$$('.card-img-top');  // Replace with the selector for each product card/item

  
        // Verify that only one product is displayed
        expect(products.length).toBe(1);

    })

    test('Verify that user can filter products by category', async ({homePage,commonActions,page}) => {
        await homePage.NavhomePage();
        await commonActions.check('//input[@value="01J9CEEW83K24HZCA7JGC02W0M"]')
        expect(page.locator('//input[@value="01J9CEEW83K24HZCA7JGC02W0M"]')).toBeChecked();
        const products = await page.$$('.card');  // Replace with the selector for each product card/item
        // Verify that only one product is displayed
        expect(products.length).toBe(9);
    })

    test('Verify that user can filter products by brand', async ({homePage,commonActions,page}) => {
        await homePage.NavhomePage();
        await commonActions.check('//input[@value="01J9CEEW5WT27H9J7BJ2PSYHSF"]')
        const products = await page.$$('.card');  // Replace with the selector for each product card/item
        // Verify that only one product is displayed
        expect(products.length).toBe(1);
    })

    test('Verify that user can filter multiple products by category', async ({homePage,commonActions,page}) => {
        await homePage.NavhomePage();
        await commonActions.check('//input[@value="01J9CEEW83K24HZCA7JGC02W0G"]')
        await commonActions.check('//input[@value="01J9CEEW83K24HZCA7JGC02W0V"]')

        const products = await page.$$('.card');  // Replace with the selector for each product card/item
        // Verify that only one product is displayed
        expect(products.length).toBe(9);
    })

})

