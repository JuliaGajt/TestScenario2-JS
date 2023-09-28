const { Given, Then, When } = require('@wdio/cucumber-framework');
import { browser } from "@wdio/globals";
const { expect } = require('chai')

import HomePage from '../../pageobjects/home.page';

When(/user click link on "(.*)" link$/, async (page: string) => {
  await HomePage.clickOnPageLink(page)
})

Then(/title of page is equal (.*)$/, async (title: string) => {
  expect(await browser.getTitle()).equals(title);
})
