import Page from "./page";

class HoverPage extends Page {

    get hoverParaBtn() { return $(`#hoverpara`)}
    get hoverDivBtn() { return $(`#hoverdivpara`)}

    get hoverParaText() { return $(`#hoverparaeffect`)}
    get hoverDivText() { return $(`#hoverdivparaeffect`)}

    async moveToParaBtn() {
        await (await this.hoverParaBtn).moveTo()
    }

    async moveToDivBtn() {
        await (await this.hoverDivBtn).moveTo()
    }

}

export default new HoverPage();