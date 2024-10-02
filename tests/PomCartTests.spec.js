import {test,expect} from "../fixtures/fixtures.js"



test.describe('Cart test cases' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Verify that user can add product to the cart', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user cannot add products that have no stocks', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user can search for a specific product using search bar', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user can filter products by category', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user can filter products by brand', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user can filter multiple products by category', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user can filter multiple products by brand', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

    test('Verify that user can sort products by A-Z', async ({cartPage,page}) => {
        await cartPage.homePage();

    })

})

