FROM node:20
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN npm i -g ts-node typescript prisma
RUN npm install
USER root
CMD ts-node index.ts
