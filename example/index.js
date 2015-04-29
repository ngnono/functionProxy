/**
 * User: ngnono
 * Date: 15-4-29
 * Time: 下午10:44
 * To change this template use File | Settings | File Templates.
 */

'use strict';


var cp = require('../index');

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