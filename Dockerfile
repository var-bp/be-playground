FROM node:14.17.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --ignore-scripts
# If you are building your code for production
# RUN npm ci --only=production

COPY . .
