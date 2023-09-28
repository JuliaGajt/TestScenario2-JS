import Page from './page';

class ElementAttributesPage extends Page {

    get mainParagraphs() { return $$(`div[class*='coloured-para-'] > p`)}

    get staticParagraph() { return $(`#domattributes`)}

    get jsParagraph() { return $(`#jsattributes`)}

    get jsDynamicParagraph() { return $(`#jsautoattributes`)}

    get addAnotherAttBtn() { return $(`button[class='styled-click-button']`)}

    get pageName() { return `Element Attributes Examples`}

    async open() {
        return await super.open('styled/attributes-test.html')
    }

    async centeredParagraphs() : Promise<ElementArrayType> {
        return (await this.mainParagraphs);
    }

    async staticParagraphElem(): Promise<WebdriverIO.Element> {
        return (await this.staticParagraph);
    }

    async jsParagraphElem(): Promise<WebdriverIO.Element> {
        return (await this.jsParagraph);
    }

    async jsDynamicParagraphElem(): Promise<WebdriverIO.Element> {
        return (await this.jsDynamicParagraph);
    }

    async addAnotherAttr(){
        (await this.addAnotherAttBtn).waitForDisplayed();
        (await this.addAnotherAttBtn).click();
    }

}

export default new ElementAttributesPage();