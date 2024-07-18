describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-cy="buttonValid"]').click()
    cy.contains('Rick And Morty')
  })
});
