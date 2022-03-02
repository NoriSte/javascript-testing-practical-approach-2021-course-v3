/// <reference types="Cypress" />

/**
 * Main goals
 * - Assert about the response status code
 * - Assert about the response payload
 *
 * What to learn
 * - Making more assertions on the same subject
 * - Excluding as much errors as possible
 * - How much important is to test the payloads, even if it's not a user-like check
 * - Understanding what to care about: does the client need to know how the token is made up?
 *
 * Testing rules
 * - A failing test must give useful feedback. It must tell you what failed and why, without re-launching or debugging it
 * - Debugging a failing test is way harder than debugging an application
 */

context('The sign up page', () => {
  beforeEach(() => {
    // adapt the viewport, allows the instructor to have more vertical windows when sharing the screen
    cy.viewport(600, 900)
    cy.visit('/register')
  })

  it('Should allow registering and redirects the user to the home page', () => {
    // ...
  })
})
