FROM docker.io/node:13 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM docker.io/nginx:latest as runner
COPY --from=builder /app/dist/. /usr/share/nginx/html/
