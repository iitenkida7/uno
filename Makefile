
npm-install:
	docker-compose run --rm node npm install


npm-run-dev:
	docker-compose run --rm --service-ports node npm run dev
