FROM node:alpine

COPY  package.json .

WORKDIR '/channel'

RUN npm install

COPY . .

EXPOSE 8210

CMD [ "npm","start" ]
