FROM node as build-stage

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . ./
RUN npm run build:prod

FROM nginx
COPY --from=build-stage /usr/src/app/client/dist/codeish/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
