## Prerequisites

Ensure the following tools are installed:

- docker
- node 18 (LTS) & npm

Ensure the following ports are not in use:

- 4200
- 5432
- 9000

## How to run locally

Run the following command at the root of the project: `npm start`.

The command will:

- install dependencies for the web app & the API,
- start the PostgreSQL docker container (using docker compose),
- run the web app & API in parallel.

Alternatively, you can run `npm run start:api` & `npm run start:web` from 2 terminal instances.

## API

The API can be manually tested using the [api.http](./api.http) file & the [REST client VSCode extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

The application, called Gabbles, is a (very) lean clone of a famous social media platform.

On Gabbles, there is only one public thread where everyone can gab (post messages).
The registration is simple: just chose a username, to hell with account ownership.

### 1. Search functionality

The following search operators are supported:

- `u:` include author with the username, e.g. `u:john`
- `-:` exclude term
- `!:` only include exact term, e.g. `!:assess` should match `assess` but not `assessment`

Search operators can be combined in any order: `!u:john.doe` or `!-:assess`
