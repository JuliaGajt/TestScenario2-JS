import { Then } from "@wdio/cucumber-framework";
import basicWebPageExamplePage from "../../pageobjects/basicWebPageExample.page";
const { expect } = require('chai')

Then(`there are two centered paragraphs`, async () => {
    expect(await basicWebPageExamplePage.centeredParagraphs()).to.be.an('array').and.to.have.lengthOf(2);
})

Then(`first paragraph equals "A paragraph of text"`, async () => {
    expect(await basicWebPageExamplePage.firstParaText()).equals('A paragraph of text');
})

Then(`second paragraph equals "Another paragraph of text"`, async () => {
    expect(await basicWebPageExamplePage.secondParaText()).equals('Another paragraph of text');
})
