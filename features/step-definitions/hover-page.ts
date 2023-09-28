import { Then, When } from "@wdio/cucumber-framework";
import hoverTestPage from "../../pageobjects/hoverTest.page";
const { expect } = require('chai')

When(`hover button "Hover Para"`, async () => {
    await hoverTestPage.moveToParaBtn();
})

When(`hover button "Hover Div"`, async () => {
    await hoverTestPage.moveToDivBtn();
})

Then(`text "You can see this child div content now that you hovered on the above 'button'." apears below`, async () => {
    expect(await (await hoverTestPage.hoverDivText).isDisplayed()).equals(true)
    expect(await (await hoverTestPage.hoverDivText).getText()).equals(`You can see this child div content now that you hovered on the above 'button'.`)
})

Then(`text "You can see this paragraph now that you hovered on the above 'button'." apears below`, async () => {
    expect(await (await hoverTestPage.hoverParaText).isDisplayed()).equals(true)
    expect(await (await hoverTestPage.hoverParaText).getText()).equals(`You can see this paragraph now that you hovered on the above 'button'.`)
})
