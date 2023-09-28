import { Then, When } from "@wdio/cucumber-framework";
import HTMLFormExamplePage from "../../pageobjects/HTMLFormExample.page";
const htmlData =  require('../../data/htmlForm')
const { expect } = require('chai')

When(`user fill form with data`, async () => {
    let data = htmlData.form[0]
    await HTMLFormExamplePage.fillForm(data.username, data.password,data.comment, data.filenamepath, data.checkboxNumbers, data.radioNumber, data.multiSelectItem, data.dropdownItem)
    await browser.pause(5000)
})

When(`submit form`, async () => {
    await HTMLFormExamplePage.submitForm()
})

When(`cancel form`, async () => {
    await HTMLFormExamplePage.cancelForm()
})

Then(`title change to "Processed Form Details"`, async () => {
    expect(await browser.getTitle()).equals("Processed Form Details")
})

Then(`all submitted information from data appears`, async () => {
    
    // submitted data from file 
    let data = htmlData.form[0]

    expect(await (await HTMLFormExamplePage.usernameValue).getText()).equals(data.username)
    expect(await (await HTMLFormExamplePage.passValue).getText()).equals(data.password)
    expect(await (await HTMLFormExamplePage.commValue).getText()).equals(data.comment)
    expect(data.filenamepath).contains(await (await HTMLFormExamplePage.fileValue).getText())

    // checkbox values 
    let checkboxesVals = await HTMLFormExamplePage.checkValues;
    for(let i=0; i<checkboxesVals.length; i++){
        expect(await checkboxesVals[i].getText()).contains(data.checkboxNumbers[i]);
    }

    // radio value
    expect(await (await HTMLFormExamplePage.radioValue).getText()).contains(data.radioNumber)

    // multiselect values
    let multiVals = await HTMLFormExamplePage.multiSelValues;
    let firtMultiSelect = data.multiSelectItem[0];
    let lastMultiselect = data.multiSelectItem[1];

    for(let i=0; i<lastMultiselect-firtMultiSelect; i++){
        expect(await multiVals[i].getText()).contains(firtMultiSelect+i);
    }

    // dropdown item
    expect(await (await HTMLFormExamplePage.dropdownValue).getText()).contains(data.dropdownItem)
    
    // submittion form
    expect(await (await HTMLFormExamplePage.submitValue).getText()).contains('submit')

})
