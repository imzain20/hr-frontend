# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Increase npm registry timeout
RUN npm config set fetch-retry-maxtimeout 60000 \
    && npm config set fetch-retry-mintimeout 10000

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm i --force --progress=false

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port that the app will listen on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
