import Page from "./page";

class iFrameTestPage extends Page{

    get iframeListID() { return $(`#thedynamichtml`)}
    get iFrameHeaderID() { return $(`#theheaderhtml`)}
    get listFromFrame() { return $$(`ul  > li`)}
    get paragraphFromFrame() { return $(`.explanation`)}

}

export default new iFrameTestPage();