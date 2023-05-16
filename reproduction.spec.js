describe("Debugging Test", () => {
  it("Send POST request to create a widget", () => {
    cy.request("POST", "http://localhost:1337/widgets");
  });

  it("Send GET request to retrieve widgets", () => {
    cy.request("GET", "http://localhost:1337/widgets").then((response) => {
      // Handle the response as needed
      // For example, you can assert the status code or inspect the response body
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("widgets");
    });
  });
});
