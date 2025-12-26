FROM node:18-alpine

RUN apt-get update && apt-get install -y build-essential python3

WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install

COPY . /app

CMD [ "npm", "start" ]