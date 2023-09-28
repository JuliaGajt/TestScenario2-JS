import Page from './page';


class AlertsPage extends Page {

  get alertBoxBtn() { return $(`#alertexamples`)}
  get confirmBoxBtn() { return $(`#confirmexample`)}
  get promptBoxBtn() { return $(`#promptexample`)}

  get alertHandeledText() { return $(`#alertexplanation`)}
  get alertConfirmedText() { return $(`#confirmexplanation`)}
  get alertPromptHandeledText() { return $(`#promptexplanation`)}

  get confirmReturn() { return $(`#confirmreturn`)}
  get promptReturn() { return $(`#promptreturn`)}
  get alertExplenation() { return $(`#alertexplanation`)}
  get confirmExplenation() { return $(`#confirmexplanation`)}
  get promptExplenation() { return $(`#promptexplanation`)}

  open() {
    return super.open('');
  }

  async clickAlertBoxBtn() {
    await (await this.alertBoxBtn).click()
  }

  async clickConfirmBoxBtn() {
    await (await this.confirmBoxBtn).click()
  }

  async clickPromptBoxBtn() {
    await (await this.promptBoxBtn).click()
  }

  async handleAlertBox() {
    if(browser.isAlertOpen()){
      await browser.acceptAlert()
    }
  }

  async handleConfirmBox(confirm: boolean) {
    if(browser.isAlertOpen()){
      confirm? await browser.acceptAlert() : await browser.dismissAlert();
    }
  }

  async handlePromptBox(text: string) {
    if(browser.isAlertOpen()){
      text !== ''? await browser.sendAlertText(text): null;
    }
  }

}

export default new AlertsPage();