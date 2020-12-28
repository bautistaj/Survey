FROM node:12.18.2-alpine

COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 4200

CMD ["npm", "run", "start:dev"]
