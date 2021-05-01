# installs all dependencies
all: node_modules/express/ node_modules/fs/

node_modules/express/:
	npm install express

node_modules/fs/:
	npm install fs

# cleans, then installs dependencies
clean-build: clean all

# removes all dependencies, and package-lock
clean:
	-rm -rf node_modules/ package-lock.json
