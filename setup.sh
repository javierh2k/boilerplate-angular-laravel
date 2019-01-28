#!/bin/bash
sudo chown -R $USER:$USER backend
cd backend
docker run --rm -v $(pwd):/app composer install
sudo chmod -R 777 bootstrap/cache/
sudo chmod -R 777 storage/
docker-compose up -d
#if you have errors request 404:
#   export COMPOSE_HTTP_TIMEOUT=3000  && sudo service docker restart
docker-compose exec backend php artisan key:generate
docker-compose exec backend php artisan config:cache
docker-compose exec backend php artisan migrate
yarn
cd ..
cd frontend
yarn
