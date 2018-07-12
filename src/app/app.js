import angular from 'angular';
import '@uirouter/angularjs'

var app = angular.module('mcsft', ['ui.router']);

// require all .js files in components folder
var req = require.context('./components', true, /.*\.js$/);
req.keys().forEach(req);

// require all .js files in services folder
var req = require.context('./services', true, /.*\.js$/);
req.keys().forEach(req);

app.config(['$stateProvider', '$urlRouterProvider', '$urlServiceProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $compileProvider) {
    'ngInject';

    var appState = {
        name: "app",
            url: "^",
        abstract: true,
        template: '<ui-view autoscroll="true"><ui-view/>'
    };


    $compileProvider.preAssignBindingsEnabled(true);

    var state = {
        name: 'init',
        url: "init",
        component: 'initComponent',
        resolve: {
            yandexuid: ['ApiService', function (ApiService) {
                'ngInject';
                return ApiService.loadUserInfo()
            }]
        },
    };
    $stateProvider.state(appState);
    $stateProvider.state(state);
    $urlServiceProvider.rules.otherwise({ state: 'init' });
}]);

