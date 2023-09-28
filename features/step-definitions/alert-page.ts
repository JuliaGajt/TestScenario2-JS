import { Then, When } from "@wdio/cucumber-framework";
import alertsPage from "../../pageobjects/alerts.page";
const { expect } = require('chai')

When(`user click button "Show alert box"`, async () => {
    await alertsPage.clickAlertBoxBtn();
})

When(`user click button "Show confirm box"`, async () => {
    await alertsPage.clickConfirmBoxBtn();
})

When(`user click button "Show prompt box"`, async () => {
    await alertsPage.clickPromptBoxBtn();
})

When(`handle alert box`, async () => {
    await alertsPage.handleAlertBox();
})

When(/"(.*)" confirm box$/, async accept => {

    if(accept === 'accept'){
        await alertsPage.handleConfirmBox(true)
    } else {
        await alertsPage.handleConfirmBox(false)
    }
})

When(/send "(.*)" to prompt box$/, async text => {
    text? await alertsPage.handlePromptBox(text): null;
})

Then(/alert "(.*)" messeage appears with "(.*)"$/, async (accept, text) => {
    
    if(accept === 'accept'){
        text === ''? text = 'change me' : null;
        expect(await(await alertsPage.promptExplenation).getText()).equals(`You clicked OK. 'prompt' returned ${text}`)
        expect(await (await alertsPage.promptReturn).getText()).equals(text);
    } else {
        expect(await(await alertsPage.promptExplenation).getText()).equals(`You clicked Cancel. 'prompt' returned null`)
        expect(await(await alertsPage.promptReturn).getText()).equals('')
    }
})

Then(`"alert handled" messeage appears`, async () => {
    expect(await (await alertsPage.alertExplenation).getText()).equals(`You triggered and handled the alert dialog`);
})

Then(/alert "(.*)" messeage appears$/, async accept => {
    if(accept === 'accept'){
        expect(await(await alertsPage.confirmReturn).getText()).equals(`true`)
        expect(await(await alertsPage.confirmExplenation).getText()).equals(`You clicked OK, confirm returned true.`)
    } else {
        expect(await(await alertsPage.confirmReturn).getText()).equals(`false`)
        expect(await(await alertsPage.confirmExplenation).getText()).equals(`You clicked Cancel, confirm returned false.`)
    }})

