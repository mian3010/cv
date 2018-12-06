FROM alpine

RUN apk add --update nodejs nodejs-npm \
    && npm install npm@latest -g

RUN apk add rsync

RUN apk add autoconf automake g++ make zlib-dev libtool libpng-dev nasm libjpeg-turbo-dev

RUN apk add wget ca-certificates \
    && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub \
    && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk \
    && apk add glibc-2.25-r0.apk

VOLUME /src
WORKDIR /src
