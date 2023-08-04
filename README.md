## Testes de requisição de APIs para plataforma JsonPlaceHolder

---

# Descritivo:

Os testes propostos tem como objetivo validar o status, estrutura e precisão da resposta

- Parametros:
 - baseUrl: `https://jsonplaceholder.typicode.com`
 - Requisição: GET
 - Endpoint 1: `/posts`
 - Endpoint 2: `/posts/1`

# Teste 1 - "API Test - /posts/1 GET Response Structure and Status" 

1. Validação do status da resposta para requisição GET para o endpoint `/posts/1`
2. Valida a estrutura da resposta e tipo de dados contidos

---

# Cenário 2 - "API Test - /posts GET Response Structure and Status"

1. Validação do status da resposta para requisição GET para o endpoint `/posts`
2. Valida a estrutura da resposta e tipo de dados contidos em todos os objetos presentes

---

## Instruções do Teste

Os testes de interface do usuário Web contidos no repositório podem ser executados de duas maneiras diferentes:

1 - Execução Local

Os testes podem ser executados localmente seguindo os passos abaixo:

- Instale as dependências do NodeJS (https://nodejs.org/en)
- Instale as dependências do Playwright através do comando npm no terminal `npm install`
- Clone o repositório de testes através do comando `git clone git@github.com:Lucas-Runner/jsonplaceholder-API-testing.git` 
- Execute o comando de execução uma vez na pasta de arquivos `npx playwright test` para executar todos os testes simultaneamente ou;
- Execute o comando de execução uma vez na pasta de arquivos `npx playwright test tests/"nome do teste"` para executar um único teste

2 - Interface do GitHub Actions:

- Acesse a URL do repositório (https://github.com/Lucas-Runner/jsonplaceholder-API-testing.git)
- Acesse a página "Actions"
- Clique em "Run All Tests" (Executar Todos os Testes) pois os testes foram configurados para serem executados manualmente
- Clique em "playwright-report" e faça o download do arquivo de resultados na seção "Artifacts" (Artefatos)