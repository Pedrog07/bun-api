# bun-api

## Requirements:

- Linux/macOS (windows currently not supported)
- NodeJS (to install BunJs via NPM)

## Pre-installation steps:

```bash
npm i -g bun
```

## Installation:

```bash
bun install
```

## To run development mode:

```bash
bun run dev
```

## To run production mode:

```bash
bun run prod
```

## To synchronize database manually via CLI:

```bash
bun run sync
```

## Environment variables:

- DB_HOST=
- DB_PORT=
- DB_USERNAME=
- DB_PASSWORD=
- DB_NAME=
- JWT_SECRET=
- JWT_LIFETIME=

! **NOTE**: the above variables should be included within a `.env` file at the root of the project
