import { Given } from "@wdio/cucumber-framework";
import { openPage } from "../../pageobjects/page";

Given(/the browser is at "(.*)" page$/, async (pageName: string) => {
  await openPage(pageName);
});