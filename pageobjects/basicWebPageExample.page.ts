import Page from './page';


class BasicWebPageExamplePage extends Page {


    get allCenteredParagraphs() { return $$(`div[class='centered'] > p`);}
    
    get firstCenteredPara() { return $('#para1');}

    get secondCenteredPara() { return $('#para2');}

    get pageName() {return `Basic Web Page Example`;}

    // openPage() {
    //     return super.openPage(this.pageName);
    // }

    async firstParaText() {
        await this.firstCenteredPara.waitForDisplayed();
        return await this.firstCenteredPara.getText();
    }

    async secondParaText() {
        await this.secondCenteredPara.waitForDisplayed();
        return await this.secondCenteredPara.getText();
    }

    async centeredParagraphs() {
        return await this.allCenteredParagraphs;
    }



}

export default new BasicWebPageExamplePage();