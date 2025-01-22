FROM node:18
WORKDIR /app

# Copy your .npmrc to force the public registry
COPY .npmrc /app/.npmrc

COPY package.json ./
RUN npm install

COPY server.js ./

CMD ["npm", "start"]
