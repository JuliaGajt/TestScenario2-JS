import Page from './page'

class DynamicTableTestPage extends Page {

    dynamicTable(id: string) { return $(`#${id}`)}

    get detailsBtn() { return $(`details`)}

    get tableInput() { return $(`#jsondata`)}

    get caaptionInput() { return $(`#caption`)}

    get tableIdInput() { return $(`#tableid`)}

    get refreshTableBtn() { return $(`#refreshtable`)}

    get contentPfTable() { return $$(`tr > td`)}

    get captionTable() { return $(`caption`)}

    open() {
        return super.open('')
    }

    async mapTableToObj() {
        let content = await this.contentPfTable
        let arrOfObj = []

        for(let i=0; i<content.length; i+=2){
            let pairName = {name: await content[i].getText()};
            let pairAge = {age: parseInt(await content[i+1].getText())};
            let row = {...pairName, ...pairAge}
            arrOfObj.push(row)
        }

        return arrOfObj;

    }

    async getDynamicTable(id: string) {
        return await this.dynamicTable(id);
    }

    async openTableDetails() {
        await (await this.detailsBtn).click()
    }

    async writeToTableInput(data: string) {
        await (await this.tableInput).setValue(data)
    }

    async writeToCaptionInput(caption: string) {
        await (await this.caaptionInput).setValue(caption)
    } 

    async writeToTableIdInput(id: string) {
        await (await this.tableIdInput).setValue(id)
    }

    async refreshTable() {
        await (await this.refreshTableBtn).moveTo()
        await (await this.refreshTableBtn).doubleClick()
    }

}

export default new DynamicTableTestPage()

