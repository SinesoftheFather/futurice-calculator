
install: ## install everything
	cd ./server && npm install && cd .. && cd ./client && npm install

rebuild: ## rebuild the local image
	docker-compose build

start_docker: ## start docker
	docker-compose down
	docker-compose up

down_docker: ## shut down docker
	docker-compose down
