# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Update package lists and install Python
RUN apt-get update && \
    apt-get install -y python3 python3-pip

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port your app will listen on
EXPOSE 3000

# Command to run your application
CMD ["sh", "-c", "npm run start -p 3000 & npm run server"]

