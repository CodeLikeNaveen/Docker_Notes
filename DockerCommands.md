# Docker Commands

## Basic
- ```docker container ls```
    - list all active containers
- ```docker container ls -a```
    - list all containers
- ```docker start <containerName>```
    - start the container
- ```docker stop <containerName>```
    - stop the container
- ```docker run```
    - spin/create new container


## Inside Docker commands check
- ```docker exec <containerName> ls```
    - list all commands that we can execute inside the container
- ```docker exec -it <containerName> bash```
    - its like connect your pc'cmd to the container's cmd
    - it means interactive
- **Ctrl + D**
    - for exit the container's cmd