# Typescript

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## Inicializa o projeto typescript

```bash
$ yarn tsc --init
```

## Arquivo de configuração do typescript: tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "removeComments": true,
        "strict": true,
        "strictPropertyInitialization": false,
        "baseUrl": "./src",
        "paths": {
            "@modules/*": ["modules/*"],
            "@configs/*": ["configs/*"],
            "@shared/*": ["shared/*"]
        },
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

## Comando para o script de criação do build

```bash
# Comando configurado nos scripts do arquivo: package.json
$ yarn tsc
```

## Comando rodar o script de servidor de desenvolvimento

```bash
# Comando configurado nos scripts do arquivo: package.json
$ yarn dev
```

## Comando rodar o script de servidor de produção

```bash
# Comando configurado nos scripts do arquivo: package.json
$ yarn pro
```
