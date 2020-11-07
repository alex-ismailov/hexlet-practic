i:
	npm install
dev:
	npx webpack-dev-server --open --config ./build/webpack.dev.conf.js

publish:
	npx webpack --config ./build/webpack.build.conf.js

lint:
	npx eslint ./src/

lint_fix:
	npx eslint --fix ./src/

test:
	npx jest --watchAll '19 Frontend Architecture/07-organization-of-interface-texts-grid'

logs:
	git log --oneline --decorate --graph --all
