# Dockerization of Node.js Application


## Create you node application

## Create a file with no extension:
- **Dockerfile**
    - only name

## Write this: (Remove comments)
```Dockerfile
FROM ubuntu   # It is base Image

# Commands to install nodejs
RUN apt-get update # Update all packages
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - # install node.js version 18
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# COPY the source Code
COPY package.json package.json # source → destination
COPY package-lock.json package-lock.json 
COPY server.js server.js 

RUN npm install

# run this command at the start 
ENTRYPOINT ["node", "server.js"]
```
## Run these commands to build Image (Make sure Docker is runnig)
- ```docker build -t docker-node-test .```
    - **docker-node-test** : name of image
    - **.** &emsp;: path of Dockerfile

- If you made any change in the code and rebuild the Image 
- It uses prveous cache befor that like of code and with new/update part it rebuild
    - Example if you update **server.js**
    - it will use cache part of befor line:
        - ```COPY server.js server.js```

## Run these in CMD:
- ```docker run -it -p 8000:8000 docker-node-test```
- STOP manully from docker-desktop
- if add env of PORT=4000
    - ```docker run -it -p 8000:4000 -e PORT=4000 docker-node-test```
- Check on:
    - [http://localhost:8000/](http://localhost:8000/)

## Check the files inside the container
- ```docker exec -it c4eecb42 bash```
    - **c4eecb42** : first few char of container id
    - Make sure container is running
