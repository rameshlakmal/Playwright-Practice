import { expect } from '@playwright/test'
import CommonAction from '../utils/commonactions.js'
import { LocatorFile } from '../Locators/LoginPageLocators.js'

export default class RegistrationPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }


    
    async registrationPage(){
        await this.actions.navigate('https://practicesoftwaretesting.com/auth/register')
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