describe("Controle de animal", () => {
    const email = "teste@exemplo.com";
    const password = "123456";

    beforeEach(() => {
        cy.registerUserAndLogin(email, password);
    })

    it("Deve permitir o cadastro de um novo animal", () => {
        cy.mockApi();

        cy.get('[data-cy="dog-form-name"]').type("bobby");
        cy.get('[data-cy="dog-form-age"]').type("10");
        cy.get('[data-cy="dog-form-breed"]').select("Caucasian Shepherd Dog");
        cy.get('[data-cy="btn-save-dog"]').click();
        cy.get('[data-cy="dog-list-grid"]').should("contain", "bobby");
    })

    it("Validar nao criacao de uma animal com dados faltantes", () => {
        cy.get('[data-cy="dog-form-name"]').type("bobby");
        cy.get('[data-cy="dog-form-age"]').type("10");
        cy.get('[data-cy="btn-save-dog"]').click();

        cy.get('[data-cy="dog-list-grid"]').should("contain", "Você ainda não cadastrou nenhum cachorro.");
    })

    it('Deve exibir o formulário de racas sem opções quando a API falhar', () => {
        cy.intercept('GET', 'https://dogapi.dog/api/v2/breeds', {
            forceNetworkError: true 
        }).as('getBreedsError');

        cy.wait('@getBreedsError');

        cy.get('[data-cy="dog-form-breed-select"]').should('have.length.lessThan', 2);
        
        cy.on('window:before:load', (win) => {
            cy.spy(win.console, 'error').as('consoleError');
        });

        cy.get('@consoleError').should('be.calledWith', 'Falha na requisição da API de raças:', Cypress.sinon.match.any);
    });

    it('Listar animais cadastrados', () => {
        cy.addAnimal("bobby", "10");
        cy.get('[data-cy="dog-list-grid"]').should("contain", "bobby");
    });

    it('Editar animal cadastrado', () => {
        cy.addAnimal("bobby", "10");

        cy.get('[data-cy="dog-list-grid"]')
            .contains('bobby')
            .parent()
            .within(() => {
                cy.get('[data-cy^="btn-edit-dog-"]').click();
            });

        cy.get('[data-cy="dog-form-name"]').clear().type("Rex");
        cy.get('[data-cy="btn-save-dog"]').click();

        cy.get('[data-cy="dog-list-grid"]').should("contain", "Rex");
    });

    it('Excluir animal cadastrado', () => {
        cy.addAnimal("bobby", "10");

        cy.get('[data-cy="dog-list-grid"]')
            .contains('bobby')
            .parent()
            .within(() => {
                cy.get('[data-cy^="btn-delete-dog-"]').click();
            });

        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Tem certeza que deseja excluir este cachorro?')
        })    

        cy.get('[data-cy="dog-list-grid"]').should("not.contain", "bobby");
    });
})