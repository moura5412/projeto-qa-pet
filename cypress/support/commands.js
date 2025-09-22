Cypress.Commands.add("registerUserAndLogin", (email, password) => {
  cy.clearLocalStorage();

  cy.visit("/register");

  cy.get('[data-cy="register-email"]').type(email);
  cy.get('[data-cy="register-password"]').type(password);

  cy.get('[data-cy="btn-register"]').click();

  cy.url().should("include", "/login");

  cy.get('[data-cy="login-email"]').type(email);
  cy.get('[data-cy="login-password"]').type(password);
  cy.get('[data-cy="btn-login"]').click();

  cy.get('[data-cy="dashboard-title"]').should("contain", "Dashboard do Pet");
});

Cypress.Commands.add("mockApi", () => {
  cy.intercept("GET", "https://dogapi.dog/api/v2/breeds", {
    fixture: "dogs.json"
  }).as("getBreeds");

  cy.wait("@getBreeds");
});

Cypress.Commands.add("addAnimal", (nome, idade) => {
  cy.mockApi();

  cy.get('[data-cy="dog-form-name"]').type(nome);
  cy.get('[data-cy="dog-form-age"]').type(idade);
  cy.get('[data-cy="dog-form-breed"]').select("Caucasian Shepherd Dog");
  cy.get('[data-cy="btn-save-dog"]').click();
  cy.get('[data-cy="dog-list-grid"]').should("contain", "bobby");
});

Cypress.Commands.add("addTask", (nome, descricao, data, hora) => {
  cy.get('[data-cy^="btn-toggle-task-form-"]').click();

  cy.get('[data-cy="task-form-name"]').type(nome);
  cy.get('[data-cy="task-form-description"]').type(descricao);
  cy.get('[data-cy="task-form-date"]').type(data);
  cy.get('[data-cy="task-form-hour"]').type(hora);

  cy.get('[data-cy="btn-save-task"]').click();
});


