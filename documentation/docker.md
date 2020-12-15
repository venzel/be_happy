# Docker

[README.md](../README.md)

## Docker : Redis

> **Documentacao (oficial)**: https://hub.docker.com/_/redis

```bash
# Inicializa um novo container redis
$ sudo docker run --name redis-behappy -p 6379:6379 -d -t --restart always redis:alpine
```

## Docker : Postgres

> **Documentacao (oficial)**: https://hub.docker.com/_/postgres

### Baixa a image do postgres

```bash
$ sudo docker pull postgres
```

```bash
# Inicializa um novo container postgress
$ sudo docker run --name postgres-behappy -e POSTGRES_PASSWORD=<PASSWORD> -d -p 127.0.0.1:6870:5432 --restart always postgres

# FLAGS
# -e: encripta
# -d: modo backgroud
# -p: mapeia a porta
# -P: gera um mapeamento aleatório de porta
# -v: seta um volume de persistÊncia
# --restart always: ao reiniciar o sistema, o serviço persiste

# Inicializar um container existente
$ sudo docker container start postgres-behappy

# Acessa a bash do container
$ sudo docker exec -it postgres-behappy /bin/bash

# Altera o usuário do postgres
$ su postgres

# Acessa o postgres no container
$ psql

# DENTRO DO PSQL:
# Cria o banco de dados behappy
postgres=$ CREATE DATABASE behappy;

# Cria o usuário
postgres=$ CREATE USER behappy WITH ENCRYPTED PASSWORD '<PASSWORD>';

# Dá permissões ao usuário
postgres=$ GRANT ALL PRIVILEGES ON DATABASE behappy TO behappy;

# Sai do postgres
postgres=$ \q

# FORA DO PSQL:
# Acessa o PSQL novamente
$ psql behappy

# Cria a função
postgres=$ CREATE extension IF NOT EXISTS "uuid-ossp";

# Executa
postgres=$ CREATE EXTENSION

# Testa a função
postgres=$ SELECT uuid_generate_v4();

# Sair do postgres
postgres=$ \q
```

## Docker : Mongo

> **Documentacal (oficial)**: https://hub.docker.com/_/mongo

### Baixar maquina virtual mongodb

```bash
$ sudo docker pull mongo
```

### Roda o container com nome mongodb, pegando a imagem mongo, fazendo comunicacao entre as portas 27017

```bash
$ sudo docker run --name mongo-behappy -p 27017:27017 -d --restart always mongo

  # FLAGS
  # -d: modo background
  # -p: mapeia uma porta
  # -P: mapeia para uma porta aleatória
  # -v: mapeia o volume para persistência
  # --restart always: ao reiniciar o sistema, o serviço persiste
```

## Comandos rápidos

```bash
# Lista as imagens
$ sudo docker images

# Lista os containers ativos
$ sudo docker container ls

# Lista os containers ativos e inativos
$ sudo docker container ls -a

# Inicializa um container
$ sudo docker container start <nome_container>

# Para um container
$ sudo docker container start <nome_container>

# Remove todos os containers parados
$ sudo docker container prune

# Remove um container
$ sudo docker container rm <nome_container>
```
