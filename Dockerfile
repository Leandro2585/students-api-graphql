FROM node:16
WORKDIR /usr/src/students-api-graphql
COPY ./package.json
RUN yarn --onlyprod