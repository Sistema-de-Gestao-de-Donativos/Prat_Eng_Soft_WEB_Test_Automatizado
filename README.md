
# Guia para executar os testes com Cypress

  

Este documento explica de forma didática como configurar e executar o **Cypress** em sua máquina para realizar testes no projeto.

  

## Pré-requisitos

  

Certifique-se de que os seguintes itens estão instalados em sua máquina:

  

1.  **Node.js** (versão 12 ou superior).

2.  **Gerenciador de Pacotes npm** (vem junto com o Node.js).

3.  **Cypress** já está instalado no projeto. Caso haja alguma incompatibilidade, instale usando o comando abaixo no terminal:

  

> npm install cypress --save-dev

## Como Rodar o Cypress

  

Existem duas formas principais de executar os testes: com a interface gráfica e diretamente no terminal.

  

1.  **Abrindo a Interface Gráfica**

A interface gráfica do Cypress permite selecionar e executar os testes manualmente. Para abri-la, siga os passos:

 - No terminal, digite o seguinte comando:

> npx cypress open

- Em seguida abrirá uma janela como essa:
![Tela inicial do Cypress](https://i.ibb.co/sV1y9Ss/imagem-2024-11-27-173236702.png)
- Clique em E2E Testing e escolha o navegador de sua preferência (Por padrão utilizamos o Chrome)
![Tela de escolha de navegador](https://i.ibb.co/NZ5CKXP/imagem-2024-11-27-173502936.png)
- Escolha o teste que gostaria de executar e clique sobre ele

2.  **Rodando os testes via terminal**
- Digite o seguinte comando no terminal:
> npx cypress run
- Os testes rodarão imediatamente, basta aguardar ao fim da operação

3. **Verificando artefatos de video**
É possível visualizar a execução de cada teste após o termino da execução por meio de artefatos salvos no formato mp4, eles podem ser utilizados para debug, já que independente se o teste passar ou não, um vídeo será criado e você poderá ver exatamente onde o teste falhou.

4. **Estrutura do projeto**
As pastas do projeto estão estruturadas da seguinte forma:

>   /e2e/testes # Arquivos dos testes propriamente ditos.
  /videos # Pasta com artefatos em video de cada teste executado
  /support       # Suporte e comandos customizados.

Para demais duvidas, consulte a documentação oficial do Cypress em: https://docs.cypress.io/app/get-started/why-cypress