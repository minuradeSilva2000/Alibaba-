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
   it('Verify that users can navigate to the supplier search results after searching for a product',()=>{

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

   it('Verify that users can search for a product and navigate to its product details page',()=>{


      cy.on('uncaught:exception', () => false)
      cy.visit('https://www.alibaba.com/', { timeout: 120000 })
      cy.get('.header-tab-input-container.multiline-container',{timeout:120000}).should('be.visible')
      cy.get('textarea.header-tab-input-textarea').type('Camera', { force: true })
      cy.get('button.header-tab-input-button').click({ force: true })
      cy.url().should('include','/search/page')
      cy.get('a[href*="/product-detail/"]',{timeout:120000}).should('be.visible')
      cy.get('a[href*="/product-detail/"]').first().invoke('removeAttr','target').click({ force: true })
      cy.url().should('include','/product-detail/')
      cy.get('body',{timeout:120000}).should('not.be.empty')
   })
   it('Verify supplier search results can be filtered by China as the supplier country',()=>{

      cy.on('uncaught:exception', () => false)
      cy.visit('https://www.alibaba.com/', { timeout: 120000 })
      cy.get('.header-tab-input-container.multiline-container',{timeout:30000}).should('be.visible')
      cy.get('textarea.header-tab-input-textarea').type('Wagon R', { force: true })
      cy.get('button.header-tab-input-button').click({ force: true })
      cy.url().should('include','/search/page')
      cy.get('a[href*="SearchScene=suppliers"]',{timeout:30000}).first().click({ force: true })
      cy.url().should('include','SearchScene=suppliers')
      cy.get('body[data-spm="suppliers_search"]',{timeout:30000}).should('be.visible')
      cy.get('.filter-group-title__inner',{timeout:30000}).should('be.visible')
      cy.get('.left-filter-group.group-id_supplier_country',{timeout:30000}).should('be.visible')
      cy.get('.searchx-interactive-filter-item.left-filter-group-item',{timeout:30000}).should('be.visible')
      cy.get('input[type="checkbox"][id="supplier_country_CN"]',{timeout:30000}).should('exist')
      cy.get('label[for="supplier_country_CN"]',{timeout:30000}).should('be.visible').click({ force: true })
      cy.get('div[id="root"]',{timeout:30000}).should('be.visible')
   })
})