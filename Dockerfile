FROM node:16.6.2-alpine3.11 as build
WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.21.1-alpine as final
WORKDIR /user/share/nginx/html
COPY ./build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


