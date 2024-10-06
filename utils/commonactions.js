import { selectors } from "@playwright/test";

export default class CommonAction{
    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.pause()
        await this.page.goto(url)
    }

    async click(selector){
        await this.page.click(selector)
    }

    async fill(selector, text){
        await this.page.fill(selector, text)
    }

    async type(selector,text,delay){
        await this.page.type(selector,text,delay)
    }

    async getText(selector){
        return await this.page.textContent(selector)
    }

    async check(selector){
        return await this.page.check(selector)
    }




    async selectDropdown(selector, value){
        await this.page.selectOption(selector, value);
    }

    async getCurrentUrl() {
        return await this.page.url();
    }











        // Utility function to generate random email
    async generateRandomEmail() {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomString = '';
        
        // Generate a 5-letter random string
        for (let i = 0; i < 5; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        return `${randomString}@mailinator.com`;
    }


    async generatePassword() {
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    
        let password = '';
    
        // Ensure at least one of each required character type
        password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
        password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    
        // Fill the rest of the password with random characters from all sets
        const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + symbols;
        for (let i = password.length; i < 8; i++) {
            password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }
    
        // Shuffle the characters in the password to avoid predictable patterns
        password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
        return password;
    }


}