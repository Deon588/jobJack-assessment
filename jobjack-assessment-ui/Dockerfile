#stage 1
FROM node:10-alpine as node
COPY package*.json ./
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm run ng build -- --prod --output-path=dist



#stage 2 setup
FROM nginx:1.14.1-alpine
## Copy default nginx config
COPY nginx.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=node /ng-app/dist /usr/share/nginx/html
COPY --from=node /ng-app/ssl /usr/share/nginx/ssl
CMD ["nginx", "-g", "daemon off;"]

