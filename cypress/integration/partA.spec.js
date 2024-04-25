describe("Part A - Expired coupons", () => {
  it(`should display the "SALE1" coupon as NOT expired`, () => {
    cy.visit("http://localhost:5000");
    cy.get("#partA tr:nth-child(1) td:last-child").contains("No");
  });

  it(`should display the "SALE2" coupon as NOT expired`, () => {
    cy.visit("http://localhost:5000");
    cy.get("#partA tr:nth-child(2) td:last-child").contains("No");
  });

  it(`should display the "SALE3" coupon as expired`, () => {
    cy.visit("http://localhost:5000");
    cy.get("#partA tr:nth-child(3) td:last-child").contains("Yes");
  });

  it(`should display the "SALE4" coupon as expired`, () => {
    cy.visit("http://localhost:5000");
    cy.get("#partA tr:nth-child(4) td:last-child").contains("Yes");
  });
});
