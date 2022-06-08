FROM node:alpine

COPY  package.json .

WORKDIR '/channel'

RUN npm install

COPY . .

CMD [ "node","app.js" ]
