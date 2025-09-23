describe("Fluxo completo do sistema Pet", () => {
  const email = "fluxo@example.com";
  const password = "123456";

  it("Deve realizar o fluxo completo: registro → login → CRUD animal/tarefa → logout", () => {
    cy.visit("/register");
    cy.get('[data-cy="register-email"]').type(email);
    cy.get('[data-cy="register-password"]').type(password);
    cy.get('[data-cy="btn-register"]').click();
    cy.url().should("include", "/login");

    cy.get('[data-cy="login-email"]').type(email);
    cy.get('[data-cy="login-password"]').type(password);
    cy.get('[data-cy="btn-login"]').click();
    cy.get('[data-cy="dashboard-title"]').should("contain", "Dashboard do Pet");

    cy.mockApi();

    cy.get('[data-cy="dog-form-name"]').type("Bobby");
    cy.get('[data-cy="dog-form-age"]').type("5");
    cy.get('[data-cy="dog-form-breed"]').select("Caucasian Shepherd Dog");
    cy.get('[data-cy="btn-save-dog"]').click();
    cy.get('[data-cy="dog-list-grid"]').should("contain", "Bobby");

    cy.get('[data-cy="dog-list-grid"]')
        .contains('Bobby')
        .parent()
        .within(() => {
            cy.get('[data-cy^="btn-edit-dog-"]').click();
        });

    cy.get('[data-cy="dog-form-name"]').clear().type("Rex");
    cy.get('[data-cy="btn-save-dog"]').click();

    cy.get('[data-cy="dog-list-grid"]').should("contain", "Rex");

    cy.get('[data-cy^="btn-toggle-task-form-"]').click();
    cy.get('[data-cy="task-form-name"]').type("Passear");
    cy.get('[data-cy="task-form-description"]').type("Levar rex ao parque");
    cy.get('[data-cy="task-form-date"]').type("2025-09-22");
    cy.get('[data-cy="task-form-hour"]').type("09:00");
    cy.get('[data-cy="btn-save-task"]').click();
    cy.get('[data-cy^="task-list-dog-"]').should("contain", "Passear");

    cy.get('[data-cy^="task-list-dog-"]')
      .contains("Passear")
      .parent()
      .parent()
      .within(() => {
        cy.get('[data-cy^="task-edit-btn-"]').click();
      });
    cy.get('[data-cy="task-form-name"]').clear().type("Correr");
    cy.get('[data-cy="btn-save-task"]').click();
    cy.get('[data-cy^="task-list-dog-"]').should("contain", "Correr");


    cy.on("window:confirm", (str) => {
      expect(str).to.be.oneOf([
          "Tem certeza que quer excluir esta tarefa?",
          "Tem certeza que deseja excluir este cachorro?"
      ]);
      return true;
    });

    cy.get('[data-cy^="task-list-dog-"]')
      .contains("Correr")
      .parent()
      .parent()
      .within(() => {
        cy.get('[data-cy^="task-delete-btn-"]').should('exist').click();
      });
    cy.get('[data-cy^="task-list-dog-"]').should("not.contain", "Correr");

    cy.get('[data-cy="dog-list-grid"]')
        .contains('Rex')
        .parent()
        .within(() => {
            cy.get('[data-cy^="btn-delete-dog-"]').click();
        });
    cy.get('[data-cy="dog-list-grid"]').should("not.contain", "Rex");

    cy.get('[data-cy="logout-link"]').should('exist').click();
    cy.wait(500);
    cy.url().should("include", "/login");
  });
});
