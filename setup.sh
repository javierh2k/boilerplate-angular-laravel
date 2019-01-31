#!/bin/bash
sudo chown -R $USER:$USER backend
cd backend
docker run --rm -v $(pwd):/app composer install
