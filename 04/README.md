# Exercício 04

## Impressão de Etiquetas

Uma linha de produção de computadores precisa implementar uma nova funcionalidade, ao sistema de gestão usado em sua fábrica, para geração automática de etiquetas dos produtos. Implemente uma função que receba um objeto, conforme exemplo abaixo, como argumento e retorne uma lista com todas as informações das etiquetas geradas.

```javascript
    {
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 5
    }
```

O resultado para o exemplo acima será:

```javascript
[
  "321-2022-001",
  "321-2022-002",
  "321-2022-003",
  "321-2022-004",
  "321-2022-005",
];
```

Obs.:

O programa deverá usar o TypeScript e todas variáveis, parâmetros e retorno de funções devem ser tipadas adequadamente.

Não é necessário transpilar o código.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`
