import { Then, When } from "@wdio/cucumber-framework";
import dynamicTableTestPage from "../../pageobjects/dynamicTableTest.page";
const dynamicTable = require('../../data/dynamicTable')
const { expect } = require('chai')

When(/filling inputs with (.*)$/, async dataId => {

    let tableData = dynamicTable.tables.find((table: { id: string; }) => table.id === dataId)
    let toWrite = '[', i = 0;
    
    for(let obj of tableData.tabledata){
        toWrite += (JSON.stringify(obj))
        if(i !== (tableData.tabledata.length-1)){
            toWrite += ','
        }      
        i += 1;
    }
    toWrite += ']'
    
    await dynamicTableTestPage.openTableDetails()
    await dynamicTableTestPage.writeToCaptionInput(tableData.caption)
    await dynamicTableTestPage.writeToTableIdInput(tableData.id)
    await dynamicTableTestPage.writeToTableInput(toWrite)

})

When(`refreshing table`, async () => {
    await dynamicTableTestPage.refreshTable();
})

Then(/table should be updated with (.*)$/, async dataId =>{

    let tableData = dynamicTable.tables.find((table: { id: string; }) => table.id === dataId)
    let table = tableData.id !== ''? dynamicTableTestPage.dynamicTable(tableData.id): dynamicTableTestPage.dynamicTable('dynamictable')
    expect(table)
    expect(await dynamicTableTestPage.mapTableToObj()).deep.equals(tableData.tabledata)
    expect(await (await dynamicTableTestPage.captionTable).getText()).equals(tableData.caption)
})
