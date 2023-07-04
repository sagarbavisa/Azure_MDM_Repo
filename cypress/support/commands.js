// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import jwtDecode from 'jwt-decode'
import { JwtDecodeOptions } from 'jwt-decode'
 Cypress.Commands.add('clickitemnumber',item_number => 
 { 
    cy.get("[class='DomainNodeCell menulink truncated  extra-local']").each(($e1,index,$list)=>
    {
       const second_supplierid = $e1.text()
       cy.log(second_supplierid)
       if(second_supplierid.includes(item_number))
       {
         cy.log(second_supplierid)
         cy.wrap($e1).click()
       }
    })

  })
  
  Cypress.Commands.add('assigneeclick',(item_number,user_text_value) => 
  {
    cy.get('table tbody tr td:nth-child(2) div div span.DomainNodeCell').each(($e1,index,$list) =>
       {
          if($e1.text().includes(item_number))
          {
            cy.get('table tbody tr td:nth-child(5) div span').eq(index).then(function(assignee)
            {
              const assignee_text = assignee.text()
              cy.log(assignee_text)
              cy.log(this.user_text_value)
              if(!assignee_text.includes(user_text_value))
              {
                cy.log('user name is different')
                cy.get('[row-id="0"] > .col5 > [style="outline:none;"] > .sheet-cell__inner > .DomainNodeCell').eq(index).click()
              }
              cy.wrap($e1).click()
            })
          }
       })
   })
   Cypress.Commands.add('getRandomDate',() => 
  {
 
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp).toLocaleDateString('en-GB', { month: 'short', day: '2-digit', year: 'numeric'});
  })

  Cypress.Commands.add('getRandomString',() => 
  {
    const random_string = Math.random().toString(36).substring(1)
    return random_string;
  })
  Cypress.Commands.add('getRandomNumber',() => 
  {
    const random_number = Math.floor(Math.random()*(8-2+1))+2
    return random_number;
  })
  Cypress.Commands.add('getRandomCFADate',() => 
  {
    globalThis.randomnumber = Math.floor(Math.random()*(7-2+1))+1
    if(globalThis.randomnumber==1 || globalThis.randomnumber==0)
    {
      globalThis.randomnumber= globalThis.randomnumber + 1
    }
        cy.get(":nth-child("+(globalThis.randomnumber)+") > :nth-child("+(globalThis.randomnumber)+") > .datePickerDay").click()
  })
  Cypress.Commands.add('selectdate',() => 
  {
  let date_index = Math.floor(Math.random()*28)
        cy.log(date_index)
        if(date_index==0)
                {
                    date_index= date_index + 1
                }
                
      //  cy.get("tr .datePickerDay ").contains(date_index).click()
        cy.get("tr .datePickerDay ").contains(date_index).each(($e1,index,$list)=>
        {
            if($e1.text()==date_index)
            {
              $e1.then(($button)=>
              {
                $button.click()
              })
            }
        })
      })

      Cypress.Commands.add('new_nest_frame',(parent_frame_cssSelector, child_frame_cssSelector, element_path, input_text_value, action) => 
      {
        if(action=='type')
        { 
        cy.get(parent_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
        .find(child_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
        .find(element_path).type(input_text_value)
        }
        else
        {
          cy.get(parent_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
          .find(child_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
          .find(element_path).click()
        }
      
      })

      


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


 
  
