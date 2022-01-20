FROM node:10

WORKDIR /usr/src/app/clockin_frontend

COPY package-*.json ./

RUN npm install

EXPOSE 8081

CMD ["npm", "run", "serve"]