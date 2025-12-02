FROM node:18
COPY package*.json ./
WORKDIR /app
RUN npm install
COPY . /usr/bin/
EXPOSE 3000
CMD ["node","server.js"]
