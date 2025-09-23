# Projeto QA Pet

Este é um projeto web completo, criado com **React** e **Vite**, focado em gerenciar animais de estimação. Ele permite que usuários se registrem, façam login e gerenciem seus pets e as tarefas relacionadas a eles. O projeto também inclui testes de ponta a ponta com **Cypress**, garantindo a qualidade e o bom funcionamento das funcionalidades.

## Funcionalidades Principais

- **Registro de Usuário**: Crie uma nova conta para começar a usar o sistema.
- **Login**: Acesse sua conta com suas credenciais.
- **Dashboard**: Visualize um resumo dos seus pets e tarefas.
- **Gestão de Animais**:
  - Cadastre um novo animal de estimação.
  - Edite as informações de um pet existente.
  - Exclua um animal da sua lista.
- **Gestão de Tarefas**:
  - Crie tarefas específicas para cada animal (por exemplo, "dar banho", "comprar ração").
  - Edite as tarefas para atualizar seu status ou detalhes.
  - Exclua tarefas concluídas ou indesejadas.

## Como Executar o Projeto

Para colocar o projeto em funcionamento na sua máquina local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de que você tem o **Node.js** e o **npm** (ou Yarn) instalados na sua máquina.

### Instalação

1.  Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/moura5412/projeto-qa-pet.git
    cd projeto-qa-pet
    ```

2.  Instale as dependências do projeto:

    ```bash
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento e rodar a aplicação:

```bash
npm run dev
```

## Testes Automatizados com Cypress

Para garantir a confiabilidade da aplicação, usamos o Cypress para testes de ponta a ponta.

### Como Rodar os Testes

Para abrir a interface gráfica do Cypress e rodar os testes de forma interativa:

```bash
npm run cypress
```
