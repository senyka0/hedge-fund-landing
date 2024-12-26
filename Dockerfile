FROM node:18-alpine

WORKDIR /app

RUN npm install -g next
COPY package.json package-lock.json ./
RUN npm install --production=false

COPY . .

RUN npm run build

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start"]