FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# remove default nginx static assets
RUN rm -rf ./*
# copy build
COPY /dist .
