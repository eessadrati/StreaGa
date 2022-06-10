FROM node:alpine

COPY  package.json .

WORKDIR '/event'

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "npm","start" ]
