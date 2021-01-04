# Insominia

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## Instalacao

```bash
# Adiciona oo list
$ echo "deb https://dl.bintray.com/getinsomnia/Insomnia /" \
 | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Adiciona chave publica
$ wget --quiet -O - https://insomnia.rest/keys/debian-public.key.asc \
 | sudo apt-key add -

# Atualiza os repositorios e instala o insomnia
$ sudo apt-get update && sudo apt-get install insomnia
```
