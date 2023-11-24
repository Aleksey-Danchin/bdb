up:
	docker compose -f dev.yml --env-file .env.dev up --build

down:
	docker compose -f dev.yml down

prod_up:
	docker compose -f prod.yml --env-file .env.prod up --build -d

prod_down:
	docker compose -f prod.yml down
