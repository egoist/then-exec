# then-exec [![NPM version](https://img.shields.io/npm/v/then-exec.svg)](https://npmjs.com/package/then-exec) [![NPM downloads](https://img.shields.io/npm/dm/then-exec.svg)](https://npmjs.com/package/then-exec) [![Build Status](https://img.shields.io/circleci/project/egoist/then-exec/master.svg)](https://circleci.com/gh/egoist/then-exec) 

> Promisify child_promise&#39;s exec method

## Install

```bash
$ npm install --save then-exec
```

## Usage

```js
const exec = require('then-exec')

exec('ls -A')
	.then((error, stdout, stderr) => {
		// handle by youself
	})
```

## License

MIT © [EGOIST](https://github.com/egoist)
