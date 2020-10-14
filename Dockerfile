FROM nginx:alpine

RUN apk update && apk add nodejs

COPY docker-entrypoint.d /docker-entrypoint.d 
COPY nginx.page.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/