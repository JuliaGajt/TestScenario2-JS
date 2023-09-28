import { Then, When } from "@wdio/cucumber-framework";
import fileUploadExamplePage from "../../pageobjects/fileUploadExample.page";
const htmlData =  require('../../data/htmlForm')
const { expect } = require('chai')
let data = htmlData.form[0]

When(`uploading file`, async ()=> {
    await fileUploadExamplePage.uploadGeneralFile(data.filenamepath)
})

Then(`my filename is visible`, async () => {
    expect(data.filenamepath).contains(await (await fileUploadExamplePage.uploadedFilename).getText())
})
