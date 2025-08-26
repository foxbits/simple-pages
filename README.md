This is a simple boilerplate application written with React (Next.Js) that aims to provide a simple way to start-up and deploy everyday use simple web pages.

## Getting Started

### Development

Pre-requisites: docker, docker compose, Node.js.

Use standard commands - `npm run dev`, `npm run build` etc.

### Deployment

Pre-requisites: docker, docker-compose, make

The project uses a [`Makefile`](Makefile) which exposes the following commands:
1. `make build` - builds the docker image
2. `make run` - runs the application with docker compose

In order to automate this with jenkins, a [`Jenkinsfile`](Jenkinsfile) is provided. It can be used together with the custom Jenkins Build agent defined in the [self-hosting-cookbook](https://github.com/foxbits/self-hosting-cookbook) (or your own agent that has the prerequisites).
