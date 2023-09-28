import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
     * define selectors using getter methods
     */
  get basicWebPageExampleBtn() { return $('#basicpagetest'); }

  get elementAtributesExampleBtn() { return $('#elementattributestest'); }

  get findByPlaygroudBtn() { return $('#findbytest'); }

  get tableTestPageBtn() { return $('#tablestest'); }

  get dynamicTableTestPageBtn() { return $('#dynamictablestest'); }

  get alertsBtn() { return $('#alerttest'); }

  get fakeAlertsBtn() { return $('#fakealerttest'); }

  get frameTestPageBtn() { return $('#framestest'); }

  get iFrameTestPageBtn() { return $('#iframestest'); }

  get htmlFormExampleBtn() { return $('#htmlformtest'); }

  get html5ElementFormTestPageBtn() { return $('#html5formtest'); }

  get windowLinkTestPageBtn() { return $('#windowstest'); }

  get hoverTestPage() { return $('#csspseudohover'); }

  get userAgentRedirectPage() { return $('#useragentredirect'); }

  get expandingDivViaCSS() { return $('#expanding'); }

  get fileUploadTest() { return $('#fileuploadtest'); }

  /**
     * overwrite specific options to adapt it to page object
     */
  open() {
    return super.open('');
  }

  async gotToBasicWebPageExampleBtn() { (await this.basicWebPageExampleBtn).click(); }

  async gotToElementAtributesExampleBtn() { (await this.elementAtributesExampleBtn).click(); }

  async gotToFindByPlaygroudBtn() { (await this.findByPlaygroudBtn).click(); }

  async gotToTableTestPageBtn() { (await this.tableTestPageBtn).click(); }

  async gotToDynamicTableTestPageBtn() { (await this.dynamicTableTestPageBtn).click(); }

  async gotToAlertsBtn() { (await this.alertsBtn).click(); }

  async gotToFakeAlertsBtn() { (await this.fakeAlertsBtn).click(); }

  async gotToFrameTestPageBtn() { (await this.frameTestPageBtn).click(); }

  async gotToiFrameTestPageBtn() { (await this.iFrameTestPageBtn).click(); }

  async gotToHtmlFormExampleBtn() { (await this.htmlFormExampleBtn).click(); }

  async gotToHtml5ElementFormTestPageBtn() { (await this.html5ElementFormTestPageBtn).click(); }

  async gotToWindowLinkTestPageBtn() { (await this.windowLinkTestPageBtn).click(); }

  async gotToHoverTestPage() { (await this.hoverTestPage).click(); }

  async gotToUserAgentRedirectPage() { (await this.userAgentRedirectPage).click(); }
  
  async gotToExpandingDivViaCSS() { (await this.expandingDivViaCSS).click(); }

  async gotToFileUploadTest() { (await this.fileUploadTest).click(); }

  async clickOnPageLink(pageName: string) {
    switch(pageName){
      case 'Basic Web Page Example':
          await this.gotToBasicWebPageExampleBtn()
          break;
        case 'Element Attributes Examples':
          await this.gotToElementAtributesExampleBtn()
          break;
        case 'Locators - Find By Playground Test Page':
          await this.gotToFindByPlaygroudBtn()
          break;
        case 'Table Test Page':
          await this.gotToTableTestPageBtn()
          break;
        case 'Dynamic Table Test Page':
          await this.gotToDynamicTableTestPageBtn()
          break;
        case 'Alerts (JavaScript)':
          await this.gotToAlertsBtn()
          break;
        case 'Fake Alerts':
          await this.gotToFakeAlertsBtn()
          break;
        case 'Frames Test Page':
          await this.gotToFrameTestPageBtn()
          break;
        case 'iFrames Test Page':
          await this.gotToiFrameTestPageBtn()
          break;
        case 'HTML Form Example':
          await this.gotToHtmlFormExampleBtn()
          break;
        case 'HTML5 Element Form Test Page':
          await this.gotToHtml5ElementFormTestPageBtn()
          break;
        case 'Windows Link Test Page':
          await this.gotToWindowLinkTestPageBtn()
          break;
        case 'Hover Test Page':
          await this.gotToHoverTestPage()
          break;
        case 'User Agent Redirect Page':
          // doesn't work 
          await this.gotToUserAgentRedirectPage()
          break;
        case 'Expanding Div via CSS':
          await this.gotToExpandingDivViaCSS()
          break;
        case 'File Upload Example Page':
          await this.gotToFileUploadTest()
          break;
        default:
          console.log(`Page ${pageName} is invalid.`);
    }
  }

}

export default new HomePage();
