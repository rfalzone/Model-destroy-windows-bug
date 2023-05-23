describe("Debugging Test", () => {
  beforeEach(() => {
    cy.deleteWidgets();
  });

  it("Send POST request to create a widget and then retrieve it, then delete and retrieve", () => {
    // Send POST request to create a widget
    cy.postWidget({
      name: "Widget0",
      description: "0Rules",
      price: 0,
    });
    cy.postWidget({
      name: "Widget1",
      description: "1Rules",
      price: 1,
    });

    cy.log("Widget Added");

    cy.getWidgets().then((widgets) => {
      expect(widgets.length).to.not.equal(0);
      const [widget0, widget1] = widgets;
      expect(widget0.name).to.equal("Widget0");
      expect(widget0.description).to.equal("0Rules");
      expect(widget1.name).to.equal("Widget1");
      expect(widget1.description).to.equal("1Rules");
    });
    cy.log("widgets found");

    cy.deleteWidgets();

    cy.log("All widgets deleted");

    cy.getWidgets().then((widgets) => {
      expect(widgets.length).to.not.equal(0);
    });
  });
});
