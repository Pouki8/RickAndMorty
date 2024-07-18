describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Rickandmorty')
  })
});

// describe('Countdown Timer', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it('should start the countdown and show the button when finished', () => {
//     // Assurez-vous de cliquer sur le bouton pour démarrer le décompte
//     cy.get('button').contains('Start Countdown').click();

//     // Attendre que le décompte soit terminé (par exemple, 3600 secondes pour 1 heure)
//     cy.wait((1 * 3600 + 0 * 60 + 0) * 1000); // Remplacez par la durée du décompte en millisecondes

//     // Vérifiez si le bouton est affiché après le décompte
//     cy.get('button').contains('Tirage au sort').should('be.visible');
//   });
// });