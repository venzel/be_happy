## Dependências

### Dependências de desenvolvimento

```bash
$ yarn add nodemon typescript tsconfig-paths @types/module-alias @types/node @types/express ts-node-dev npm-run-all eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier @types/uuid @types/bcryptjs @types/jsonwebtoken @types/cors @types/helmet @types/mongodb @types/morgan @types/nodemailer @types/bull @types/ioredis @types/multer jest @types/jest ts-jest supertest @types/supertest @types/module-alias -D
```

### Dependências de produção

```bash
$ yarn add express express-async-errors dotenv helmet morgan youch cowsay typeorm pg mongodb reflect-metadata bcryptjs date-fns jsonwebtoken cors class-transformer module-alias
```

## Docker

### Docker : Redis

```bash
# To initialize container redis
$ sudo docker run --name redis-behappy -p 6379:6379 -d -t --restart always redis:alpine
```

### Docker : Postgres

```bash
# To initialize new container
$ sudo docker run --name postgres-behappy -e POSTGRES_PASSWORD=penadepato -d -p 127.0.0.1:6870:5432 --restart always postgres

# FLAGS
# -e: encrypted
# -d: background execution mode
# -p: port map
# -P: map port aleatory
# -v: persistence volume
# --restart always: reboot on system, persist service

# To start container already started
$ sudo docker container start postgres-behappy

# Acess bash container postgresbehappy
$ docker exec -it postgres-behappy /bin/bash

# Change user postgres
$ su postgres

# Access postgres
$ psql

# IN PSQL
# Create database behappy
postgres=$ CREATE DATABASE behappy;

# Create user venzel
postgres=$ CREATE USER venzel WITH ENCRYPTED PASSWORD 'penadepato';

# Permitions for venzel in database behappy
postgres=$ GRANT ALL PRIVILEGES ON DATABASE behappy TO venzel;

# Exist postgress
postgres=$ \q

# OUT PSQL
# Access psql again
$ psql behappy

# Create function
postgres=$ CREATE extension IF NOT EXISTS "uuid-ossp";

# Execute, obs, without two points
postgres=$ CREATE EXTENSION

# Teste function
postgres=$ SELECT uuid_generate_v4();

# Exit postgress
postgres=$ \q
```
