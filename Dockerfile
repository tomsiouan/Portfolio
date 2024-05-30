# Author: Tom Siouan

# Pull the base image
FROM node:20.14.0-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package.json && package-lock.json && yarn.lock
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files
COPY . .

# build App
RUN yarn build && yarn generate

# Nginx state for serving content
FROM nginx:stable as production-stage

# Remove the default nginx conf
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d

# Copy static files from build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
