import Page from "./page";


class FakeAlertPage extends Page {

    get fakeAlertBtn() { return $(`#fakealert`)}
    get modalDialogBtn() { return $(`#modaldialog`)}

    get fakeModalAlertText() { return $(`#dialog-text`)}
    get fakeAlertOkBtn() { return $(`#dialog-ok`)}
    
    async clickFakeAlertBtn() {
        await (await this.fakeAlertBtn).click()
    }

    async clickModalDialogBtn() {
        await (await this.modalDialogBtn).click()
    }

    async getAlertText() {
        return await (await this.fakeModalAlertText).getText()
    }

    async clickOkBtn() {
        await (await this.fakeAlertOkBtn).click()
    }

}

export default new FakeAlertPage();