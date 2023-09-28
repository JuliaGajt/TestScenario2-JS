import { browser } from "@wdio/globals";
import Page from "./page";

class HTMLFormExamplePage extends Page {

    get usernameInput() { return $(`input[name='username']`);}
    get passwordInput() { return $(`input[name='password']`);}
    get commentInput() { return $(`textarea[name='comments']`);}
    get fileInput() { return $(`input[name='filename']`);}
    get checkboxes() { return $$(`input[value*='cb']`);}
    get radioBtns() { return $$(`input[value*='rd']`);}
    get multiSelectOptions() { return $$(`option[value*='ms']`);}
    get selectDropdown() { return $(`select[name="dropdown"]`);}
    get selectDropdownOptions() { return $$(`option[value*='dd']`);}
    get submitBtn() {return $(`input[name='submitbutton'][value="submit"]`)}
    get cancelBtn() {return $(`input[name='submitbutton'][value="cancel"]`)}

    get usernameValue() { return $('#_valueusername')}
    get passValue() { return $('#_valuepassword')}
    get commValue() { return $('#_valuecomments')}
    get fileValue() { return $('#_valuefilename')}
    get hiddenFileValue() { return $('#_valuehiddenField')}
    get checkValues() { return $$('li[id*="_valuecheckboxes"]')}
    get radioValue() { return $('#_valueradioval')}
    get multiSelValues() { return $$('li[id*="_valuemultipleselect"]')}
    get dropdownValue() { return $('#_valuedropdown')}
    get submitValue() { return $('#_valuesubmitbutton')}

    /**
     * fill the form with below 
     * @param username string
     * @param password string
     * @param comment string
     * @param filepath string
     * @param checkboxes Array<number>
     * @param radioItems number
     * @param multiSelectOptions Array<number>
     * @param dropdown number
     */
    async fillForm(username: string, password: string, comment: string, filepath: string, checkboxes: Array<number>, radioItems: number, multiSelectOptions: Array<number>, dropdown: number){
        await (await this.usernameInput).waitForDisplayed();
        await (await this.usernameInput).setValue(username)
        await (await this.passwordInput).setValue(password)
        await (await this.commentInput).setValue(comment)
        await (await this.fileInput).setValue(filepath)
        
        for(let num of [1, 2, 3]){
            if((checkboxes.includes(num) && num !== 3) || (!checkboxes.includes(num) && num === 3)){
                    await (await this.checkboxes)[num-1].click()
            }
        }
        
        await (await this.radioBtns)[radioItems-1].click()
        
        let origin = (await this.multiSelectOptions)[multiSelectOptions[0]-1];
        await browser.action('pointer')
            .move({ duration: 0, origin, x: 0, y: 0 })
            .down({button: 0})
            .pause(10)
            .move({ duration: 0, origin:(await this.multiSelectOptions)[multiSelectOptions[1]-1] })
            .up({ button: 0 })
            .perform()

        await (await this.selectDropdown).click()
        await (await this.selectDropdownOptions)[dropdown-1].click()

    }

    /**
     * submit filled form
     */
    async submitForm(){
        await (await this.submitBtn).scrollIntoView()
        await (await this.submitBtn).click()
    }

    /**
     * cancel filled form
     */
    async cancelForm(){
        await (await this.cancelBtn).moveTo()
        await (await this.cancelBtn).click()
    }

}

export default new HTMLFormExamplePage();