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