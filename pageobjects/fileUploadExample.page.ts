import Page from "./page";


class FileUploadPage extends Page {

    get inputFileBtn() { return $(`#fileinput`)}

    get imgTypeRadio() { return $(`#itsanimage`)}
    get generalTypeRadio() { return $(`#itsafile`)}

    get submitBtn() {return $(`input[type="submit"]`)}

    get uploadedFilename() { return $(`#uploadedfilename`)}

    async uploadGeneralFile(filepath: string) {
        await (await this.inputFileBtn).setValue(filepath)
        await (await this.generalTypeRadio).click()
        await (await this.submitBtn).click()
    }

}

export default new FileUploadPage();