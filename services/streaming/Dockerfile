FROM node:alpine

COPY  package.json .

WORKDIR '/streaming'

RUN npm install

COPY . .

EXPOSE 1111

CMD [ "npm","start" ]
