
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

describe('TodoMVC', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  context('New Todo', { tags: '@adding' }, function () {
    it('should fail on this test', function () {
      expect(true).equal(false);
    })
  })
})
