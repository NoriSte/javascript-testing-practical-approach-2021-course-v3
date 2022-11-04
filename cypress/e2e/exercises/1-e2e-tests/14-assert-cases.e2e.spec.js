
beforeEach(() => {
  cy.visit('/')
})

it('should handle a passing assert', () => {
  expect(true).equal(true);
})
it('should handle a failing assert', () => {
  expect(true).equal(false);
})
it('should handle a failing assert after a passing one', () => {
  expect(true).equal(true);
  expect(true).equal(false);
})
