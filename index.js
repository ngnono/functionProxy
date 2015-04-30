'use strict';

/**
 * 执行方法
 * @param fn
 * @returns {Function}
 */
exports = module.exports = function (fn) {
    if (!fn) {
        fn = noon;
    }

    if (!isFunction(fn)) {
        throw new Error('fn is must function.');
    }

    return function (err) {

        switch (arguments.length) {
            case 0:
                fn();
                break;
            case 1:
                fn(err);
                break;
            case 2:
                fn(err, arguments[1]);
                break;
            case 3:
                fn(err, arguments[1], arguments[2]);
                break;
            // slower
            default:
                fn.apply(this, arguments);
        }
    };
};

/**
 *
 */
var noon = function () {
};

/**
 * is function
 * @param value func
 * @returns {boolean}
 */
var isFunction = function (value) {

    return typeof value === 'function' || false;
};


var _consoleCallbackFn = module.exports(function (err, rst) {
    if (err) {
        return console.error(err);
    } else {
        console.log(JSON.stringify(rst));
    }
});

exports.noon = noon;

exports.isFunction = isFunction;

exports.consoleCallbackFn = _consoleCallbackFn;
