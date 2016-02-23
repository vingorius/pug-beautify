var jadeBeautifier = require('../index');
var assert = require('assert');
var fs = require('fs');
var ENC = 'utf8';
var before_file_name = './test/before/test.jade';

describe('jadeBeautifier', function() {
    it('should throw error when code is not a string', function() {
        assert.throws(function() {
            jadeBeautifier({});
        }, Error,'it must throw error.');
    });

    it('should throw error when option is not a object', function() {
        assert.throws(function() {
            jadeBeautifier('','');
        }, Error,'it must throw error.');
    });

    it('should equal when default option', function(done) {
        var option = {
            fill_tab: true,
            omit_div: false,
            tab_size: 4
        };
        var after_file_name = './test/after/test_true_false_4.jade';

        fs.readFile(before_file_name, ENC, function(err, before) {
            if (err) throw err;
            fs.readFile(after_file_name, ENC, function(err, after) {
                if (err) throw err;
                assert.equal(after, jadeBeautifier(before, option));
                done();
            });
        });
    });
});
