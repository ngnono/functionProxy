#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> callback wrapper


## Install

```sh
$ npm install --save ngnono-function-proxy
```


## Usage

```js
var consoleCallbackFn = cp(function (err, rst) {
    if (err) {
        return console.error(err)
    } else {
        console.log(JSON.stringify(rst));
    }

});

consoleCallbackFn(new Error('is error'));

//"ok"

consoleCallbackFn(null, 'ok');

//[Error: is error]

consoleCallbackFn(null, { status: 'ok'}, 'status', 'ok');

//{"status":"ok"}

```


## License

MIT © [lianghongpeng](github.com/ngnono)


[npm-url]: https://npmjs.org/package/ngnono-function-proxy
[npm-image]: https://badge.fury.io/js/ngnono-function-proxy.svg
[travis-url]: https://travis-ci.org/ngnono/functionProxy
[travis-image]: https://travis-ci.org/ngnono/functionProxy.svg?branch=master
[daviddm-url]: https://david-dm.org/ngnono/ngnono-function-proxy.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ngnono/ngnono-function-proxy
