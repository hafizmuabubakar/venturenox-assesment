.PHONY:	start status stop restart

start:
	docker-compose up -d --build

status:
	docker ps

stop:
	docker-compose down

restart:
	sudo docker-compose down && sudo docker-compose up -d --build	
