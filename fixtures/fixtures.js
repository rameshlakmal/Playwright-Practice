import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions.js";
import LoginPage from "../pages/loginpage.js"
import {LocatorFile} from '../Locators/LoginPageLocators.js'
import RegistrationPage from "../pages/registrationpage.js";
import HomePage from "../pages/homepage.js";

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
        const locators = {
            ...LocatorFile.LoginPageLocators,  // Access the locators
            ...LocatorFile.RegistrationPageLocators,
            ...LocatorFile.CartPageLocators
        }
        await use(locators);
    },

    registrationPage: async({page},use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },

    homePage: async({page},use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
});

export const expect = base.expect;