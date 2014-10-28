'use strict';

var npmVersions = require('../lib/npm-vers.js');
var npm = require('npm');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.npmVers = {
    setUp: function(done) {
        npmVersions('kevoree-node-javascript', function (err, res) {
            this.result = res;
            done();

        }.bind(this));
    },
    'current': function(test) {
        test.expect(1);
        // tests here
        npm.load(function () {
            npm.commands.view(['kevoree-node-javascript', 'name', 'version'], true, function (err, view) {
                if (err) {
                    throw err;
                }

                test.equal(this.result.current, Object.keys(view)[0], "should be equal");
                test.done();
            }.bind(this));
        }.bind(this));
    }
};
