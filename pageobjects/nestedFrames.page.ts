import Page from "./page";

class NestedFramesPage extends Page {

    get leftFrame() { return $(`//frame[@name="left"]`)}
    get rightFrame() { return $(`//frame[@name="right"]`)}
    get middleFrame() { return $(`//frame[@name="middle"]`)}

    get list() { return $$('ul > li')}

    async switchToLeftFrame() { 
        await browser.switchToFrame(await this.leftFrame);
    }

    async switchToRightFrame() { 
        await browser.switchToFrame(await this.rightFrame);
    }

    async switchToMiddleFrame() { 
        await browser.switchToFrame(await this.middleFrame);
    }

    async getListFromFrame() { 
        return await this.list;
    }


}

export default new NestedFramesPage()