var should = require('chai').should(),
    assert = require('chai').assert,
    expect = require('chai').expect,
    proxyquire = require('proxyquire'),
    glob_stub = {},
    webpack_glob_entries = proxyquire(
        '../index.js',
        {
            'glob': glob_stub
        }
    );

describe('webpack_glob_entires', function () {
    it('returns a entries hash from glob', function () {
        var globFixture = '/**/*.js';
        glob_stub.sync = function (glob) {
            glob.should.equal(globFixture);

            return ['/foo/foo.js', '/bar/bar.js'];
        };

        assert.deepEqual(webpack_glob_entries(globFixture), { foo: '/foo/foo.js', bar: '/bar/bar.js' });
    });

    it('returns a foldername as entries hash from glob', function () {
        var globFixture = '/**/*.js';
        glob_stub.sync = function (glob) {
            glob.should.equal(globFixture);

            return ['/foo/index.js', '/bar/index.js'];
        };

        expect(webpack_glob_entries(globFixture, true)).have.keys(['foo', 'bar']);
    });


});
