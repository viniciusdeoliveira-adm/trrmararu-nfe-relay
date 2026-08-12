# TRR Mararu NF-e Relay

Relay HTTP do TRR Mararu para integração segura com serviços fiscais NF-e.

## Estado atual

Esta primeira versão cria apenas a infraestrutura base do serviço. O endpoint disponível é:

`GET /health`

Exemplo de resposta:

```json
{
  "status": "ok",
  "service": "TRR Mararu NF-e Relay",
  "version": "0.1.0",
  "timestamp": "2026-08-12T00:00:00.000Z"
}
```

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
