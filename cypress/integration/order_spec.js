describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render label', () => {
    cy.get('label').should('have.text', 'Search by price: $')
  })

  it('Should find correct order in the table', () => {
    cy.wait(5000)
    cy.get('input').type('2.26')
    cy.get('tbody tr').should('have.length', 1)
    cy.get('table').contains('td', '2.26').should('be.visible');
  })

  it('Should return corret order count', () => {
    cy.get('p').should('contain.text', 'Total Count: ')
    cy.get('input').type('2.26')
    cy.wait(5000)
    cy.get('p').should('have.text', 'Total Count: 1')
  })
})