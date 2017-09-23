FROM node:8.3.0

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

COPY src .
EXPOSE 4000

CMD ["node", "index.js"]