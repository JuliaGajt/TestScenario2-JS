import { Then } from "@wdio/cucumber-framework";
import findByPlaygroundPage from "../../pageobjects/findByPlayground.page";
const { expect } = require('chai')

Then(`paragraphs with alphabetical letters can be found`, async () => {
    let paraArray = await findByPlaygroundPage.getAllParagraphsWithAlphabet();
    expect(paraArray).to.be.an('array').and.have.lengthOf(25);
    for(let i=0; i<25; i++){
        expect(await paraArray[i].getText()).contains(String.fromCharCode('a'.charCodeAt(0) + i))
    }
})

Then(`nested paragraphs can be found`, async () => {
    let paraArray = await findByPlaygroundPage.getAllParagraphsNested();
    expect(paraArray).to.be.an('array').and.have.lengthOf(16);
    for(let i=0; i<16; i++){
        expect(await paraArray[i].getText()).contains('nested para text')
    }
})

Then(`paragraphs with links can be found`, async () => {
    let paraArray = await findByPlaygroundPage.getAllParagraphsWithListLinks();
    expect(paraArray).to.be.an('array').and.have.lengthOf(25);
    for(let i=0; i<25; i++){
        expect(await paraArray[i].getText()).contains(`jump to para ${i}`)
    }
})

Then(`paragraphs with ID that starts with "a" can be found`, async () => {
    let paraArray = await findByPlaygroundPage.getAllParagraphsByIdA();
    expect(paraArray).to.be.an('array').and.have.lengthOf(50);
})

Then(`paragraphs with ID that starts with "p" can be found`, async () => {
    let paraArray = await findByPlaygroundPage.getAllParagraphsByIdP();
    expect(paraArray).to.be.an('array').and.have.lengthOf(41);
})

Then(`paragraps with <a> that have class "normal"`, async () => {
    let paraArray = await findByPlaygroundPage.getAllParagraphsByIdA();
    expect(paraArray).to.be.an('array').and.have.lengthOf(50);
})

