import { Then, When } from "@wdio/cucumber-framework";
import nestedFramesPage from "../../pageobjects/nestedFrames.page";
const { expect } = require('chai')

When(`switch to Left Frame`, async () => { 
    await nestedFramesPage.switchToLeftFrame()
})

When(`switch to Right Frame`, async () => { 
    await nestedFramesPage.switchToRightFrame()
})

When(`switch to Middle Frame`, async () => { 
    await nestedFramesPage.switchToMiddleFrame()
})

Then(/list of (.*) elements from frame is accesible$/, async number => {
    let list = await nestedFramesPage.getListFromFrame();
    expect(list).to.be.an('array').and.be.lengthOf(parseInt(number));
})