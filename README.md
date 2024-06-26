# Overview

## Table of contents

- [Overview](#overview)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installing](#installing)
  - [Running](#running)
    - [App](#app)
    - [Server](#server)
    - [General commands](#general-commands)

## Getting Started

Choose a folder to save the project and clone the repository:

## Requirements

Ensure you have the following resources to run properly the app:

- [Node LTS](https://nodejs.org/en/)
- [Mongo](https://docs.mongodb.com/manual/installation/)
- [A browser](https://www.google.com/intl/en/chrome/)

## Installing

Access the project folder and ensure that you are in the root. Then in your terminal, run:

```sh
yarn startup
```

This script will lead you to a serie of process. First, all dependencies are installed. Then, all necessary `.env` files are created to save your time. Finally, the `GraphQL Schema` is updated and the relay queries/mutations are generated.

## Running

You can run some commands for the app or the server inside the root directory:

### App

- To install the app on an Android device, run `yarn android`
- To install the app on an iOS device, run `yarn ios`
- To start the app metro bundler, run `yarn app`
- To compile relay queries and mutations, run `yarn relay`

### Server

- To update the GraphQL schema, run `yarn update-schema`
- To start the development server, run `yarn graphql`
- To seed the database, run `yarn db:seed`
- To test the server, run `yarn server:test`

### General commands

|       command       | function                                            |
| :-----------------: | :-------------------------------------------------- |
|       android       | install app on android                              |
|      app:start      | start metro bundler server                          |
|       app:pod       | install pod for ios                                 |
|       db:seed       | seed database                                       |
|     delete:all      | run all delete commands                             |
|    delete:build     | delete build dir                                    |
|  delete:generated   | delete all relay generated files                    |
| delete:metro-cache  | delete metro bundler cache                          |
| delete:node_modules | delete node_modules                                 |
|  delete:yarn.lock   | delete yarn.lock                                    |
|         ios         | install app on ios                                  |
|        lint         | run eslint check                                    |
|      lint:fix       | run eslint check and fix lint errors                |
|      prettier       | run prettier                                        |
|        relay        | compile relay queries and mutations                 |
|    server:start     | run development graphql server                      |
|    server:build     | build server                                        |
|     server:test     | test server                                         |
|       startup       | install deps and, copy .env and update schema/relay |
|        test         | test all packages that have tests                   |
|       update        | update schema/relay                                 |
|    update-schema    | update GraphQL schema                               |
