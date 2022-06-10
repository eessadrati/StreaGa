FROM node:alpine

COPY package.json .

WORKDIR '/client'

RUN npm install 

RUN npm install react-scripts@5.0.0 -g 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]