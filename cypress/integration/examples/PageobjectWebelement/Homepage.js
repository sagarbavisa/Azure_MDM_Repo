class Homepage
{
    getCheckbox()
    {
     return cy.get("[type='checkbox']")
    }
    getstaticdropdown()
    {
       return cy.get("#dropdown-class-example")
    }
    getdynamicdropdownInptext()
    {
       return cy.get("#autocomplete")
    }
    getdynamicdropdownoptions()
    {
        return cy.get(".ui-menu-item-wrapper")
    }
    getHidetextbox()
    {
        return cy.get("#hide-textbox")
    }
    getDisplayText()
    {
      return cy.get("#displayed-text")
    }
    getradiobutton()
    {
       return cy.get("[type='radio']")
    }
    getAlertbtn()
    {
        return cy.get("#alertbtn")  
    }
    getConfirmBtn()
    {
       return cy.get("#confirmbtn")
    }
    getOpentab()
    {
      return cy.get("#opentab")
    }
    getTableHandling()
    {
        return cy.get('.table-display tbody tr td:nth-child(2)')
    }
    getMousehover()
    {
        return cy.get(".mouse-hover-content")
    }
    getTopText()
    {
        return cy.contains('Top')
    }

    getFrameloaded()
    {
        return cy.frameLoaded('#courses-iframe')
    }
    getlearningpathFrame()
    {
        return cy.iframe().find("[href='learning-path'].new-navbar-highlighter")
    }
}
export default Homepage;