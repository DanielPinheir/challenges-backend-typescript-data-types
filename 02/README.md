# Exercício 02

## Filtro de Usuários

Implemente uma função que seja capaz de filtrar usuários pelo nome em uma lista de resultados.

A função receberá a lista de usuários e o nome a ser encontrado na lista.

O retorno da função será um array com os resultados da busca ou um array vazio caso nenhum usuário seja encontrado.

Exemplo da lista de usuários:

```javascript
const usuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];
```

Caso a busca seja pelo nome `jo`, a função deverá retornar:

```javascript
[
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];
```

O programa deverá usar o TypeScript e todas variáveis, parâmetros e retorno de funções devem ser tipadas adequadamente.

Não é necessário transpilar o código.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`
