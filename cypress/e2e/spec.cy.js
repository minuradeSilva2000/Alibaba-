describe('Alibaba Website - Functional Testing cypress', () => {
  it('Verify Alibaba website loads successfully', () => {
    cy.visit('https://www.alibaba.com/', { timeout: 120000 })
    cy.get('textarea.header-tab-input-textarea', { timeout: 30000 }).should('be.visible')
  })

   it('verify search function is working',()=>{
      cy.on('uncaught:exception', () => false)
      cy.visit('https://www.alibaba.com/', { timeout: 120000 })
      cy.get('.header-tab-input-container.multiline-container',{timeout:30000}).should('be.visible')
      cy.get('textarea.header-tab-input-textarea').type('Camera', { force: true })
      cy.get('button.header-tab-input-button').click({ force: true })
      cy.url().should('include','/search/page')
      cy.get('.header-tab-input-container',{timeout:30000}).should('be.visible')
   })
   it('verify click suppliers link is working',()=>{

      cy.on('uncaught:exception', () => false)
      cy.visit('https://www.alibaba.com/', { timeout: 120000 })
      cy.get('.header-tab-input-container.multiline-container',{timeout:30000}).should('be.visible')
      cy.get('textarea.header-tab-input-textarea').type('Camera', { force: true })
      cy.get('button.header-tab-input-button').click({ force: true })
      cy.url().should('include','/search/page')
       cy.get('a[href*="SearchScene=suppliers"]',{timeout:30000}).first().click({ force: true })
       cy.url().should('include','SearchScene=suppliers')
       cy.get('body[data-spm="suppliers_search"]',{timeout:30000}).should('be.visible')

   })

   it('verify click the  item then navigate details page',()=>{


      cy.on('uncaught:exception', () => false)
      cy.visit('https://www.alibaba.com/', { timeout: 120000 })
      cy.get('.header-tab-input-container.multiline-container',{timeout:30000}).should('be.visible')
      cy.get('textarea.header-tab-input-textarea').type('Camera', { force: true })
      cy.get('button.header-tab-input-button').click({ force: true })
      cy.url().should('include','/search/page')
      cy.get('a[href*="/product-detail/"]',{timeout:30000}).should('be.visible')
      cy.get('a[href*="/product-detail/"]').first().invoke('removeAttr','target').click({ force: true })
      cy.url().should('include','/product-detail/')
      cy.get('body',{timeout:30000}).should('not.be.empty')
   })

})
