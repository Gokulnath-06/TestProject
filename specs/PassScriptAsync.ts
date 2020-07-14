import { browser, element, by, Key, WebDriver, ElementFinder, WebElement } from 'protractor'
import * as environment from '../data/environment.json'
import { } from 'jasmine'
import { protractor } from 'protractor/built/ptor';

//To format the code it is Shift + Alt + F

describe('sanity', () => {
    it('expected to open google and pass', () => {
        browser.ignoreSynchronization = true;
        //browser.manage().timeouts().pageLoadTimeout(180000);
        let url = environment[0].url
        let title = environment[0].title
        console.log('at the end the title coming from json ' + title)

        browser.get(url, 100000).then(() => console.log('browserOPened')).then(
            () => {
                browser.getTitle().then((title: string) => console.log(title));
            }
        );
        EnterText();
    });
});

async function EnterText() {
    await element(by.name('q')).sendKeys('ConsolidatedChaos');
    await element(by.name('q')).sendKeys(Key.ENTER);
    await element.all(by.tagName('div')).then(function (arr) { console.log(arr.length) });

    await browser.driver.actions().mouseMove(element.all(by.tagName('span')).filter(function (elem, index) {
        return elem.isDisplayed().then(function (text) {
            return text == true;
        });
    }).first()).perform();

    await browser.driver.actions().mouseMove(element.all(by.tagName('span')).filter(function (elem, index) {
        return elem.isDisplayed().then(function (text) {
            return text == true;
        });
    }).first()).click(protractor.Button.RIGHT).perform();

    console.log('waits for above all to complete'); 
}