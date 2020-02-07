FROM node:erbium-alpine
RUN apk update && apk add --no-cache \
  bash \
  curl \
  git \
  vim \
  wget
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json .
RUN npm install

COPY . /src/app
EXPOSE 80

CMD [ "sh", "-c", "npm start" ]