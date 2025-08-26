.PHONY: build run

build:
	docker build -t foxbits/simple-pages .

run:
	docker compose down
	docker compose up -d
