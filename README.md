#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> callback wrapper


## Install

```sh
$ npm install --save ngnono-functionproxy
```


## Usage

```js
var cp = require('ngnono-functionproxy');

var consoleCallbackFn = cp(function (err, rst) {
    if (err) {
        return console.error(err)
    } else {

        if (arguments.length === 2) {
            console.log(JSON.stringify(rst));
        } else {
            console.log(JSON.stringify(arguments));
        }
    }

});

consoleCallbackFn(new Error('is error'));
//[Error: is error]


consoleCallbackFn(null, 'ok');
//"ok"


consoleCallbackFn(null, { status: 'ok'}, 'status', 'ok');

//{"0":null,"1":{"status":"ok"},"2":"status","3":"ok"}

```


## License

MIT © [lianghongpeng](github.com/ngnono)


[npm-url]: https://npmjs.org/package/ngnono-functionproxy
[npm-image]: https://badge.fury.io/js/ngnono-functionproxy.svg
[travis-url]: https://travis-ci.org/ngnono/functionProxy
[travis-image]: https://travis-ci.org/ngnono/functionProxy.svg?branch=master
[daviddm-url]: https://david-dm.org/ngnono/functionproxy.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ngnono/functionproxy
