FROM node:18.16.0-alpine AS development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
