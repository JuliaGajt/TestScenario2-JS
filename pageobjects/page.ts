import { browser } from "@wdio/globals";


export default class Page {

  open(path: string) {
    return browser.url(`${browser.options.baseUrl}${path}`);
  }

}


async function openPage(pageName: string){

  switch (pageName) {
    case 'Home':
      await browser.url(`${browser.options.baseUrl}styled/index.html`);
      break;
    case 'Basic Web Page Example':
      await browser.url(`${browser.options.baseUrl}styled/basic-web-page-test.html`);
      break;
    case 'Element Attributes Examples':
      await browser.url(`${browser.options.baseUrl}styled/attributes-test.html`);
      break;    
    case 'Locators - Find By Playground Test Page':
      await browser.url(`${browser.options.baseUrl}styled/find-by-playground-test.html`);
      break;
    case 'Dynamic Table Test Page':
      await browser.url(`${browser.options.baseUrl}styled/tag/dynamic-table.html`);
      break;
    case 'Alerts (JavaScript)':
      await browser.url(`${browser.options.baseUrl}styled/alerts/alert-test.html`);
      break;
    case 'Fake Alerts':
      await browser.url(`${browser.options.baseUrl}styled/alerts/fake-alert-test.html`);
      break; 
    case 'iFrames Test Page':
      await browser.url(`${browser.options.baseUrl}styled/iframes-test.html`);
      break;
    case 'HTML Form Example':
      await browser.url(`${browser.options.baseUrl}styled/basic-html-form-test.html`);
      break;
    case 'Hover Test Page':
      await browser.url(`${browser.options.baseUrl}styled/csspseudo/css-hover.html`);
      break;
    case 'User Agent Redirect Page':
      browser.capabilities = {"ms:edgeOptions": {
          args: [`--window-size=800,800`]
        }
      }
      await browser.url(`${browser.options.baseUrl}styled/redirect/user-agent-redirect-test`);
      break;
    case 'Expanding Div via CSS':
      await browser.url(`${browser.options.baseUrl}styled/expandingdiv.html`);
      break;
    case 'File Upload Example Page':
      await browser.url(`${browser.options.baseUrl}styled/file-upload-test.html`);
      break;
    case 'Frames Test Page':
      await browser.url(`${browser.options.baseUrl}styled/frames/frames-test.html`);
      break;
      //HTML5 Element Form Test Page
    case 'HTML5 Element Form Test Page':
      await browser.url(`${browser.options.baseUrl}styled/html5-form-test.html`);
      break;
    default:
      console.log(`Page ${pageName} is invalid.`);
  }
}

export {
  openPage
};



