This is a simple boilerplate application written with React (Next.Js) that aims to provide a simple way to start-up and deploy everyday use simple web pages.

## Getting Started

### Development

Pre-requisites: docker, docker compose, Node.js.

Add your own pages using the [app router](https://nextjs.org/docs/app) rules (if you want a certain page to load first by default, use url rewrite rules through nginx or cloudflare). If you want to redirect just the root, use as rewrite rule `/` -> `/your-page`. If you have multiple pages configured and you want to allow access to only one of them, redirect everything with `/*` -> `/your-page`, except requests at `_next` (static files).

Use standard commands - `npm run dev`, `npm run build` etc.

### Deployment

Pre-requisites: docker, docker-compose, make

The project uses a [`Makefile`](Makefile) which exposes the following commands:
1. `make build` - builds the docker image
2. `make run` - runs the application with docker compose

In order to automate this with jenkins, a [`Jenkinsfile`](Jenkinsfile) is provided. It can be used together with the custom Jenkins Build agent defined in the [self-hosting-cookbook](https://github.com/foxbits/self-hosting-cookbook) (or your own agent that has the prerequisites).
