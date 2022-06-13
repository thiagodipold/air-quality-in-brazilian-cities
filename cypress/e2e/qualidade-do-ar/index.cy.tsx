describe('air quality page', () => {
  beforeEach(() => {
    cy.visit('https://air-quality-in-brazilian-cities.vercel.app')
  
    cy.wait(5000)
  });

  it('should get city title', () => {
    cy.contains(/Guarulhos/i).should('have.text', 'Guarulhos-Paço Municipal, São Paulo, Brazil')
  });

  it('should get count of total buttons elements', () => {
    cy.get('button').should('have.length', 15);
  })

  it.only('should click on first "Moderada" parent button and find its respective text', () => {
    const text = 'Pessoas de grupos sensíveis (crianças, idosos e pessoas com doenças respiratórias e cardíacas) podem apresentar sintomas como tosse seca e cansaço. A população, em geral, não é afetada.'
    cy.contains(/Moderada/i).parents('.MuiPaper-root').find('button').click()

    cy.get('.MuiDialogContent-root p').last().should('have.text', text);
  })
})