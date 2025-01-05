# Build Stage
FROM node:20.11.0-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
ENV GENERATE_SOURCEMAP=false
RUN npm run build

# Production Stage
FROM nginx:1.26.2-alpine-slim
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx/
COPY --from=builder /app/dist /usr/share/nginx/html/
EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
RUN chmod +x env.sh
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
