<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Prueba de domina, serivicio backend

Este servicio esta hecho en NestJs, el cual es un framework de NodeJs, que nos brinda unos patrones y arquitectura ya lista para trabajar de la mejor forma en Node, El proyecto esta hecho todo en TypeScript, minimizando los errores de ejecución y tipando todos los elementos.

Adicional a este se iba a realizar un proyecto limpio, en express, pero debido al tiempo no se pudo agregar

## Funcionalidades

El proyecto esta realizado sobre la ultima version de nestJs, trabajando con una DB NOSQL en MongoDB
Se realiza modulo de autenticación con Jwt y Passport
Se crea documentacion de las Apis con Swagger
Se realiza validacion de variables de entorno(.env)
Se realiza validacion de request mediante class-validator
Se realiza proteccion de rutas protegidas (Jwt-Guard)
El codigo se separo de forma entendible y de facil lectura
Para el trabajo de MongoBd, se uso Mongoose

Para ver la documentacion de Swagger de las rutas se puede dirigir a la siguiente url
https://domina-test.onrender.com/docs
o localmente a
http://localhost:3001/docs
En esta pagina podra visualizar todos los endpoints que pueden ser consumidos y la forma de hacerlo

Se realizan Schemas de MongoDB, con las dos tablas resultantes

### Usuario (table)

- name
- username
- email
- phone
- password

### Todo (table)

- user_id
- todo
- isCompleted

Estas son las dos tablas resultantes para el proceso.

## Installation

```bash
$ npm install
```

## Running the app

Hay dos formas de iniciar la aplicación, la primera es con docker, la cual ya esta completamente preparada y lista, para montar el servicio de Backend y el servicio de MongoDB, mediante el comando proporcinado en el MakeFile

```bash
$ make dev
# or
docker-compose up -d --build
```

En caso de no querer montar mediante docker, debe tener una instancia de Mongo lista para conectarse y ejecutar el siguiente comando

```bash
# development
$ npm run start
```

# Enviroment

Se tiene preparado un .env listo para funcionar, solo es necesario copiar el archivo .env.example y guardarlo como .env para su funcionamiento

# TODO:

Hay varias novedades que se debeb mejorar ya que no pude hacerlas en el tiempo de la prueba

- Proteger todas las rutas, de forma global y crear un decorador para las rutas publicas, esto con el fin de no repertir el mismo codigo

## License

Nest is [MIT licensed](LICENSE).
