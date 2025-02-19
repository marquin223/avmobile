## Diferença entre testes unitários e testes E2E (End to End)

### Testes Unitários

Focam em verificar o funcionamento correto de pequenas unidades do código, como funções ou componentes isolados. O objetivo é assegurar que cada parte individual da aplicação opere conforme o esperado, independentemente das demais.

### Testes End-to-End (E2E)

Avaliam o sistema como um todo, simulando o comportamento real do usuário. Esses testes percorrem todo o fluxo da aplicação, desde a interface até o banco de dados, garantindo que todos os componentes interajam corretamente em conjunto.

Enquanto os testes unitários asseguram que cada componente funcione isoladamente, os testes E2E garantem que a integração entre esses componentes proporcione uma experiência consistente e livre de erros para o usuário final.

# README

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
