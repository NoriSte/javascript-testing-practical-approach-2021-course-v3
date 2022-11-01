context('The site', () => {
  beforeEach(() => {
    cy.viewport(600, 900)
  })

  it('Should throw an error from calling an unknown function', () => {
    0()
  })
  it('Should throw an error from calling an unknown function', () => {
    1()
  })
  it('Should throw an error from calling an unknown function', () => {
    2()
  })
})
