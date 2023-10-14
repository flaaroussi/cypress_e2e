describe('Mon premier test Cypress', () =>{
   it('Visite une page Google et vérifie le titre de la page', () =>{
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('title').contains('TestE2E');
   });

   it('Saisir un mot', () =>{
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('#test').type("4032{enter}");
      cy.get('#test').should('contain', '4032');

   })
})