Cypress.Commands.add("postWidget", ({ name, description, price }) => {
  cy.request({
    method: "POST",
    url: "http://localhost:1337/widget",
    body: {
      name,
      description,
      price,
    },
  });
  cy.log("Widget Added");
});

Cypress.Commands.add("getWidgets", () => {
  cy.request("GET", "http://localhost:1337/widget").then((res) => {
    const widgets = res.body;
    return widgets;
  });
});

Cypress.Commands.add("deleteWidgets", () => {
  cy.request("DELETE", "http://localhost:1337/widget/all").then((res) => {
    cy.log(res.body.message);
  });
});
