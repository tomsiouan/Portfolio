FROM node:20.2.0

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
