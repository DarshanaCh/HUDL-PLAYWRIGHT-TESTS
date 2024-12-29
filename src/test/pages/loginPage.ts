import type { Page } from  '@playwright/test';
export class loginPage{
  
    readonly page: Page;

    private usernameInput='#username';
    private continueBtn='//button[@name="action"]';
    private passwordInput='#password';
    private ContinueBtn2='//button[@name= "Continue"]';
    

    constructor(page:Page){
        this.page=page
    }

    async selectusername(username: string)
    {
       await this.page.click(this.usernameInput); 
       await this.page.fill(this.usernameInput,"");
       await this.page.fill(this.usernameInput,username);
    }
 
    async clickContinueBtn()
    {
        await this.page.click(this.continueBtn);

    }
    async selectpassword(Password:string)
    {
        await this.page.click(this.passwordInput);
        await this.page.fill(this.passwordInput,"");
        await this.page.fill(this.passwordInput,Password);
    }
    async clickContinueBtn2()
    {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }
    async assertHomepage()
    {
        await this.page.getByText('Darshana C').isVisible();

    }
    async browserLoad()
    {
        console.log('Outline'); 
    }

   async close()
    {
        await this.page.close();
    }
}