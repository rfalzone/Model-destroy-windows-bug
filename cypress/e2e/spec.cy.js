describe("Debugging Test", () => {
  it("Send POST request to create a widget and then retrieve it", () => {
    // Send POST request to create a widget
    cy.request({
      method: "POST",
      url: "http://localhost:1337/widgets",
      body: {
        // Provide any necessary data for creating the widget
        // For example:
        name: "Widget Name",
        description: "Widget Description",
        // Add more properties if needed
      },
    }).as("createWidget");

    // Send GET request to retrieve the widget
    cy.request("GET", "http://localhost:1337/widgets").then((response) => {
      // Retrieve the created widget from the response
      const widget = response.body;

      // Perform assertions or further actions with the retrieved widget
      expect(widget).to.have.property("name", "Widget Name");
      expect(widget).to.have.property("description", "Widget Description");
      // Add more assertions if needed
    });
  });
});



