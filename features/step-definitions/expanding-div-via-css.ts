import { When } from "@wdio/cucumber-framework";
import expandingDivviaCSSPage from "../../pageobjects/expandingDivviaCSS.page";

When(`I hover Div`, async () => {
    await expandingDivviaCSSPage.hoverDiv();
})

When(`click the link`, async () => {
    await expandingDivviaCSSPage.clickExpandedLink();
})
