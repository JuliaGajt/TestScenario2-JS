import { Then } from "@wdio/cucumber-framework";

Then(`mobile page loads`, async () => {
    await browser.pause(50000);
})