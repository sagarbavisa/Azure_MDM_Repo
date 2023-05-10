import {Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import GetDate from "../../GetDate";
Given("User is on step Login page",()=>
{
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })
    cy.visit("https://navistarfs.riversand.com/")
});
When('user Enter Username',function()
{
    cy.get("[type='email']").type(Cypress.env('username'))
});
When('user Enter Password',function()
{
    cy.get("[type='password']").type(Cypress.env('password'),{ log: false })
});
When('user clicks on Login button',function()
{
    cy.contains('Log In').click() 
     cy.wait(5000)
     cy.url().should('include',Cypress.env('assert_var'))
});
When('after succesfull login user click on Quick Actions button',function()
{
    cy.wait(2000)
    cy.contains("Quick Actions").click()
});
When('user click on "Vendor Item" and User needs to fill mandatory attributes to create "Vendor Item"',function()
{
    cy.get("#actionItem").contains("Vendor Item").click()
     cy.wait(17000)
});
When('user  clicks on "Brand AAIAID" and selects value from the given dropdown "Brand AAIAID"',function()
{
    cy.get("[title='Brand AAIAID']").next().click({force:true})
    cy.wait(2000)
    cy.get("[class='p-relative without-select-all-checkbox'] [id='input']").type("A004 ",{force:true})
    cy.wait(2000)
    cy.get("[class='not-only-option']").click({force:true})
});
When('user enters some text in "Part Number"',function()
{
    cy.get("[title='Part Number']").next().next()
    .find("input")
    .type("automation Part number6",{force:true})
});
When('user  clicks on "Parts Classification" and expand and selects the value from the given dropdown "Parts Classification"',function()
{
    cy.get("[title='Parts Classification']").click({force:true})
     cy.get("[id='classificationSearchBar']").find("[id='input']").type("67520{enter}",{force:true})
     cy.contains("67520").dblclick({force:true})
     cy.wait(4000)
});
When('user click on Create button',function()
{
    cy.get("[id='simpleButton']").contains("Select").click({force:true})
});
When('user click on Next Button',function()
{
   cy.get("#app").find("#contentViewManager")
   .find("#wizardManage")
   .find("#next").find("#simpleButton").eq(1).click({force:true});

   cy.get("#app").shadow().find("#contentViewManager")
.find("#wizardManage").find("#next")
.find("#buttonTextBox").eq(1).click({force:true})
cy.get("[class='action-button-focus dropdownText btn btn-outline-primary m-l-5']").click({force:true})

});
When('user click on "Show me the entity" button',function()
{
   cy.get("[title='Show me the entity']").click({force:true})
   cy.wait(2000)
});
When('user click on "Hazardous and Regulatory Compliance" link',function()
{
   cy.contains("Hazardous and Regulatory Compliance").click({force:true})
    cy.wait(7000)
});
When('user selects value from the given dropdown Harmonized Tariff Code',function()
{
    cy.get("[title='Harmonized Tariff Code (Schedule B)']").next().click({force:true})
    cy.get("[class='p-relative without-select-all-checkbox']").find("[id='input']").type("0714 ",{force:true})
    cy.wait(3000)

    cy.get("[class='not-only-option']").click({force:true})
    cy.wait(3000)
});
When('user click on Save Button1',function()
{
    cy.get("[class='action-button-focus dropdownText btn btn-success']").click({force:true})
    cy.wait(2000)
});
When('user click on Summary tab',function()
{
    cy.get("[id='tab-summary']").click({force:true})
});
When('user click on "Required Attributes Validation" link',function()
{
    cy.get("[title='Required Attributes Validation']").click({force:true})
cy.wait(9000)
});
When('user  clicks on "Country of Origin Primary " and selects value from the given dropdown "Country of Origin Primary "',function()
{
    cy.get("[title='Country of Origin (Primary)']").next().click()
    cy.get("[class='p-relative without-select-all-checkbox']").find("[id='input']").type("AD",{force:true})

});
When('user click on Add Button of "Dimensions - Each" attributes',function()
{
    
    cy.get("[class='title sub-title']").click({force:true})
    cy.get("[class='btn btn-primary m-r-10']").eq(2).click({force:true})
    cy.wait(1000)
});
When('user enters some decimal value in "Merchandising Height"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text']").eq(0).click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})

});
When('user enters some decimal value in "Merchandising Length"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text']").eq(1).click({force:true}).find("bedrock-attribute").find("input").type('2.1234',{force:true})

});
When('user enters some decimal value in "Merchandising Width"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text']").eq(2).click({force:true}).find("bedrock-attribute").find("input").type('3.1234',{force:true})

});
When('user enters some decimal value in "Shipping Height"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='4']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})

});
When('user enters some decimal value in "Shipping Length"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='6']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})

});
When('user enters some decimal value in "Shipping Width"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='8']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
    cy.wait(2000)

});
When('user  clicks on "UOM" and selects value from the given dropdown "UOM"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='9']").click({force:true}).find("bedrock-attribute").contains("CM").click({force:true})
    cy.wait(2000)
});
When('user  clicks on "Package UOM - Each" and selects value from the given dropdown "Package UOM - Each"',function()
{
    cy.get("[title='Package UOM - Each']").next().click({force:true})
cy.wait(2000)
cy.contains('BX').eq(0).click({force:true})

});
When('user enters some decimal value in "Quantity of Eaches in Package - Each"',function()
{
    cy.get("[id='input-36']").find("input").type("10")

});
When('user click on Add Button of "Weights - Each" attributes',function()
{
    cy.get("[class='btn btn-primary m-r-10']").eq(1).click({force:true})
    
});
When('user enters some decimal value in "Dimensional Weight"',function()
{

    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='3']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
});
When('user  clicks on "UOM" and selects value from the given dropdown "UOM1"',function()
{
    cy.wait(2000)
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='4']").click({force:true}).find("bedrock-attribute").contains("GT").click({force:true})
});
When('user enters some decimal value in "Weight"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='5']").click({force:true}).find("bedrock-attribute").find("input").type('3.1234',{force:true})
});
When('user  clicks on "Item Container Type" and selects value from the given dropdown "Item Container Type"',function()
{

cy.get("[title='Item Container Type']").next().click({force:true})
cy.wait(2000)
cy.contains("15").click({force:true})

});
When('user  clicks on "Item Quantity Size" and selects value from the given dropdown "Item Quantity Size" and enter the numeric value',function()
{
    cy.get("[aria-labelledby='paper-input-label-34']").type("20")

});
When('user  clicks on "Item Quantity Size UOM" and selects value from the given dropdown "Item Quantity Size UOM"',function()
{
    cy.get("[title='Item Quantity Size UOM']").next().click({force:true})
    cy.wait(1000)
    cy.contains("AS").click({force:true})
    cy.get("[aria-labelledby='paper-input-label-35']").type("30")
});
When('user  clicks on "Quantity per Application" and selects value from the given dropdown "Quantity per Application" enter the numeric value',function()
{
    cy.get("[title='Quantity per Application Qualifier']").next().click({force:true})
cy.wait(1000)
cy.contains("MAX").click({force:true})
});
When('user  clicks on "Quantity per Application Qualifier" and selects value from the given dropdown "Quantity per Application Qualifier"',function()
{
    cy.contains("MAX").click({force:true})
});
When('user  clicks on "Quantity per Application UOM" and selects value from the given dropdown "Quantity per Application UOM"',function()
{
    cy.get("[title='Quantity per Application UOM']").click({force:true})
cy.wait(1000)
cy.contains("BD").click({force:true})
});
When('user enters some decimal value in "Maximum Cases per Pallet Layer"',function()
{
    cy.get("[aria-labelledby='paper-input-label-37']").type("100")

});
When('user enters some decimal value in "Pallet Layer Maximum"',function()
{
    cy.get("[aria-labelledby='paper-input-label-38']").type("100")

});
When('user enters some decimal value in "Navistar Part Number"',function()
{
    cy.get("[aria-labelledby='paper-input-label-39']").type("20",{force:true})

});
When('user enters some text field in "Part Description"',function()
{
    cy.get("[aria-labelledby='paper-input-label-40']").type("automation part description",{force:true})

});
When('user click on Add Button of "Pricing" attributes',function()
{
    cy.get("[class='btn btn-primary m-r-10']").eq(0).click({force:true})

});
When('user  clicks on "Currency Code" and selects value from the given dropdown "Currency Code"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='3']").click({force:true}).find("bedrock-attribute").contains("CAD").click({force:true})

});
When('user  clicks on "Expiration Date" and selects date from the given dropdown "Expiration Date"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='4']").click({force:true}).find("bedrock-attribute").contains("10").eq(0).click({force:true})

});
When('user  clicks on "Price" and selects value from the given dropdown "price" enter the decimal value',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='6']").click({force:true}).find("rock-uom").find("input").type('123',{force:true})

});
When('user  clicks on "Price Break Quantity" and selects value from the given dropdown "Price Break Quantity" enter the integer value',function()
{
   
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='5']").click({force:true}).find("rock-uom").find("input").type('10.03',{force:true})
    cy.wait(2000)

});
When('user  selects value from the given dropdown "Price Break Quantity UOM"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='7']").click({force:true}).find("bedrock-attribute").contains("15").click({force:true})

});
When('user  clicks on "Price Sheet Level Effective Date" and selects date from the given dropdown "Price Sheet Level Effective Date"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='8']").click({force:true}).find("bedrock-attribute").contains("10").eq(0).click({force:true})

});
When('user enters some decimal value in "Price Sheet Number"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='9']").click({force:true}).find("bedrock-attribute").find("input").type("234",{force:true})

});
When('user  clicks on "Price Type" and selects date from the given dropdown "Price Type"',function()
{
    cy.wait(2000)
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='10']").click({force:true}).find("bedrock-attribute").contains("AC1").click({force:true})

});
When('user enters some text field in "Price Type Description"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='11']").click({force:true}).find("bedrock-attribute").find("input").type("Automation_price_type",{force:true})

});
When('user  clicks on "Price UOM" and selects date from the given dropdown "Price UOM"',function()
{
    cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='12']").click({force:true}).find("bedrock-attribute").contains("HF").click({force:true})

});
When('user  clicks on "Product Description – Long" and enter some text value in "Enter more values here to add"',function()
{
    cy.get("[title='Product Description – Long']").next().click({force:true})

    cy.get("[aria-labelledby='paper-input-label-40']").type("automation_test_values",{force:true})
  // cy.get("[class='input-element'] input[autocorrect='off']")
    cy.get("[icon='pebble-icon:action-add-fill']").click({force:true})
    cy.wait(4000)
});
When('user click on Save Button',function()
{   
    cy.get("[id='simpleButton']").contains("Save").click({force:true})
cy.wait(8000)
});
When('user click on Summary tab1',function()
{
    cy.get("[title='Summary']").click({force:true})
cy.wait(6000)
});
When('user click on Sumbit button in workflow section',function()
{
    cy.get("[id='buttonTextBox']").contains("Submit").click({force:true})
    cy.wait(5000)
});
Then('successful message should be displayed',function()
{
    cy.contains("'Submit' successful").should('be.visible',"'Submit' successful")
});

