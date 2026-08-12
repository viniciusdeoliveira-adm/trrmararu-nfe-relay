# TRR Mararu NF-e Relay

Relay HTTP do TRR Mararu para integração segura com serviços fiscais NF-e.

## Estado atual

A versão `0.2.0` adiciona autenticação por Bearer token e as rotas-base protegidas para as futuras operações NF-e.

### Endpoint público

`GET /health`

Não exige autenticação e serve apenas para health check do Railway.

### Endpoints protegidos

Todos exigem:

```http
Authorization: Bearer <RELAY_API_KEY>
```

Rotas preparadas:

- `POST /nfe/emitir`
- `POST /nfe/consultar`
- `POST /nfe/cancelar`
- `POST /nfe/inutilizar`

Neste estágio, elas retornam `501 NOT_IMPLEMENTED`. Nenhuma comunicação real com a SEFAZ é executada.

## Autenticação

A chave é lida da variável de ambiente `RELAY_API_KEY`.

Em produção, configure o valor diretamente no Railway como secret. Nunca coloque a chave real no GitHub, no Lovable ou no código-fonte.

Se `RELAY_API_KEY` não estiver configurada, as rotas protegidas retornam `503 RELAY_NOT_CONFIGURED`.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para validar os tipos:

```bash
npm run typecheck
```

Para gerar a build de produção:

```bash
npm run build
npm start
```

## Deploy

O projeto foi preparado para deploy em uma plataforma como Railway. A porta é obtida da variável `PORT`, fornecida pelo ambiente de hospedagem.

## Segurança

Não armazenar certificados A1, senhas, tokens, chaves privadas ou outros segredos neste repositório. Esses dados serão configurados posteriormente como secrets no ambiente de produção.

A comunicação fiscal real com a SEFAZ ainda não foi habilitada nesta etapa.
