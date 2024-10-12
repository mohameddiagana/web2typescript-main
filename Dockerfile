FROM nginx:alpine

WORKDIR /usr/src/application

COPY nginx.conf /etc/nginx/nginx.conf

COPY /artifact/ /usr/share/nginx/html

# RUN chown -R node /usr/src/application


EXPOSE 80
