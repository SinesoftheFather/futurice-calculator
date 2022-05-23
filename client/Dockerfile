FROM node:16.13.2

LABEL version="1.0"
LABEL description="This is the base docker image for calculator frontend."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
COPY src ./src
COPY public ./public

RUN npm install

EXPOSE 3000

CMD npm run start:client