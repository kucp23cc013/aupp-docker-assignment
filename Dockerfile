FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]

