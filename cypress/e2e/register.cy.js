describe("Registro de usuário", () => {
  it("Deve criar um novo usuário com dados válidos", () => {
    cy.visit("/register");

    cy.get('[data-cy="register-email"]').type("qauser@example.com");
    cy.get('[data-cy="register-password"]').type("123456");

    cy.get('[data-cy="btn-register"]').click();

    cy.url().should("include", "/login");
  });


  it("deve exibir erro ao tentar cadastrar com email já existente", () => {
    cy.visit("/register");

    cy.get('[data-cy="register-email"]').type("admin");
    cy.get('[data-cy="register-password"]').type("123");

    cy.get('[data-cy="btn-register"]').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.contain('Este nome de usuário já existe. Por favor, escolha outro.');
    });
  });

  it("deve exibir uma mensagem ao tentar logar com dados errados", () => {
    cy.visit("/login");

    cy.get('[data-cy="login-email"]').type("admin@");
    cy.get('[data-cy="login-password"]').type("12");

    cy.get('[data-cy="btn-login"]').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.contain('Usuário ou senha incorretos.');
    });
  });

  it("deve fazer login e deslogar", () => {
    cy.visit("/login");

    cy.get('[data-cy="login-email"]').type("admin");
    cy.get('[data-cy="login-password"]').type("123");

    cy.get('[data-cy="btn-login"]').click();

    cy.get('[data-cy="dashboard-title"]').should("contain", "Dashboard do Pet");

    cy.get('[data-cy="logout-link"]').should('be.visible').click();

    cy.url().should("include", "/login");
  });

  it("não deve permitir acesso ao dashboard sem estar logado", () => {
    cy.clearLocalStorage();

    cy.visit("/dashboard");

    cy.url().should("include", "/login");

    cy.get('[data-cy="login-form"]').should('be.visible');
  });
});