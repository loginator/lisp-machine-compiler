'use strict';

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var tslint = require('tslint');

var config = {
    paths: {
        app: path.resolve('src')
    }
};

var srcFiles = fs.readdirSync(config.paths.app).map(function(f) {
    return path.join(config.paths.app, f);
});

srcFiles.map(function(f) {
    try {
        exec('tslint -c tslint.json ' + f, function(err, stdout, stderr) {
            console.log(":: Output for file [" + f + "] ::");
            console.log(stdout);
        });
    } catch (ex) {
        callback(ex);
    }
});
