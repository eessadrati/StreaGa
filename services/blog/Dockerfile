FROM node:alpine

COPY  package.json .

WORKDIR '/Streaga'

RUN npm install

COPY . .

CMD [ "npm","start" ]
