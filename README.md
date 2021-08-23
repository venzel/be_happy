# BeKid

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/venzel/bekid/blob/master/LICENSE)

> **BeKid** é uma aplicação para o mapeamento de emoções e combate ao bullying escolar.<br /> <a href="http://bekid.app">👉 bekid.app</a>

<p align="center"><img src="./media/logos/bekid-v1.png" width="280" /></p>

## Tecnologias

API Rest em **Typescript** e **NodeJS** com uma arquitetura **Feature by Package** (módulos e casos de usos).

<p align="left">
    <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="Typescript" title="Typescript" width="30" height="30" /> 
    <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="NodeJS" title="NodeJS" width="30" height="30" /> 
</p>

### Back end

-   Typescript
-   NodeJS / Express / Jest / TypeORM

### Persistência de dados

-   Postgres / MongoDB / Redis

### Outras informações

O projeto tem como gerencimento de pacotes o **Yarn** e o **Makefile** como automação de comandos, além disso, o Postgres, MongoDB e Redis são containers do **Docker**.

## Arquitetura

### Porque Feature by Package?

Feature by Package (FBP) é uma arquitetura que utiliza conceitos do **DDD (Domain Driven Design)**, sugerida por empresas como a **Rocketseat**, com o objetivo de tornar o código mais **flexível**, **escalável** e de **manutenção simples**.

### Vantagens da arquitetura

-   **MANUTENÇÃO**: Facilita o engajamento de muitas equipe e colaboradores em um projeto;
-   **ESCALÁVEL**: Facilita refatoramento do código monolítico para uma uma estrura de microserviços;
-   **SOLID**: Facilita a aplicação de todos os princípios do SOLID;
-   **GIT**: Melhora o gerenciamento dos commits, evitando conflitos e etc;
-   **TESTES**: Facilita o desenvolvimento de testes de unidade e integração.

## Diagrama

### Versão 1

<img src="./media/diagramas/diagrama-v1.png" />

### Influências

Este projeto tem como principais influências, os fundamentos da <a href="https://rocketseat.com.br">Rocketseat</a>, <a href="https://devsuperior.com.br">DevSuperior<a> e <a href="https://www.algaworks.com">AlgaWorks<a>.

## Autor

Edivam Enéas de Almeida Júnior

<a href="https://www.linkedin.com/in/venzel">https://www.linkedin.com/in/venzel</a>
