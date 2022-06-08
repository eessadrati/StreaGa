FROM node:alpine

COPY  package.json .

WORKDIR '/Event'

RUN npm install

COPY . .

CMD [ "node","index.js" ]
