import Page from "./page";

class ExpandingDivCssPage extends Page {

    get expandingDiv() { return $(`div[class="expand"]`)}
    get linkToClick() { return $(`div[class="expand"] a`)}

    async hoverDiv(){ 
        await (await this.expandingDiv).moveTo()
    }

    async clickExpandedLink() {
        await (await this.linkToClick).waitForDisplayed()
        await (await this.linkToClick).click() 
    }

}

export default new ExpandingDivCssPage();