import { Given, Then, When } from "@wdio/cucumber-framework";
import fakeAlertsPage from "../../pageobjects/fakeAlerts.page";
const { expect } = require('chai')

Given(`the "alert box" is visible`, async () => {
    if(!await (await fakeAlertsPage.fakeModalAlertText).isDisplayed()){
        throw new Error(`Alert not visible.`)
    }
})

When(`click on "Show fake alert box" button`, async () => {
    await fakeAlertsPage.clickFakeAlertBtn();
})

When(`click on "Show modal dialog" button`, async () => {
    await fakeAlertsPage.clickModalDialogBtn();
})

Then(/Alert with text "(.*)" appears$/, async text => {
    expect(await fakeAlertsPage.getAlertText()).equals(text)
})

When(`clik "OK" button`, async () => {
    await fakeAlertsPage.clickOkBtn();
})

Then(`alert close`, async () => {
    expect(!await (await fakeAlertsPage.fakeModalAlertText).isDisplayed()) 
})