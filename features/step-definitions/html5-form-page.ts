import { Then, When } from "@wdio/cucumber-framework";
import HTML5FormPage from "../../pageobjects/HTML5FormPage";
const formdata = require('../../data/html5Form')
const { expect } = require('chai')

When(`user fill HTML5 form with data and submit it`, async () => {
    let formData = formdata;
    await HTML5FormPage.fillTheForm(formData.color, formData.date, formData.localDateTime, formData.email, formData.month, formData.number);
    await HTML5FormPage.submitForm()
    await browser.pause(20000);
})

Then(`all submitted information appears`, async () => {
    
    let data = formdata
    await HTML5FormPage.colorInput.waitForDisplayed()
    expect(await (await HTML5FormPage.colorInput).getText()).equals(data.color)
    expect(await (await HTML5FormPage.dateVal).getText()).equals(data.date)
    expect(await (await HTML5FormPage.dateTimeVal).getText()).equals(data.localDateTime)
    expect(await (await HTML5FormPage.emailVal).getText()).contains(data.email)
    expect(await (await HTML5FormPage.monthVal).getText()).contains(data.month)
    expect(await (await HTML5FormPage.numberVal).getText()).contains(data.number)

    // submittion form
    expect(await (await HTML5FormPage.submitVal).getText()).contains('submit')
})