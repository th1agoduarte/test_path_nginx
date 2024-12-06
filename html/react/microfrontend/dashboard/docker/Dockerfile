# Etapa de build
FROM node:20 AS build
WORKDIR /app
COPY ../dashboard/ /app/
RUN npm install
RUN npm run build

# Etapa de runtime
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
