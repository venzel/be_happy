# Commitizen

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

> **Documentacao:** https://github.com/commitizen/cz-cli

## Instala de forma global o commitizen

```bash
# Observação: não instalar com yarn, mas sim com o npm
$ npm install commitizen -g
```

## Pega o pacote do commitizen

```bash
$ commitizen init cz-conventional-changelog --yarn --dev --exact
```

## Para executar o commitizen, apos ter adicionado os arquivos:

```
$ git cz
```

## Atalho para o commitizenp, para executar: yarn commit

```
"scripts": {
    "c": "cz"
}
```

## Comando rodar o script de commitizen

```bash
# Comando configurado nos scripts do arquivo: package.json
$ yarn c
```
