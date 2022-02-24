FROM node:12.22.1-alpine as builder

ARG DEPLOY_ENV=DEV

ENV DEPLOY_ENV=${DEPLOY_ENV}
ENV PORT=80
ENV PUBLIC_PATH=/

WORKDIR /app

COPY . .

RUN npm i -g cross-env --registry=https://registry.npmmirror.com/
RUN npm install --registry=https://registry.npmmirror.com/
# modify environment
RUN _DEPLOY_ENV=`echo ${DEPLOY_ENV} | tr [:lower:] [:upper:]`; sed -i "s#runtimes: \".*,#runtimes: \"$_DEPLOY_ENV\",#g" ./public/site.config.js
RUN cat ./public/site.config.js

RUN npm run build

FROM nginx:stable-alpine
EXPOSE $PORT

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf

