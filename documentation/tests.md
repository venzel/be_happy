# Tests

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## JEST inicialização

```bash
$ yarn jest --init
```

## Arquivo necessário para o jest: jest.config.js

```javascript
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
    clearMocks: true,
    coverageProvider: 'v8',
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/**/*Test.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
}
```

## Código JEST apenas para testar

```javascript
describe('CategoryTest', () => {
    it('should come out 3', () => {
        expect(1 + 2).toBe(3)
    })
})
```

## Comando para rodar os testes

```bash
# Comando configurado nos scripts do arquivo: package.json
$ yarn test
```
