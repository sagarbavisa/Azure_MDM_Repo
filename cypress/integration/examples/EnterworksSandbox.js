/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';

describe('testsuite2', ()=>
{
    const getIframeDocument = (frame1) => {
        return cy
        .get(frame1)
        .its('0.contentDocument').should('exist')
      }
      const getIframeBody = (frame1) => {
        return getIframeDocument(frame1)
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }



    it('testscript1', ()=>
    {
        //visit url
        cy.visit("http://67.22.105.214:8090/webcm")
        //enter username and password
        cy.get("[id='username']").type("Ajadhav")
        cy.get("[id='password']").type("Ajadhav")
        //click login button
        cy.get("[id='login']").click()
        //expand button click
        cy.get("[class='wijmo-wijsplitter-v-expander ui-state-default ui-corner-tr ui-corner-br wijmo-wijsplitter-v-panel1-collapsed']").click()
        //Model button click
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(11) > a:nth-child(2)").click()
        //click sequence
        cy.get("#Sequence").click()
        cy.wait(2000)
        //click Actions and then click new button
        getIframeBody("div[id='tabSequence'] iframe").contains("Action").click()
        getIframeBody("div[id='tabSequence'] iframe").contains("New").click()
       cy.wait(1000)
       //input name field
       cy.new_nest_frame("div[id='tabSequence'] iframe", "[id='tradingPartner-modalIFrameDialog'] iframe", "[name='tradingPartnerName']", "testname1", "type")
        //input prefix field
        cy.new_nest_frame("div[id='tabSequence'] iframe", "[id='tradingPartner-modalIFrameDialog'] iframe", "[name='gtinPrefix']", "Prefix1", "type")
        //input startingseqnum
        cy.new_nest_frame("div[id='tabSequence'] iframe", "[id='tradingPartner-modalIFrameDialog'] iframe", "[name='startingSeqNum']", "3", "type")
        //input current maxseqnum
        cy.new_nest_frame("div[id='tabSequence'] iframe", "[id='tradingPartner-modalIFrameDialog'] iframe", "[value='Save']", "", "click")
        
       
    })
})