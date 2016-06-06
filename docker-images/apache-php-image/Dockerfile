FROM php:5.6-apache

MAINTAINER sebastien richoz <sebastien.richoz1@heig-vd.ch>

RUN apt-get update && \apt-get install -y vim

# Copy content folder into specific path in apache
COPY content/ /var/www/html/
