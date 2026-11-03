# **Docker**

## [Download & install Docker](Download_InstallDocker.md)
## [Move to Another Drive](MoveDockerToAnotherDrive.md)

- Docker CLI
    - Communicate using commands
- Docker Desktop
    - Visualize all things
- **Docker daemon**
    - It is the core background service that does all the heavy lifting in Docker. It runs continuously on your host operating system and is responsible for managing the entire lifecycle of your containers, images, networks, and storage volumes
## [Images & Containers](Images_Containers.md)
## [Docker Commands](DockerCommands.md)
## Port Mapping
- ```docker exec -it -p 6000:8000 <containerName>```
- ```-p 6000:8000```
    - 6000 is our machine port
    - 8000 is the container's port

## Environment Variables
- ```docker exec -it -p 80:80 -e key=value -e key=value <containerName>```
- ```-e key:value```
    - key name of vaiable

## [Dockerization of Node.js Application](Dockerization_Node.md)

## For publish
- Go to: [hub.docker.com](https://hub.docker.com/)
- Create a repository
- Create a new Image with repo name like:
    - ```docker build -t codelikenaveen/desktop-node .```
- Run the command in cmd(Make sure your login locally):
    - ```docker push codelikenaveen/desktop-node```
