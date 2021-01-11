include .env

.PHONY: setup

setup:
	sh ./docker/setup.sh && yarn typeorm migration:run && yarn build && yarn dev

.PHONY: dev

dev:
	yarn dev

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: run

run:
	yarn dev
