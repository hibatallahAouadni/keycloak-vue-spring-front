FROM nginx:alpine

## Remove confg nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY ci/nginx/default.conf /etc/nginx/conf.d/default.conf

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
