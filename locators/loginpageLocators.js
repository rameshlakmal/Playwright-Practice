export class LocatorFile {
    static get LoginPageLocators() {
      return {
        LOGIN_PAGE_LINK : '//*[@id="navbarSupportedContent"]/ul/li[4]/a',
        ENTER_USERNAME : '#email',
        ENTER_PASSWORD : 'input[placeholder="Your password"]',
        PW_XPATH : '/html[1]/body[1]/app-root[1]/div[1]/app-login[1]/div[1]/div[1]/div[1]/form[1]/div[2]/app-password-input[1]/div[1]/input[1]',
        CLICK_LOGINBUTTON : '[value="Login"]',
        INVALID_CREDENTIALS_XPATH : '//div[@class="help-block"]',
        LOGIN_EMAIL_ERR : '//div[@id="email-error"]',
        LOGIN_PW_ERR : '//div[contains(text(),"Password is required")]',
        LOGIN_INVALID_EMAIL_FORMAT : '//div[contains(text(),"Email format is invalid")]',
        LOGIN_WITH_LEANGTHY_PW : '//div[contains(text(),"Password length is invalid")]',
        REG_PAGE_LINK : '//a[normalize-space()="Register your account"]',
        FORGOT_PW_LINK : '//a[normalize-space()="Forgot your Password?"]',
        PW_VISIBILITY_BTN : '//button[@class="btn btn-outline-secondary"]'

  }
}
}