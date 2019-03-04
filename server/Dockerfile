FROM alpine:latest

RUN apk update && apk add --update nodejs nodejs-npm && rm -rf /var/cache/apk/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["npm", "start"]