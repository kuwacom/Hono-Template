# Hono RESTful Template

Express テンプレートの構成をベースに Hono で組み直した API テンプレート  
Node.js 上でのローカル実行と、Cloudflare Workers へのデプロイの両方をサポートしています。

## 特徴

- TypeScript ベース
- `src/app.ts` にアプリ本体を集約
- `src/routes/v1/...` に API を分割
- `zod` と `@hono/zod-validator` による入力バリデーション
- `tslog` Node用 ログ
- `users` API の実装例を同梱
- Node.js 実行用エントリポイントと Workers 用エントリポイントを分離

## セットアップ

```bash
npm install
```

Node.js ローカル実行用に `.env.example` をコピーして `.env` を作成してください。
`LOG_LEVEL` には `debug` / `info` / `warn` / `error` などを指定できます。

## Node.js で起動

開発:

```bash
npm run dev
```

本番ビルド:

```bash
npm run build
npm run start
```

## Cloudflare Workers で起動/デプロイ

ローカル開発:

```bash
npm run dev:worker
```

デプロイ:

```bash
npm run deploy:worker
```

`wrangler.toml` の `vars` を必要に応じて調整してください。

## API 例

- `GET /v1/test`
- `GET /v1/users`
- `GET /v1/users/:userId`
- `POST /v1/users`

`users` API は `src/routes/v1/users/` と `src/routes/v1/users/[userId]/` へ分割しています。
スキーマは `src/schemas/user.ts` に集約し、`z.infer` で型も再利用できる構成です。

## プロジェクトディレクトリ構成

```text
src/
  app.ts
  node.ts
  worker.ts
  configs/
  middleware/
  routes/
    v1/
      test/
      users/
        [userId]/
  schemas/
  services/
  types/
  utils/
```
