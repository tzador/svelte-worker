dev:
	http-serve -c-1 -p 9992 dist

build:
	@rm -rf dist
	@npm run build
	@cp src/worker.js dist
	@cp src/register.js dist
	@rm dist/*.cjs
	@cp -r node_modules/svelte dist
	@cp -r examples dist

deploy:
	@echo "todo"
