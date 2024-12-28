import type { Page } from  '@playwright/test';
export class videoPage{
  
    readonly page: Page;

    private videolnk='//span[normalize-space()="Video"]';
   
    

    constructor(page:Page){
        this.page=page
    }

    async selectvideolnkclick()
    {
       await this.page.click(this.videolnk);
    }
}