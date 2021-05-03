# installs all dependencies
all: students.json node_modules/express/ node_modules/fs/ node_modules/body-parser/

students.json: students-original.json
	cp $< $@

node_modules/express/:
	npm install express

node_modules/fs/:
	npm install fs

node_modules/body-parser/:
	npm install body-parser

# cleans, then installs dependencies
clean-build: clean all

# removes all dependencies, and package-lock
clean:
	-rm -rf node_modules/ package-lock.json students.json
