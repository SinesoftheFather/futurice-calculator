FROM node:16.13.2

LABEL version="1.0"
LABEL description="This is the base docker image for the calculator API."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
COPY tsconfig.json ./
COPY src ./src

RUN ls
RUN npm install

EXPOSE 3001

CMD npm run start:server