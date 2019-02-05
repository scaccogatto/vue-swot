build:
	npm install
	npm run build
	cp docs/CNAME CNAME
	rm -rf docs
	mkdir docs
	mv dist/* docs/
	mv CNAME docs/CNAME

swot:
	cp src/views/Base.vue src/views/$(NAME).vue
	cp -R src/views/Base src/views/$(NAME)