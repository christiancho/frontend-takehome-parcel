
describe('App', () => {
  it('does not render results when the input has fewer than 3 characters', () => {
    cy.visit('http://localhost:1234');
    cy.get('input')
      .type('ra');
    cy.get('section')
      .find('div')
      .should('not.exist');
  });

  it('renders results when the input has at least 3 characters', () => {
    cy.visit('http://localhost:1234');
    cy.get('input')
      .type('rails');
    cy.get('section')
      .find('div')
      .find('div');
  });

  it('allows saving of a gem to local storage', () => {
    cy.visit('http://localhost:1234');
    cy.get('input')
      .type('rails');

    cy.get('button').first().click();
    cy.get('ul > li').first().next().click();
    cy.contains('rails');
  });

  it('removes a gem properly', () => {
    cy.visit('http://localhost:1234');
    cy.get('input')
      .type('rails');

    cy.get('button').first().click();
    cy.get('ul > li').first().next().click();
    cy.contains('rails');

    cy.get('button').first().click();
    cy.contains(`You don't have any saved gems.`);
  })
});
