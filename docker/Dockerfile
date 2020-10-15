FROM nginx:alpine

RUN apk update && apk add nodejs

ENV NODE_ENV production

COPY docker/docker-entrypoint.d /docker-entrypoint.d 
COPY docker/nginx.page.conf /etc/nginx/conf.d/default.conf
COPY frontend/dist/ /usr/share/nginx/html/
COPY backend/dist/ /backend
COPY backend/node_modules /backend/node_modules