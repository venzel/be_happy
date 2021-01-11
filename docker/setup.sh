#!/usr/bin/env bash

cd .. & make down

if [ ! -f ./docker/postgres/configs/postgres.conf ]; then
    docker run -i --rm postgres cat /usr/share/postgresql/postgresql.conf.sample > ./docker/postgres/configs/postgres.conf
fi

if [ -d ./docker/mongodb/data ]; then
    sudo rm -rf ./docker/mongodb/data
fi

if [ -d docker/postgres/data ]; then
    rm -rf ./docker/postgres/data
fi

make up

exit 0
