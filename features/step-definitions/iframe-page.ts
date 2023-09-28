import { Then, When } from "@wdio/cucumber-framework";
import iFramesTestPage from "../../pageobjects/iFramesTest.page";
const { expect } = require('chai')

When(`switch to Header Frame`, async () => {
    await browser.switchToFrame(await iFramesTestPage.iFrameHeaderID);
})

When(`switch to List Frame`, async () => {
    await browser.switchToFrame(await iFramesTestPage.iframeListID);
})

Then(`paragraph from iframe is accesible`, async () => {
    expect(await (await iFramesTestPage.paragraphFromFrame).getText()).equals(`This page is used in an iFrame.`);
})

Then(`elements from list are accesible`, async () => {
    expect(await iFramesTestPage.listFromFrame).to.be.an('array').and.have.lengthOf(60);
})

