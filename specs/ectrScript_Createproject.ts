import { browser, element, by } from 'protractor'
import { } from 'jasmine'

describe('Createproject', () => {
    it('Enter the Project Details', () => {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().timeouts().pageLoadTimeout(180000);
        //Clicking the Add project button
        element(by.buttonText('ADD PROJECT')).click().then(() => {
            browser.getCurrentUrl().then((url: string) => {
                console.log('Currenturl' + url);
            })
        })
    })
})

projectDetails().then(() => {
})


async function sleep(ms: number) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function projectDetails() {
    //Entering the Project name
    element(by.id('inputProjectname')).sendKeys('automation project').then(() => {
        //Entering the MDM number name
        element(by.id('inputMDMNumber')).sendKeys('MDMNumber123').then(() => {
            //Selecting the Project Type from Dropdown
            element(by.id('inputProjecttype')).click().then(() => {
                element(by.cssContainingText('span.mat-option-text', 'EPCI')).click().then(() => {
                    ///Selecting the Project status from Dropdown
                    element(by.id('inputProjectStatus')).click().then(() => {
                        //span[@class="mat-option-text"][text()="On Hold"]click().then(()=>{
                        element(by.cssContainingText('span.mat-option-text', 'On hold')).click().then(() => {
                            //Selecting the Project stage from Dropdown
                            element(by.css('input[formControlName=projectStageId]')).click().then(() => {
                                element(by.cssContainingText('span.mat-option-text', 'Tender')).click().then(() => {
                                    //Selecting the Bit date from Calender
                                    element(by.css('input[formControlName=projectBidDate]')).sendKeys('10.12.2020').then(() => {
                                        //Selecting the client name from Dropdown
                                        element(by.id('inputClientName')).click().then(() => {
                                            element(by.cssContainingText('span.mat-option-text', 'Total')).click().then(() => {
                                                // Checking default selected entity
                                                element(by.id('inputExecutingentity')).getText().then((Text: String) => {
                                                    console.log('Executing entity:' + Text);
                                                })
                                                // Checking for the scenario
                                                element(by.id('numberofScenarios')).getText().then((value: any) => {
                                                    console.log('Scenario:' + value);
                                                })
                                                //Selecting the Award date using Calender
                                                element(by.css('input[formControlName=projectAwardDate]')).sendKeys('15.12.2020').then(() => {
                                                    //Selecting the Start date using Calender
                                                    element(by.css('input[formControlName=projectStartDate]')).sendKeys('01.12.2020').then(() => {
                                                        //Selecting the End date using Calender
                                                        element(by.css('input[formControlName=projectEndDate]')).sendKeys('30.12.2020').then(() => {
                                                            //Enter Start date Notes
                                                            element(by.css('input[formControlName=projectStartDateNotes')).sendkeys('StartdateNotes').then(() => {
                                                                //Enter End date Notes
                                                                element(by.css('input[formControlName=projectEndDateNotes')).sendkeys('Enddate').then(() => {
                                                                    //Enter the Field location
                                                                    element(by.id('inputFieldLocation')).sendKeys('Asia').then(() => {
                                                                        //Enter the Field location notes
                                                                        element(by.css('input[formControlName= fieldLocationNotes')).sendKeys('100')
                                                                        //Enter the Water depth
                                                                        element(by.id('inputWaterDepth')).sendKeys('200').then(() => {
                                                                            //Enter the Water depth notes 
                                                                            element(by.css('input[formControlName= waterDepthNotes')).sendKeys('Water depth notes').then(() => {
                                                                                //Enter the Max Design pressure
                                                                                element(by.id('inputdesignPressure')).sendKeys('300').then(() => {
                                                                                    //Enter the Design pressure notes 
                                                                                    element(by.css('input[formControlName= designPressureNotes')).sendKeys('Design pressure notes ').then(() => {
                                                                                        //Enter the Max Design Temp
                                                                                        element(by.id('inputMaxDesignTemp')).sendKeys('400').then(() => {
                                                                                            //Enter the Design Temp notes 
                                                                                            element(by.css('input[formControlName=designTempNotes')).sendKeys('Design Temp notes').then(() => {
                                                                                                //Enter the Engg Phase Duration 
                                                                                                element(by.css('input[formControlName=enggPhaseDuration')).sendKeys('1').then(() => {
                                                                                                    //Enter the Engg Phase Duration notes 
                                                                                                    element(by.css('input[formControlName= enggPhaseDurationNotes')).sendKeys('Engg Phase Duration notes ').then(() => {
                                                                                                        //Enter Operations phase duration
                                                                                                        element(by.css('input[formControlName=opPhaseDuration')).sendKeys('2').then(() => {
                                                                                                            //Enter the Operations phase duration notes 
                                                                                                            element(by.css('input[formControlName= opPhaseDurationNotes')).sendKeys('Operations phase duration notes ').then(() => {
                                                                                                                // Clicking Save & Next  
                                                                                                                element(by.id('savennext')).click();
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
