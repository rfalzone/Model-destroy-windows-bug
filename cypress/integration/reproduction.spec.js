describe("Debugging Test", () => {
  it("Send POST request to create a widget", () => {
    cy.request("POST", "localhost:1337/widgets");
  });
});
