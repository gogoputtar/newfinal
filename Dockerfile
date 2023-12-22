FROM node:10 AS builder

WORKDIR /app

COPY . .

RUN yarn build

FROM nginx:1.25.3-alpine3.18

WORKDIR usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]