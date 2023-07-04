import {Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import GetDate from "../../GetDate";
Given('User is on STEP Login page',()=>
{
    cy.visit("https://chick-fil-a-preprod.scloud.stibo.com/")

    cy.fixture('logincfa').then(function(logindata)
    {
        globalThis.logindata  = logindata
    })
    globalThis.getdateobj = new GetDate()
});
When('user Enters Username',function()
{
    cy.get('#username').type(logindata.username);
});
When('user Enters Password',function()
{
    cy.get('#password').type(logindata.password);
});
When('user click on Login button',function()
{
    cy.get('#kc-login').click();
});
When('user click on location user portal WebUi',function()
{
    cy.get("[title='Location User Portal']").click()        
});
When('after succesfull login user click on link Create New Region on widget',function()
{
    cy.contains('Create New Region').click();
});
When('user enters Region Name and user clicks on next button',function()
{
  
    const random_region = Math.random().toString(36).substring(2,12)
    globalThis.storeregion = random_region
    cy.get("[class='gwt-TextBox stibo-StateFlow-Unbound-Variable stibo-Value stibo-Value-Text mandatory']").type(String(random_region))
    cy.contains('Next').click()
});
When('user navigates to "region details page"',function()
{
    cy.contains('Confirmed').then(function(ext_text)
            {
                const conf_text = ext_text.text()
                expect(conf_text).to.includes('Confirmed')
            })
            cy.contains("Your Region has been submitted").should('be.visible')
  
    
});
When('user enters Start Date in Region Details page',function()
{
    cy.get("[class='gwt-TextBox stibo-Value-ISO-Date stibo-Value mandatory-for-approval mandatory validator-isodate']").click()

    cy.get("[class='popupContent']").eq(1).contains("1").eq(0).click({force:true})
   
    cy.get("input[class='gwt-TextBox stibo-Value-ISO-Date stibo-Value validator-isodate']").click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    // cy.wait(2000)
    cy.get("[class='popupContent']").eq(1).contains("4").eq(0).click({force:true})
  //  cy.get("body > div:nth-child(12) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+String(globalThis.randomnumber3)+") > td:nth-child("+String(globalThis.randomnumber3)+") > div:nth-child(1)").click()
});
When('user clicks on Create button',function()
{
        cy.get("[class='material-icons portal-alert-popup-close-box__button']").click()
        cy.get('.SubmitButton > div > .text').click()
        cy.get("div.portal-alert-popup-content-details__details div.gwt-HTML").then(function(ext_text)
        {
            const conf_text1 = ext_text.text()
            expect(conf_text1).to.includes('Save is complete')
        })
        cy.get("[class='material-icons portal-alert-popup-close-box__button']").click()
});
Then('confirmation pop-up is displayed',function()
{
        cy.get("div.portal-alert-popup-content-details__details div.gwt-HTML").then(function(extTest)
        {
            const extval = extTest.text()
            expect(extval).to.includes("Item was successfully submitted.")
        })
        cy.wait(3000)
});

Given('User is on location user portal page',function()
{
    cy.visit("https://chick-fil-a-preprod.scloud.stibo.com/")
    cy.get('#username').type("FIELDOPSTEST");
    cy.get('#password').type("FIELDOPSTEST");
    cy.get('#kc-login').click();
    cy.get("[title='Location User Portal']").click()
    cy.get("div[id='Create_Area_Support_Team'] div div[class='status-selector__wrapper dashboard-widget-inner'] div[class='status-selector__content with-assigneePanel with-initiatePanel with-2-elements'] div[class='status-selector__assignees'] div[title='Show all items assigned to me or any group I am a member of'] div i[class='material-icons']").click()
});
When('user click on link "Create New Area Support Team" on widget',function()
{
    cy.contains('Create New Area Support Team').click()
});
When('user click on node in text field of "Parent Region Node" to select region names',function()
{
    cy.contains('node_picker').click()
});
When('user selects parent region node from search option',function()
{
    cy.get(':nth-child(3) > .gwt-TabBarItem > .gwt-Label').click()
    cy.get("input[class='gwt-SuggestBox']").type(globalThis.storeregion)
    cy.get(".stibo-GraphicsButton.material.SearchButton").click()
    cy.get("button[class='stibo-GraphicsButton'] span[class='text']").click()
});
When('user enters <Area Support Team Name>',function()
{
    const random_region_admin = Math.random().toString(36).substring(2,12)
    cy.get("[class='gwt-TextBox stibo-StateFlow-Unbound-Variable stibo-Value stibo-Value-Text mandatory']").type(String(random_region_admin))
});
When('user click on "Next" button',function()
{
    cy.get(".text").click()
});
Then('user should see successful message <pop-up>',function()
{
    cy.get("[class='portal-alert-popup-content-details__details']").then(function(msg_data)
        {
            const text_const = msg_data.text()
            expect(text_const).to.includes("Your Area Support Team has been submitted")
        })
});
When('user enters <Area Support Team Code> in general attributes tab',function()
{
    const randomnumber2 = Math.floor(Math.random()*(9))
    globalThis.randomnumber2 = randomnumber2
    let random_string = Math.random().toString(36).substring(2,3)
    globalThis.random_string = random_string
    cy.get('#Area_Support_Team_Code > .widgetAndIconsWrapper > [style="margin-right: 8px;"] > :nth-child(1) > .gwt-TextBox').type(globalThis.randomnumber2+globalThis.random_string)
});
When('user enters <Area Support Team Type> in general attributes tab',function()
{
    cy.get("[class='dropdown stibo-Value validator-text mandatory-for-approval stibo-Value-Text mandatory']").select('L')
        
});
When('user enters <Start Date> in general attributes tab',function()
{
        cy.get("div[id='Start_Date'] div[class='widgetAndIconsWrapper'] div div input[placeholder='yyyy-MM-dd']").click()
        cy.get("[class='popupContent']").eq(1).contains("1").eq(0).click({force:true})

});
When('user enters <Assignment Start Date> in general attributes tab',function()
{
        cy.get("body > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").click()
     //   cy.get(":nth-child("+(globalThis.randomnumber3)+") > :nth-child("+(globalThis.randomnumber3)+") > .datePickerDay").click()
     cy.get("[class='popupContent']").contains("5").eq(0).click({force:true})
     cy.get('.portal-alert-popup-close-box > .material-icons').click()

        cy.get("div[id='End_Date'] div[class='widgetAndIconsWrapper'] div div input[placeholder='yyyy-MM-dd']").click()
  
        cy.get("[class='html-face']").eq(2).click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    cy.get("[class='html-face']").eq(2).click({force:true})
    cy.wait(2000)
    cy.get("[class='popupContent']").eq(0).contains("4").eq(0).click({force:true})
});
When('user selects Active Area Support Team Roles tab',function()
{
    cy.get("div[id='stibo_tab_Active_Area_Support_Team_Roles'] div[class='tabs-panel-tab-inner'] div span[class='gwt-InlineLabel']").click()    
});
When('user click on "Add roles" select <Reference Type> and <Reference Target>',function()
{
    for(let i=0;i<5;i++)
    {
   
   cy.get("[title='Create a new reference']").eq(0).click({force:true})
   if(i==2 || i==3 || i==4)
    {
    cy.get(".stibo-Dropdown.FormFieldWidget").select(i)
    cy.get('.icon > .material-icons').click()
    cy.get("#tree_expanded_node_StaffRoot").click()
    const webelements = cy.get("[class='treeRow ']")
    const admin_index = Math.floor(Math.random()*30)
    webelements.eq(admin_index).click()
    cy.get("button[class='stibo-GraphicsButton'] div span.text").click()
    cy.get("button[class='stibo-GraphicsButton'] div span.text").click()
    cy.log(i)
    }
    }
});
When('user selects "Assignment start date" for each role',function()
{
    const assign_index = Math.floor(Math.random()*(globalThis.randomnumber3+5))
    for(let k = 0;k<3;k++)
        {
            cy.wait(4000)
        cy.get("td:nth-child(5)").contains("yyyy-MM-dd").eq(0).dblclick()
         cy.get('.datePickerNextButton > .html-face').click({force:true})
        cy.get("[class='datePickerDay ']").contains("2").eq(0).click({force:true})
        cy.get("[class='stibo-GraphicsButton']").contains("Save").click()
        }
});
When('user clicks on "Create" button',function()
{
    cy.get('.SubmitButton > div > .text').click()
 
});
Then('user should see successful message <pop-up> on dashboard',function()
{ 
    cy.wait(4000)
   cy.contains("Submit").eq(0).should('be.visible')

})







