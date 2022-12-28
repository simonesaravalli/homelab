# Simple infrastructure with NGINX as reverse proxy for static web content and websocket service

This projects is made of 3 Docker containers.

The first container is an NGINX image that acts as a reverse proxy. It listens on ports 80 and 81. It-s called reverse-proxy

On port 80 it serves the default index.html

On port 81 are served different contents depending on the path used. With /web-frontend NGINX acts as a reverse
proxy against another NGINX Docker instance. With /ws-backend NGINX acts as a reverse proxy against a NodeJS app
with a simple websocket application.

The second Docker container is another NGINX server, listening on port 80 that serves a custom index.grml page
saved in /usr/share/nginx/html/web-frontend/. it's called web-frontend.

The third Docker container is a NodeJS app with a websocket service listening on port 8010 that capture any string
received from a client end echoes it as it is back to the client. It's called ws-backend.

## Instructions

1. Download the code from this repository
2. Enter in each subfolder (reverse-proxy, web-frontend, ws-backend) and run the script ./run.sh. It will build
   the specific Docker image
3. Run docker-compose to create the stack

```bash
docker-compose up -d
```

4. Access to http://localhost:8080 to see the static web content served by the reverse-proxy NGINX
5: Access to http://localhost:8081/web-frontend to see the custom static web page served by the web-frontend NGINX
6: Send a websocket message (use for example the Web Socket Client plugin for Chrome) to ws://localhost:8081/ws-backend
   and wait for the same message echoed back
