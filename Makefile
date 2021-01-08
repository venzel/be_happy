include .env

.PHONY: setup

setup:
	sh ./scripts/create.sh

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f