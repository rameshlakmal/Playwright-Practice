import { expect } from '@playwright/test'
import CommonAction from '../utils/commonactions.js'
import { LocatorFile } from '../Locators/LoginPageLocators.js'

export default class RegistrationPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.registrationPageLocators = LocatorFile.RegistrationPageLocators;
    }

    async registrationPage(){
        await this.actions.navigate('https://practicesoftwaretesting.com/auth/register')
    }

    async enterFirstName(firstName){
        await this.actions.fill(this.registrationPageLocators.FIRST_NAME, firstName)
    }

    async enterLastName(lastName){
        await this.actions.fill(this.registrationPageLocators.LAST_NAME, lastName)
    }

    async enterDOB(dob){
        await this.actions.click(this.registrationPageLocators.DOB)
        await this.actions.type(this.registrationPageLocators.DOB, dob,{delay:100})
    }

    async enterAddress(address){
        await this.actions.fill(this.registrationPageLocators.ADDRESS,address)
    }

    async enterPostCode(postCode){
        await this.actions.fill(this.registrationPageLocators.POST_CODE, postCode)
    }
    
    async enterCity(city){
        await this.actions.fill(this.registrationPageLocators.CITY, city)
    }

    async enterState(state){
        await this.actions.fill(this.registrationPageLocators.STATE, state)
    }

    async selectCountry(country){
        await this.actions.selectDropdown(this.registrationPageLocators.COUNTRY,country)
    }

    async enterPhoneNumber(phone){
        await this.actions.fill(this.registrationPageLocators.PHONE, phone)
    }
    
    async enterEmail(email){
        await this.actions.fill(this.registrationPageLocators.EMAIL, email)
    }

    async enterPassword(password){
        await this.actions.fill(this.registrationPageLocators.PW, password)
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