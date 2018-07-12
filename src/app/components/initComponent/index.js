const component_name = __filename.replace(/\\/g, '/').split('/').splice(-2)[0];

module.exports =
    angular.module('mcsft').component(component_name, {
        template: require('./template.html'),
        controller: require('./controller'),
        bindings: {
            yandexuid: '@'
        },
    });