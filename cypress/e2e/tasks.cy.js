describe("Controle de tarefas", () => {
    const email = "teste@exemplo.com";
    const password = "123456";

    const nome = "bobby";
    const idade = "10"; 

    beforeEach(() => {
        cy.registerUserAndLogin(email, password);
        cy.addAnimal(nome, idade);
    })

    it('Deve criar uma tarefa associada ao cachorro', () => {
        cy.get('[data-cy^="btn-toggle-task-form-"]').click();

        cy.get('[data-cy="task-form-name"]').type('Passear no parque');
        cy.get('[data-cy="task-form-description"]').type('Levar Rex para passear 30 minutos');
        cy.get('[data-cy="task-form-date"]').type('2025-09-20');
        cy.get('[data-cy="task-form-hour"]').type('10:30');

        cy.get('[data-cy="btn-save-task"]').click();

        cy.get('[data-cy^="task-list-dog-"]').within(() => {
            cy.contains('Passear no parque').should('exist');
            cy.contains('Levar Rex para passear 30 minutos').should('exist');
            cy.contains('2025-09-20 às 10:30').should('exist');
        });
    });

    it('Validar nao criacao de uma tarefa com dados faltantes', () => {
        cy.get('[data-cy^="btn-toggle-task-form-"]').click();

        cy.get('[data-cy="btn-save-task"]').click();

        cy.get('[data-cy^="task-list-dog-"]').within(() => {
            cy.contains('Passear no parque').should('not.exist');
        });
    });

    it('Listar todas as tarefas de um animal', () => {
        cy.addTask('Passear no parque', 'Levar Rex para passear 30 minutos', '2025-09-20', '10:30');
        cy.get('[data-cy^="task-list-dog-"]').should("contain", "Passear no parque");
    });
    
    it('Editar tarefa de um animal', () => {
        cy.addTask('Passear no parque', 'Levar Rex para passear 30 minutos', '2025-09-20', '10:30');
        
        cy.get('[data-cy^="task-list-dog-"]')
            .contains('Passear no parque')
            .parent()
            .parent()
            .within(() => {
                cy.get(('[data-cy^="task-actions-"]')).get('[data-cy^="task-edit-btn-"]').click();
            });

        cy.get('[data-cy="task-form-name"]').type('Passear no navio');
        cy.get('[data-cy="task-form-description"]').type('Levar Rex para passear 50 minutos');
        cy.get('[data-cy="task-form-date"]').type('2025-10-20');
        cy.get('[data-cy="task-form-hour"]').type('11:30');  
        
        cy.get('[data-cy="btn-save-task"]').click();

        cy.get('[data-cy^="task-list-dog-"]').within(() => {
            cy.contains('Passear no navio').should('exist');
            cy.contains('Levar Rex para passear 50 minutos').should('exist');
            cy.contains('2025-10-20 às 11:30').should('exist');
        });
    });

    it('Marcar tarefa como concluída e verificar status atualizado', () => {
        cy.addTask('Passear no parque', 'Levar Rex para passear 30 minutos', '2025-09-20', '10:30');

        cy.get('[data-cy^="task-toggle-btn-"]').click();

        cy.get('[data-cy^="task-toggle-btn-"]').should('contain', '✓');    
    }); 

    it('Excluir uma tarefa cadastrado', () => {
        cy.addTask('Passear no parque', 'Levar Rex para passear 30 minutos', '2025-09-20', '10:30');

        cy.get('[data-cy^="task-list-dog-"]')
            .contains('Passear no parque')
            .parent()
            .parent()
            .within(() => {
                cy.get(('[data-cy^="task-actions-"]')).get('[data-cy^="task-delete-btn-"]').click();
            });

        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Tem certeza que quer excluir esta tarefa?')
        })    

        cy.get('[data-cy^="task-list-dog-"]').within(() => {
            cy.contains('Passear no navio').should('not.exist');
            cy.contains('Levar Rex para passear 50 minutos').should('not.exist');
            cy.contains('2025-10-20 às 11:30').should('not.exist');
        });;
    });  

})