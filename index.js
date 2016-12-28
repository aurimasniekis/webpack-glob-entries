var glob = require('glob'),
    path = require('path');

module.exports = function (globPath, folderAsName) {
    var files = glob.sync(globPath);
    var entries = {};

    for (var i = 0; i < files.length; i++) {
        var entry = folderAsName ? path.join(files[i]) : files[i];
        var name = folderAsName ? path.dirname(entry).split(path.sep).pop() : path.basename(entry, path.extname(entry));
        entries[name] = entry;
    }
    return entries;
}