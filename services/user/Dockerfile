FROM node:alpine

COPY  package.json .

WORKDIR '/user'

RUN npm install

COPY . .

EXPOSE 5003

CMD [ "npm","start" ]
