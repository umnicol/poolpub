// We need this empty export to silence a module error
export {};


describe("PoolPub exam project", () => {
  it("passes", () => {
    cy.visit("https://poolpub-m67f.vercel.app/");
    cy.get("h2").should("contain.text", "Our Story");
    cy.get("button").should("have.length", 5); 

  //for testing Activity page
    cy.contains("Activities").click();
    cy.get("img").should("have.length", 13); 
    cy.get("h2").should("contain.text", "Pick from our variety of activities");
    cy.get("button").should("have.text", "Book NowBook Now"); 

   //for testing Contact page
   cy.contains("Contact").click();
   cy.get("input").should("have.length", 2); 
  });

   //for testing if button opens a new page
   it('should open a new page when button is clicked', () => {
  
    cy.visit('https://poolpub-m67f.vercel.app');

    // Click the button
    cy.get('div.MainHeader_button_mainheader__XawRj').click();

    // Assert that a new page has been opened
    cy.url().should('include', 'https://poolpub-m67f.vercel.app/login');
});

//for testing if the logo opens home page when clicked
it('should open a homepage when logo image is clicked', () => {
  
  cy.visit('https://poolpub-m67f.vercel.app/activities');
  cy.get('nav.NavBar_navbar__su2Hc').click();
  cy.url().should('include', 'https://poolpub-m67f.vercel.app/');
});
});
 
