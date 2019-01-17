var should = require('chai').should(),
    assert = require('chai').assert,
    mockFs = require('mock-fs');
    webpack_glob_entries = require('../index.js');

describe('webpack_glob_entires', function() {
    afterEach(() => {
        mockFs.restore()
    })

    it('returns a entries hash from glob', function() {
        const glob = '/**/*.js';

        mockFs({
          '/foo/foo.js': '',
          '/bar/bar.js': ''
        });

        const entries = webpack_glob_entries(glob)

        assert.deepEqual(entries, { foo: '/foo/foo.js', bar: '/bar/bar.js' });
    });

    it('returns entries hash with suffixed keys', function() {
        const glob = '/**/*.js';

        mockFs({
          '/foo/foo.js': '',
          '/bar/bar.js': ''
        });

        const entries = webpack_glob_entries(glob, '_test');

        console.log(entries);

        assert.deepEqual(entries, { foo_test: '/foo/foo.js', bar_test: '/bar/bar.js' });
    });

    it('returns entries minus excluded node_modules folder when options ignore is set', function() {
        const glob = '/**/*.js';
        const options = {
            ignore: '**/node_modules/**'
        };

        mockFs({
          '/foo/foo.js': '',
          '/bar/bar.js': '',
          '/myFolder/node_modules/testFile.js': '',
          '/node_modules/anotherFolder/testFile2.js': ''
        });

        const entries = webpack_glob_entries(glob, '', options);

        assert.deepEqual(entries, { foo: '/foo/foo.js', bar: '/bar/bar.js' });
    });
});
