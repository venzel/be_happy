# Outros

## Documentacao

-   https://hashinteractive.com/blog/docker-compose-up-with-postgres-quick-tips/
-   https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3
-   https://onexlab-io.medium.com/docker-compose-mongodb-prod-dev-test-environment-eb1a75675f93
-   https://renatogroffe.medium.com/docker-dica-r%C3%A1pida-criando-uma-inst%C3%A2ncia-do-redis-via-docker-compose-961c7eca5255

### Executa

```bash
# Permissao de usuario para rodar o docker compose
$ sudo chown $USER /var/run/docker.sock

# Atencao: lembrar de derrubar o container
# Gera o arquivo postgres.conf com varias configuracoes
$ docker run -i --rm postgres cat /usr/share/postgresql/postgresql.conf.sample > postgres.conf
```

### Conectar em um container e depois no docker

```bash
# Conectar no container
$ docker exec -it <container-name> bash

# Etrar no mongo
$ mongo -u <user_name> -p <password> --authenticationDatabase <database_name>
### OU ###
$ mongo -u <user_name> --authenticationDatabase <database_name>
```

### Conectar no mongodb por um client

```
mongodb://<user_name>:<password>@<host>:<port>/<database_name>
```

## Git

### Remover trackeamento de um ou todos (.) os arquivos

#### Documentacao: https://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/

```bash
$ git rm -r --cached .
```
