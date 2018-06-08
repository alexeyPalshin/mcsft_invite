import angular from 'angular';

var app = angular.module('mcsft', []);

// require all .js files in components folder
var req = require.context('./components', true, /.*\.js$/);
req.keys().forEach(req);

// require all .js files in services folder
var req = require.context('./services', true, /.*\.js$/);
req.keys().forEach(req);

app.run(function() {
    console.log("app run");
});