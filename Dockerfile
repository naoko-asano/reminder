FROM node:18.17.1

WORKDIR /frontend
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install
