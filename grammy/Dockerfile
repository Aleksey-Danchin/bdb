FROM node:20
WORKDIR /app
ENV NODE_ENV=production
RUN npm i -g ts-node typescript prisma
COPY . .
RUN npm install
USER root
CMD ts-node index.ts
