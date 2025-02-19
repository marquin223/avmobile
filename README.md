## Diferença entre testes unitários e testes E2E (End to End)

### Testes Unitários

Os testes unitários ja dizem no próprio nome o que fazem, são testes geralmente para testar uma função, componete, botão, entre outros que servem para ver se por exemplo o botão está funcionando corretamente.

### Testes End-to-End (E2E)

Os testes end-2-end servem para testar os fluxos de uma aplicação por exemplo, vou ná pagina 'listagem' abro o menu e vou para o outra página, ou até de quando faz o login que páginas ele conssegue ir. Esses testes seriam para testar como um usuário iria mexer na aplicação.

Enquanto os testes unitários asseguram que cada componente funcione isoladamente, os testes E2E garantem que a integração entre esses componentes proporcione uma experiência consistente e livre de erros para o usuário final.

## Instalação das Dependências

Antes de executar os testes, certifique-se de instalar todas as dependências do projeto. Para isso, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado (versão recomendada: 16 ou superior).
2. No terminal, navegue até a raiz do projeto e execute o comando:

   ```sh
   npm install
   ```

Isso instalará todas as bibliotecas necessárias para rodar a aplicação e os testes.

---

## Execução dos Testes

Os testes são executados utilizando o Jest e a Testing Library para React Native.

### Rodar Todos os Testes

Para executar todos os testes do projeto, utilize o comando:

```sh
npm test
```

Ou, se estiver usando Yarn:

```sh
yarn test
```

---

## Testes Incluídos

### 1. Testes do Header Component

Os testes do `Header` verificam:

- Se o título correto está sendo exibido.
- Se a cor do título está correta.

### 2. Testes do ImageButton Component

Os testes do `ImageButton` verificam:

- Se a imagem está sendo renderizada corretamente.
- Se o botão chama a função `onPress` ao ser pressionado.

Caso precise rodar um teste específico, utilize:

```sh
npm test -- tests/NOME_DO_ARQUIVO.test.tsx
```

Exemplo para testar apenas o `ImageButton`:

```sh
npm test -- tests/ImageButton.test.tsx
```

---

## Solução de Problemas

- Se os testes não encontrarem elementos esperados, verifique se os `testID` estão corretamente atribuídos nos componentes.
- Se o Jest não reconhecer módulos, tente limpar o cache e rodar novamente:

  ```sh
  npm run clean && npm test
  ```

- Se precisar atualizar as snapshots, utilize:

  ```sh
  npm test -- -u
  ```
