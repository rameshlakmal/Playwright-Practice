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
    };
  }


    static get RegistrationPageLocators(){
      return{
        FIRST_NAME: '#first_name',
        LAST_NAME: '#last_name',
        DOB: '//input[@id="dob"]',
        ADDRESS: '//input[@id="address"]',
        POST_CODE: '//input[@id="postcode"]',
        CITY: '//input[@id="city"]',
        STATE: '//input[@id="state"]',
        COUNTRY: '//select[@id="country"]',
        PHONE: '//input[@id="phone"]',
        EMAIL: '//input[@id="email"]',
        PW: '//input[@id="password"]',
        REG_BTN_XPATH : '//button[normalize-space()="Register"]',
        FIRST_NAME_ERR : '//div[contains(text(),"First name is required")]',
        LAST_NAME_ERR : '//div[contains(text(),"fields.last-name.required")]',
        DOB_ERR : '//div[contains(text(),"Date of Birth is required")]',
        ADDRESS_ERR : '//div[contains(text(),"Address is required")]',
        POSTAL_CODE_ERR : '//div[contains(text(),"Postcode is required")]',
        CITY_ERR : '//div[contains(text(),"City is required")]',
        STATE_ERR : '//div[contains(text(),"State is required")]',
        COUNTRY_ERR : '//div[contains(text(),"Country is required")]',
        PHONE_NUMBER_ERR : '//div[contains(text(),"Phone is required.")]',
        EMAIL_ERR : '//div[contains(text(),"Email is required")]',
        PW_ERR : '//div[contains(text(),"Password is required")]',
        REG_VALIDATION: '//div[@class="help-block"]',
        PHONE_VALIDATION: '//div[contains(text(),"Only numbers are allowed.")]',
        PW_VALIDATION: '//div[contains(text(),"Password must be minimal 6 characters long.")]',
        PW_VISIBILITY_BTN : '//button[@class="btn btn-outline-secondary"]'
      };
    }


    
    static get HomePageLocators(){
      return{
        HOME: '//a[normalize-space()="Home"]',
        MIN: '//*[@id="filters"]/div[1]/ngx-slider/span[5]',
        MAX: '//*[@id="filters"]/div[1]/ngx-slider/span[6]',
        ADD_TO_CART: '//button[@id="btn-add-to-cart"]',
        PRODUCT_1: '//img[@alt="Combination Pliers"]',
        PRODUCT_4: '//img[@alt="Long Nose Pliers"]',
        UNIT_PRICE: '//span[@aria-label="unit-price"]',
        SEARCH_BAR: '//input[@id="search-query"]',
        SEARCH_BTN: '//button[normalize-space()="Search"]',
        CART_COUNT: '//span[@id="lblCartCount"]',
      };
    }

}