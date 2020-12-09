# Configurar typescript

## Inicia o projeto

$ yarn init -y

## Adiciona os modulos de producao

$ yarn add express
$ yarn add module-alias

## Adiciona de desenvolvimento

$ yarn add nodemon -D
$ yarn add typescript -D
$ yarn add tsconfig-paths -D
$ yarn add ts-node-dev -D
$ yarn add npm-run-all -D

## Adiciona os types

$ yarn add @types/node -D
$ yarn add @types/express -D
$ yarn add @types/module-alias -D

## Inicializa o projeto

$ yarn tsc --init

## Substitui o codigo do tsconfig.json

```JSON
{
    "compilerOptions": {
        "allowJs": true,
        "target": "es2019",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "removeComments": true,
        "noEmitOnError": true,
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
    },
    "include": ["./src"],
    "exclude": ["node_modules", "dist"]
}
'''
```

## Configura os scripts basicos

```JSON
"scripts": {
    "build": "yarn tsc",
    "dev": "npm-run-all -p dev:*",
    "dev:server": "ts-node-dev --trace-deprecation -r tsconfig-paths/register --transpile-only --ignore-watch node_modules ./src/shared/infra/http/server.ts",
    "dev:queue": "ts-node-dev -p --trace-deprecation -r tsconfig-paths/register --transpile-only --ignore-watch node_modules ./src/shared/infra/http/queue.ts",
    "pro": "npm-run-all -p pro:*",
    "pro:server": "nodemon --experimental-modules ./dist/shared/infra/http/server.js",
    "pro:queue": "nodemon -p --experimental-modules ./dist/shared/infra/http/queue.js",
    "c": "cz"
}
```

## Inicializa o commitizen

$ commitizen init cz-conventional-changelog --yarn --dev --exact
