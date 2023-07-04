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
        cy.visit("http://s1devpimweb1:8090/webcm")
        cy.get("[id='username']").type("sbavisa")
        cy.get("[id='password']").type("sbavisa")
        cy.get("[id='login']").click()
        cy.get("[class='wijmo-wijsplitter-v-expander ui-state-default ui-corner-tr ui-corner-br wijmo-wijsplitter-v-panel1-collapsed']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(11) > a:nth-child(2)").click()
        cy.get("#Hierarchy").click()
        cy.wait(2000)
        getIframeBody("div[id='tabHierarchy'] iframe").contains("Action").click()
        getIframeBody("div[id='tabHierarchy'] iframe").contains("New").click()
       // getI2frameBody().contains("#codeSetName").type("Abc123")
        //getIframeBody("[id='codeset-editor'] iframe").frameLoaded("").contains("[name='codeSetName']").type("Abc123")

        cy.get("div[id='tabHierarchy'] iframe").then($firstIframe => {
            const $secondIframeReference = $firstIframe.contents().find("div[id='codeset-editor'] iframe");
          
            cy.wrap($secondIframeReference).as('secondIframeReference'); // Saving this as a reference so we can access it again using get command
          
            // Now we are accessing the second iframe
            cy.get('@secondIframeReference').then($secondIframe => {
              const $elementYouWant = $secondIframe.contents().find("#codeSetName");
          
              cy.wrap('$elementYouWant').type("It's writing some stuff"); // In case it is an input field, for example
            });
          });
    })
})