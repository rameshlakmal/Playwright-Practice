import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions.js";
import LoginPage from "../pages/loginpage.js"
import {LocatorFile} from '../Locators/LoginPageLocators.js'

export const test = base.extend({
    loginPage: async({page},use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    commonActions: async({page},use) =>{
        const commonActions = new CommonAction(page);
        await use(commonActions);
    },

    locators: async({},use) =>{
        const locators = LocatorFile.LoginPageLocators;  // Access the locators
        await use(locators);
    }
});

export const expect = base.expect;