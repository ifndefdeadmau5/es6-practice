'use strict';

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map