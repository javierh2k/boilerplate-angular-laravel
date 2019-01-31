#FROM php:7.2.2-fpm

#RUN apt-get update && apt-get install -y \
#   --no-install-recommends \
#   && docker-php-ext-install pdo_mysql


FROM php:7.2.2-fpm
RUN apt-get update -y && apt-get install --no-install-recommends \
    && docker-php-ext-install pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
#RUN docker-php-ext-install pdo mcrypt mbstring
#WORKDIR /app
#COPY . /app
#RUN composer install

#CMD php artisan serve --host=0.0.0.0 --port=8000
#EXPOSE 8000


#&& curl -sS https://getcomposer.org/installer | php \
#&& mv composer.phar /usr/local/bin/composer \