/// <reference types="cypress" />

context('pagina de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

it('deve solucionar um produto da lista', () => {
  cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').first().click()
  // .first() primeiro item da lista 
  // .last() pegar ultimo item da lista
  // .eq(5) escolher um item a lista

})

it('deve adicionar item ao carrinho', () => {
var quantidade = 4

// 

  cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
  cy.get('.button-variable-item-XS').click()
  cy.get('.button-variable-item-Green').click()
  cy.get('.input-text').clear().type(quantidade)
  cy.get('.single_add_to_cart_button').click()

  cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
  cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
  
});
  



































});