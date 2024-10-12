# FROM node:20.12.2 AS builder

# WORKDIR /webappwe

# COPY package*.json ./

# COPY . ./

# RUN npm cache clean --force && npm install --force && npm run build
#
# FROM nginx:stable-alpine
#
# USER node

# COPY nginx.conf /etc/nginx/nginx.conf

# COPY  --from=builder /webappwe/dist/web2typescript/browser/ /usr/share/nginx/html

# EXPOSE 80

# Run the application.
# ENTRYPOINT ["ng", "server","--host","0.0.0.0", "--disable-host-checked"]
FROM node:20.12.2 AS builder

WORKDIR /usr/src/webappwe

COPY . ./

#COPY --from=builder /webappwe/dist/web2-typescript/browser/ /usr/share/nginx/html
RUN chown -R node /usr/src/webappwe

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

CMD ["ng", "serve"]

# Run the application.
#ENTRYPOINT ["ng", "server","--host","0.0.0.0", "--disable-host-checked"]

