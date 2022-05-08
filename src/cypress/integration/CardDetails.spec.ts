describe('CardDetails test suite', () => {
  beforeEach(() => {
    cy.visit('/card/ecard1-13');
  });

  it('should render home screen', () => {
    cy.get(`[data-testid=logo]`).should('exist');
  });

  it('should return to home when clicking on the return icon', () => {
    cy.get(`[data-testid=detailed-card-return-button]`).click();
    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('should return to home when clicking on logo', () => {
    cy.get(`[data-testid=logo]`).click();
    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('should open attack modal when clicking on an attack', () => {
    cy.scrollTo('bottom');
    cy.get(`[data-testid=button]`).click();
    cy.get(`[data-testid=attack-modal]`).should('exist');
  });

  it('should close attack modal when clicking on the X', () => {
    cy.scrollTo('bottom');
    cy.get(`[data-testid=button]`).click();
    cy.get(`[data-testid="attack-modal-close-button"]`).click();
    cy.get(`[data-testid=attack-modal]`).should('not.be.visible');
  });
});
