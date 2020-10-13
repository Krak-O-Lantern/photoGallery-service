FROM node:14.8.0

RUN mkdir -p src/app

COPY . src/app

WORKDIR src/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]