/// <reference types="Cypress" />

/**
 * Main goals
 * - Intercept the XHR request
 * - Wait for the XHR request
 *
 * Additional goals
 * - Leverage glob search to avoid hard coding the server host
 *
 * What to learn
 * - Getting the test more useful in case of failure
 * - What kind of errors are discoverable with a high-level test and what aren't
 * - Intercepting XHR requests
 * - The importance of the test execution speed
 * - Avoid flaky fixed timeouts
 *
 * What to think about
 * - Does the test error point you directly to the problem?
 * - Do the screenshot, video, and the error avoid you to debug the test?
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
