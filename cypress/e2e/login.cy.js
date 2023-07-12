/// <reference types="cypress" />

context('funcionalidade login', () => {
  
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });
  
  
  it('deve fazer login com sucesso', () =>{
    
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
    
  })
  
  it('deve exibir mensagem de erro ao enserir usuario invalido', () =>{
    
    cy.get('#username').type('luno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    })

    it('deve exibir mensagem de erro ao iserir senha invalido', () =>{
      
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida')
      
  
    })
  


});



