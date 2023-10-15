describe('Tests suite calcul TVA', ()=>{
   it('Vérifier la page et la présence du calculatrice', () =>{
      //se connecter a l'application
     cy.visit('http://127.0.0.1:5500/index.html');
     //vérifie est ce que le titre existe dans la page
     cy.get('title').contains('TestE2E');
     cy.get('h1').should('be.visible').contains('Calcul TVA');
   })
   it('Tester le calcul dans le cas du montant <= 0', () =>{
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('#montant').clear().type(0, { force: true });
      cy.get('#tva').clear().type(20, { force: true });
      cy.get('#btn_calculer').click();
      cy.get('#montant_ttc').should('have.text', 'Le montant doit être > 0');
   })
   it('Tester le calcul dans le cas du tva <= 0', () =>{
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('#montant').clear().type(1000, { force: true });
      cy.get('#tva').clear().type(0, { force: true });
      cy.get('#btn_calculer').click();
      cy.get('#montant_ttc').should('have.text', 'Le montant de tva doit être > 0');
   })
   
   it('Tester le calcul le cas du montant tcc 40 en saisie 400€ et 20%', () =>{
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('#montant').clear().type(200, { force: true });
      cy.get('#tva').clear().type(20, { force: true });
      cy.get('#btn_calculer').click();
      cy.get('#montant_ttc').should('have.text', 40);
   })

})