describe("Controle de storage", () => {
    it("Deve criar um novo usuário com dados válidos e salvar no localStorage", () => {
    cy.visit("/register");

    cy.get('[data-cy="register-email"]').type("qauser@example.com");
    cy.get('[data-cy="register-password"]').type("123456");

    cy.get('[data-cy="btn-register"]').click();

    cy.url().should("include", "/login");

    // Faz login logo depois
    cy.get('[data-cy="login-email"]').type("qauser@example.com");
    cy.get('[data-cy="login-password"]').type("123456");
    cy.get('[data-cy="btn-login"]').click();

    // Agora valida que salvou no localStorage
    cy.window().then((win) => {
        const user = win.localStorage.getItem("user"); // ou "token" dependendo do seu app
        expect(user).to.exist;
        cy.log("Usuário salvo no localStorage:", user);
    });
    });

});