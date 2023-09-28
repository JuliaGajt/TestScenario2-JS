import { Given, Then, When } from "@wdio/cucumber-framework";
import ElementAttributesPage from '../../pageobjects/elementAttributesExamples.page';
const { expect } = require('chai')

Given(`second paragraph has nextid="1" attribute`, async () => {
    if(await (await ElementAttributesPage.jsParagraphElem()).getAttribute('nextid') != '1'){
        throw new Error(`Attribute 'nextid' of second paragraph !='1'.`)
    }
})

When(/user click button "Add another Attribute" ([1-9][0-9]*) times$/, async (n: string) => {
    let nLoops = parseInt(n)
    while(nLoops > 0){
        await ElementAttributesPage.addAnotherAttr();
        nLoops--;
    }
})

Then(/value of nextid attribute increments ([1-9][0-9]*) times$/, async (n: string) => {
    expect(await (await ElementAttributesPage.jsParagraphElem()).getAttribute('nextid')).equals(`${parseInt(n)+1}`)
})

Then(/([1-9][0-9]*) new attributes is added to second paragraph$/, async (n: string) => {
    let nLoops = parseInt(n)
    for(let i=1; i <= nLoops; i++){
        expect(await (await ElementAttributesPage.jsParagraphElem()).getAttribute(`custom-${i}`)).equals(`value-${i}`)
    }
})

Then(`there are 3 coloured paragraphs`, async () => {
    expect(await ElementAttributesPage.centeredParagraphs()).to.be.an('array').and.to.have.lengthOf(3);
})

Then(`first paragraph has dom attributes`, async () => {
    expect(await (await ElementAttributesPage.staticParagraphElem()).getAttribute('class')).equals('class-attribute')
    expect(await (await ElementAttributesPage.staticParagraphElem()).getAttribute('title')).equals('a paragraph to test attributes on')
})

Then(`first paragraph has custom attributes`, async () => {
    expect(await (await ElementAttributesPage.staticParagraphElem()).getAttribute('custom-attrib')).equals('attrib in source at load')
})

Then(`first paragraph has js added attributes`, async () => {
    expect(await (await ElementAttributesPage.staticParagraphElem()).getAttribute('original-title')).equals('This used to be the title')
})

Then(`first paragraph equals "This paragraph has attributes"`, async () => {
    expect(await (await ElementAttributesPage.staticParagraphElem()).getText()).equals('This paragraph has attributes')
})

Then(`third paragraph has dynamically changing attributes`, async () => {
    let attr = ['name', 'data-count', 'data-dynamic']
    for(let attrName of attr){
        let attrVal = await (await ElementAttributesPage.jsDynamicParagraphElem()).getAttribute(attrName);
        await browser.pause(1000); // 1 sec wait, so values of attributes can change
        expect(await (await ElementAttributesPage.jsDynamicParagraphElem()).getAttribute(attrName)).not.equals(attrVal);
    }
})
