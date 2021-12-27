/* eslint-disable no-undef */
describe('localStorage game config', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/');
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('should be true on game initialisation', () => {
    cy.reload(); // for some reasons I am getting null value if I try to read localStorage on load?
    cy.getLocalStorage('sound-enabled').should('equal', 'true');
  });

  it('should be false after clicking the sound toggle', () => {
    cy.findByRole('button', { name: /sounds/i }).click();
    cy.getLocalStorage('sound-enabled').should('equal', 'false');
  });

  it('should be false after reload', () => {
    cy.getLocalStorage('sound-enabled').should('equal', 'false');
  });
});

describe('cards', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render 5 cards on load', () => {
    cy.findByTestId('cards').children().should('have.length', 5);
  });
});
