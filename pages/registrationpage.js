import { expect } from '@playwright/test'
import CommonAction from '../utils/commonactions.js'
import { LocatorFile } from '../Locators/LoginPageLocators.js'

export default class RegistrationPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }


    

}