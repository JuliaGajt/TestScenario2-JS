import Page from "./page";

class HTMLTablePage extends Page {

    get tableContent() { return $$(`tr > td`)}

    async getContentOfTable() {

        let tableContent = [];
        let content = await this.tableContent;

        for(let i=0; i<content.length; i+=2){
            
            let amount_ = await content[i+1].getText();
            let rowData = {
                "name": await content[i].getText(),
                "amount": amount_.includes('.')? parseFloat(amount_) : parseInt(amount_)
            };
            tableContent.push(rowData);
        }
        return tableContent;
    }
}


export default new HTMLTablePage();