import {test,expect} from "../fixtures/fixtures.js"



test.describe('Home page test cases' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Verify that user can add product to the cart', async ({homePage,page}) => {
        await homePage.NavhomePage();
        await homePage.selectProductOne();
        await page.waitForURL('https://practicesoftwaretesting.com/product/01J97D33P5FRPB1N74YKGTCGJ5');
        await homePage.clickAddToCart();
        await page.waitForSelector('//span[@id="lblCartCount"]', { state: 'visible' });
        await homePage.assertTextValue('//span[@id="lblCartCount"]','1')
    })

    test('Verify that user cannot add products that have no stocks', async ({homePage,page,locators,commonActions}) => {
        await homePage.NavhomePage();
        await commonActions.click(locators.PRODUCT_4)
        await page.waitForURL('https://practicesoftwaretesting.com/product/01J97D33P5FRPB1N74YKGTCGJ5');
        await homePage.clickAddToCart();
        await page.waitForSelector('//span[@id="lblCartCount"]', { state: 'visible' });
        await homePage.assertTextValue('//span[@id="lblCartCount"]','1')

    })

    // test('Verify that user can search for a specific product using search bar', async ({cartPage,page}) => {
    //     await cartPage.homePage();

    // })

    // test('Verify that user can filter products by category', async ({cartPage,page}) => {
    //     await cartPage.homePage();

    // })

    // test('Verify that user can filter products by brand', async ({cartPage,page}) => {
    //     await cartPage.homePage();

    // })

    // test('Verify that user can filter multiple products by category', async ({cartPage,page}) => {
    //     await cartPage.homePage();

    // })

    // test('Verify that user can filter multiple products by brand', async ({cartPage,page}) => {
    //     await cartPage.homePage();

    // })

    // test('Verify that user can sort products by A-Z', async ({cartPage,page}) => {
    //     await cartPage.homePage();

    // })

})

