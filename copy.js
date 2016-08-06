var ncp = require('ncp').ncp;

var jeysonSource = "node_modules/jeyson",
    src = 'src'

ncp(jeysonSource, src, function (err) {
    if (err) {
        return console.error(err);
    }
});

