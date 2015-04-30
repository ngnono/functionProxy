/**
 * User: ngnono
 * Date: 15-3-13
 * Time: 下午3:46
 * To change this template use File | Settings | File Templates.
 */

'use strict';


var assert = require('assert'),
    stdCallback = require("../index");


describe('ngnono-callback test', function () {
    it('callback is function', function () {
        assert.equal(typeof stdCallback, typeof Function, 'is function');
    });


    it('callback not set params,run ok.', function () {
        assert.doesNotThrow(stdCallback);
    });

    var expect = 'ok';
    var fn1 = stdCallback(function (err, rst) {
        if (err) {
            assert.ifError(!err);
        }
        else {

            assert.equal(rst, expect, '期望值是 OK');
        }
    });

    it('callback set params,run ok.', function () {
        fn1(null, 'ok');
    });


    it('callback set error,run .', function () {

        fn1(new Error());
    });


    it('callback set 2 params,run .', function () {
        var e1 = 'abc', e2 = 123;

        var fn2 = stdCallback(function (err, p1, p2) {
            if (err) {
                assert.ifError(!err);
            }
            else {

                assert.equal(p1, e1, '期望值1 OK');

                assert.equal(p2, e2, '期望值2 OK');
            }
        });

        fn2(null, e1, e2);
    });


    it('callback set 3 params,run .', function () {
        var e1 = 'abc', e2 = 123, e3 = { a: e1, b: e2};


        var fn3 = stdCallback(function (err, p1, p2, p3) {

//            console.log({
//                'err': err,
//                'p1': p1,
//                'p2': p2,
//                'p3': p3
//            });

            if (err) {
                assert.ifError(!err);
            }
            else {


                assert.equal(p1, e1, '期望值1 OK');

                assert.equal(p2, e2, '期望值2 OK');

                assert.equal(p3, e3, '期望值3 OK');
            }
        });

        fn3(null, e1, e2, e3);


    });


    it('callback more params,run.', function () {
            var parmas = [null, 'abc', 'def', 123, 456, 689, {a: 'abc', b: 123, c: null, e: undefined}];
            var fn4 = stdCallback(function (err) {
                //console.log(err);
                if (err) {
                    assert.ifError(!err);
                }
                else {
                    for (var i = 0; i < parmas.length; i++) {
                        //console.log(arguments[i]);
                        assert.deepEqual(arguments[i], parmas[i], '期望值' + i.toString() + ' OK');
                    }


                }
            });

            fn4.apply(this, parmas);
        }
    );

    it('callback is not function', function () {
        assert.throws(function () {
            stdCallback({});
        }, Error);
    });
});


describe('ngnono-callback noon test',function(){

    it('callback not set params,run ok.', function () {
        stdCallback.noon();
    });


});
