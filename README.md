## Downloading and Installing Emscripten Toolchain

* 	`git clone https://github.com/juj/emsdk.git`
	`cd emsdk`
	`./emsdk update`

## download one by one and move it into folder: ./emsdk/zips , notes file names
* https://codeload.github.com/kripken/emscripten/tar.gz/1.38.20
* https://s3.amazonaws.com/mozilla-games/emscripten/packages/node-v8.9.1-darwin-x64.tar.gz
* https://s3.amazonaws.com/mozilla-games/emscripten/packages/llvm/tag/osx_64bit/emscripten-llvm-e1.38.20.tar.gz

rename:
* 1.38.20.tar.gz
* node-v8.9.1-darwin-x64.tar.gz
* emscripten-llvm-e1.38.20.tar.gz

* Second lets install the latest, this step takes quite a long time:
`./emsdk install latest`

* Third and last, lets activate the latest:
`./emsdk activate latest`

* Verifying Whether the Emscripten Toolchain was Properly Installed
`emcc --version`


## compile and out put js files
* `emcc utils.c -s WASM=1 -o utils.js -O`
	* -s Specify settings which gets passed down to the emscripten compiler. Here we specify we want to compile to wasm. The default is asm. This will produce utils.wasm.

	* -o Specify the filename for the glue code. This will produce utils.js.

	* -O3 The first character is the upper case letter 'O' not zero! Sets the optimisation level for your wasm and js files. You can check the various optimisation levels here.

## load utils.js in index.html

* `<script src="utils.js"></script>`

## call c function in js file
* `_generateRandom()`

## start http server at local with "http-server"
* install `npm install http-server -g`
* start service `http-server ./ -p 8081 -c-1`
