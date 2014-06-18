'use strict';

var npmVersions = require('../lib/npm-versions.js');

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

exports.npmVersions = {
    setUp: function(done) {
        npmVersions('kevoree-node-javascript', function (err, res) {
            this.result = res;
            done();

        }.bind(this));
    },
    'current': function(test) {
        test.expect(1);
        // tests here
        test.equal(this.result.current, "0.6.18-SNAPSHOT", "should be equal");
        test.done();
    }
};
