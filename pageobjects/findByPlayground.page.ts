import Page from './page'

class FindByPlaygroundPage extends Page {

    get paraAlphabetLetters() { return $$(`div[id='div1'] > p`)}
    get paraNested() { return $$(`div[name='nestedDiv'] > p`)}
    get paraWithListLinks() { return $$(`ul > li > a`)}

    get allParaByIdP() { return $$(`p[id*='p']`)}
    get allParaByIdA() { return $$(`a[id*='a']`)}

    get allParaByName() { return $$(`p[name*='pName']`)}
    get allParaByClass() { return $$(`a.normal`)}

    open() {
        return super.open('');
    }

    async getAllParagraphsByClass() {
        return await this.allParaByClass;
    }

    async getAllParagraphsByName() {
        return await this.allParaByName;
    }

    async getAllParagraphsByIdA(){
        return await this.allParaByIdA;
    }

    async getAllParagraphsByIdP(){
        return await this.allParaByIdP;
    }

    async getAllParagraphsWithAlphabet(){
        return await this.paraAlphabetLetters;
    }

    async getAllParagraphsNested(){
        return await this.paraNested;
    }

    async getAllParagraphsWithListLinks(){
        return await this.paraWithListLinks;
    }
}

export default new FindByPlaygroundPage()