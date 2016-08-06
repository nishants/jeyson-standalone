var requirejs = require('requirejs');
requirejs('almond');

var config = {
    baseUrl: 'src/src',
    name: 'index',
    include: ['index'],
    insertRequire: ['index', 'compile'],
    wrap: true,

    out: 'jeyson-standalone.js',
};

requirejs.optimize(config, function (buildResponse) {
    //buildResponse is just a text output of the modules
    //included. Load the built file for the contents.
    //Use config.out to get the optimized file contents.
    var contents = fs.readFileSync(config.out, 'utf8');
}, function(err) {
    //optimization err callback
});

