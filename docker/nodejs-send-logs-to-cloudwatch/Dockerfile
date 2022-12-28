FROM node:10-slim

RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --production && npm cache clear --force

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
