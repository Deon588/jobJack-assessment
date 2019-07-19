#STAGE 1
FROM node:10-alpine as builder
COPY . /home/node/app
WORKDIR /home/node/app
RUN npm ci
RUN npm run prestart:prod

#STAGE 2
FROM node:10-alpine
WORKDIR /usr/src/service
COPY --from=builder /home/node/app/node_modules node_modules
COPY --from=builder /home/node/app/dist dist
COPY --from=builder /home/node/app/ssl dist/ssl
WORKDIR /usr/src/service/dist
USER node
EXPOSE 3000

CMD ["node", "./main.js"]