# 1. Start from the official Node 18 image on DockerHub
FROM node:18

# 2. Create a directory inside the container for your code
WORKDIR /app

# 3. Copy over your .npmrc if you have one (to force the public registry)
COPY .npmrc ./

# 4. Copy the package files
COPY package.json package-lock.json ./

# 5. Install dependencies
RUN npm install

# 6. Copy the rest of your code (like server.js) into the container
COPY . .

# 7. The default command to run when the container starts
CMD ["npm", "start"]
