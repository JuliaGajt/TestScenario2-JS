import Page from "./page";

class HTML5FormPage extends Page { 

    get colorInput() {return $(`#colour-picker`)}
    get dateInput() {return $(`#date-picker`)}
    get dateTimeInput() {return $(`#date-time-picker`)}
    get emailInput() {return $(`#email-field`)}
    get monthInput() {return $(`#month-field`)}
    get numberInput() {return $(`#number-field`)}

    get colorVal() {return $(`#_valuecolour`)}
    get dateVal() {return $(`#_valuedate`)}
    get dateTimeVal() {return $(`#_valuedatetime`)}
    get emailVal() {return $(`#_valueemail`)}
    get monthVal() {return $(`#_valuemonth`)}
    get numberVal() {return $(`#_valuenumber`)}
    get submitVal() {return $(`#_valuesubmitbutton`)}

    get submitBtn() { return $(`input[type="submit"]`)}
    get resetBtn() { return $(`input[type="reset"]`)}

    async fillTheForm(color: string, date: string, localDateTime: string, email: string, month: string, number: number) {
        await (await this.colorInput).waitForDisplayed();
        await (await this.colorInput).setValue(color);
        await (await this.dateInput).setValue(date);

        await (await this.dateTimeInput).clearValue();
        await (await this.dateTimeInput).setValue(localDateTime);

        await (await this.emailInput).setValue(email);
        await (await this.monthInput).click()
        await browser.keys(month);
        await (await this.numberInput).setValue(number);
    }

    async submitForm() {
        await (await this.submitBtn).moveTo()
        await (await this.submitBtn).click()
    }

}

export default new HTML5FormPage();