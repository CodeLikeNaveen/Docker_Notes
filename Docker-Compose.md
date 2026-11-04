# Docker Compose
- When you have run multiple container

## Instructions
- create a file: **docker-compose.yaml**
- write down the code
```docker
#version of docker compose
version: '5.6'

# containers that you want to run
service:

  postgres:             # name of service (name as your wish)
    image: postgres     # pull hub.docker.com 
    port:               # ports to expose
      - '5432:5432'
    environment:        # passing env variables
      POSTGRES_USER: postgres
      POSTGRES_DB: review
      POSTGRES_PASSWORD: password

  redis:                # another service
    image: redis
    port:
      - '6379:6379'
```

- Run the commands in cmd:
```bash
docker compose up
```
- to run in background
```bash
docker compose up
```
- it will run all the given above containers
- if permission issue use: 
```bash
sudo docker compose up
```
- To remove all of them
```bash
docker compose down
```

