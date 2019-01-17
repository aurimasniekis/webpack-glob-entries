var glob = require('glob'),
    path = require('path');

module.exports = function (globPath, suffix, options = {}) {

    var files = glob.sync(globPath, options);
    var entries = {};

    for (var i = 0; i < files.length; i++) {
        var entry = files[i];
        var keyName = path.basename(entry, path.extname(entry)) +
            (suffix != undefined ? suffix : '')
        entries[keyName] = entry;
    }

    return entries;
}
