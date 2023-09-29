import { Then } from "@wdio/cucumber-framework";
import HTMLTablePage from "../../pageobjects/HTMLTable.page";
const staticTable = require('../../data/staticTable')
const { expect } = require('chai')

Then(`table with data is visible`, async () => { 

    let expectedTable = staticTable;
    let currentTable = await HTMLTablePage.getContentOfTable();
    expect(currentTable).deep.equals(expectedTable);

})