import { expect } from '@playwright/test'
import CommonAction from '../utils/commonactions.js'
import { LocatorFile } from '../Locators/LoginPageLocators.js'

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }

    async loginPage(){
        await this.actions.navigate('https://practicesoftwaretesting.com/')
        await this.actions.click(this.locators.LOGIN_PAGE_LINK)

    }

    async login(username, password){
        await this.actions.fill(this.locators.ENTER_USERNAME, username)
        await this.actions.fill(this.locators.ENTER_PASSWORD, password)
        await this.actions.click(this.locators.CLICK_LOGINBUTTON)
    }

    async getErrorMessage(xpath){
        return await this.actions.getText(xpath)
    }

    async assertErrorMessage(xpath,expectedMessage){
        const actualMessage = await this.getErrorMessage(xpath)
        expect(actualMessage).toContain(expectedMessage)
    }

    async getURL(){
        return await this.actions.getCurrentUrl()
    }

    async assertCurrentURL(verifyURL){
        const currentURL = await this.getURL()
        expect(currentURL).toContain(verifyURL)
    }
}