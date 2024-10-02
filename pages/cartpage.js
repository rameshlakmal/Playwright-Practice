import { expect } from '@playwright/test'
import CommonAction from '../utils/commonactions.js'
import { LocatorFile } from '../Locators/LoginPageLocators.js'

export default class CartPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.cartLocators = LocatorFile.CartPageLocators;
        this.registrationLocators= LocatorFile.RegistrationPageLocators;
        this.loginLocators = LocatorFile.LoginPageLocators;
    }


    async homePage(){
        await this.actions.navigate('https://practicesoftwaretesting.com/')
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






    // async createAcc(){

    //     const randomEmail = this.actions.generateRandomEmail();
    //     const password = this.actions.generatePassword();

    //     await this.actions.navigate('https://practicesoftwaretesting.com/auth/register')
    //     await this.actions.fill(this.registrationLocators.FIRST_NAME,'Ramesh')
    //     await this.actions.fill(this.registrationLocators.LAST_NAME,'Lakmal')
    //     await this.actions.type(this.registrationLocators.DOB,'12/12/1999')
    //     await this.actions.fill(this.registrationLocators.ADDRESS,'34,Kandy,Peradeniya')
    //     await this.actions.fill(this.registrationLocators.POST_CODE,'31242')
    //     await this.actions.fill(this.registrationLocators.CITY,'Kandy')
    //     await this.actions.fill(this.registrationLocators.STATE,'Central Province')
    //     await this.actions.selectDropdown(this.registrationLocators.COUNTRY,'LK')
    //     await this.actions.fill(this.registrationLocators.PHONE,'0770740372')
    //     await this.actions.fill(this.registrationLocators.EMAIL,'jodadane@mailinator.com')
    //     await this.actions.fill(this.registrationLocators.PW,'Mangotree@1999')
    //     await this.actions.click(this.registrationLocators.REG_BTN_XPATH);
    //     await this.actions.fill(this.loginLocators.ENTER_USERNAME, 'sha@mailinator.com')
    //     await this.actions.fill(this.loginLocators.ENTER_PASSWORD, 'Mangotree@1999')
    //     await this.actions.click(this.loginLocators.CLICK_LOGINBUTTON)
    // }

    // async login(){
    //     await this.actions.fill(this.loginLocators.ENTER_USERNAME, 'sha@mailinator.com')
    //     await this.actions.fill(this.loginLocators.ENTER_PASSWORD, 'Mangotree@1999')
    //     await this.actions.click(this.loginLocators.CLICK_LOGINBUTTON)
    // }

    // async navigateToHome(){
    //     await this.actions.click(this.cartLocators.HOME)
    // }

    
}