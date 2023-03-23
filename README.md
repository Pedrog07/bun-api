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

## List of endpoints:

- **POST** `/signup`: Sign up a new user
- **POST** `/login`: Log in to get an access token
- **PATCH** `/change-password`: Change user password
- **POST** `/users`: Get all users
- **POST** `/users/:id`: Get a single user
- **PATCH** `/users/:id`: Update an user
- **DELETE** `/users/:id`: Delete an user

! **NOTE**: the above variables should be included within a `.env` file at the root of the project
