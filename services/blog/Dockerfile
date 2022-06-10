FROM node:alpine

COPY  package.json .

WORKDIR '/blog'

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm","start" ]
