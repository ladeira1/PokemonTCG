describe('App test suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render home screen', () => {
    cy.get(`[data-testid=logo]`).should('exist');
  });

  it('should filter for Gengar and then remove filter', () => {
    cy.get(`[data-testid=small-card]`).should('exist');
    cy.get(`[data-testid=input]`).type('Gengar');
    cy.get(`[data-testid=button]`).click();
    cy.get(`[data-testid=small-card]`)
      .should('exist')
      .first()
      .contains('Gengar');
    cy.get(`[data-testid=input]`).clear();
    cy.get(`[data-testid=button]`).click();
    cy.get(`[data-testid=small-card]`)
      .should('exist')
      .first()
      .contains('Abomasnow');
  });

  it('should navigate to card Details when clicking on a card', () => {
    cy.get(`[data-testid=small-card]`).should('exist').first().click();
    cy.get(`[data-testid=detailed-card-id]`, { timeout: 6000 }).then($p => {
      const id = $p.text();

      cy.url().should('include', `/card/${id}`);
    });
  });
});
