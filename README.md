# Ar da minha cidade

O projeto consiste em informar aos usuários o nível da qualidade do ar em determinadas cidades paulistas.

Através da [API -  Air Quality Programmatic](https://aqicn.org/api/), consumimos o nível da qualidade do ar através do medidor mp 2.5, indicando a cidade em questão.

## Dependências do projeto

Para rodarmos o projeto, precisamos ter instalado no computador as seguintes dependências:
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Tecnologias utilizadas
- [Node](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/) para gerenciamento de pacotes
- [Material UI](https://mui.com/) como biblioteca de UI
- [Axios](https://axios-http.com/) para realizar requisições HTTP

## Como rodar o projeto

### `yarn`

Devemos utilizar esse comando antes de rodar o projeto pela primeira vez, para instalarmos todas as dependências.
### `yarn start`

Utilizado para rodar a aplicação no modo de desenvolvimento.

Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto em seu navegador.

## Deploy

A aplicação está hospedada em produção [neste link](http://air-quality-in-brazilian-cities.vercel.app/), através da plataforma da [Vercel](https://vercel.com/).

O deploy é realizado toda vez que a branch principal da aplicação do repositório (master) receber um push novo.
