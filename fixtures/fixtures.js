import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions.js";
import LoginPage from "../pages/loginpage.js"
import {LocatorFile} from '../Locators/LoginPageLocators.js'
import RegistrationPage from "../pages/registrationpage.js";
import CartPage from "../pages/cartpage.js";

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

    cartPage: async({page},use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

export const expect = base.expect;