var service_name = __filename.replace(/\\/g, '/').split('/').splice(-1)[0].split('.').map(function(item){
    return item[0].toUpperCase() + item.slice(1);
});
service_name.splice(-1);
service_name = service_name.join('');
angular.module('mcsft').service(service_name, function ()  {
    'ngInject';

    const chromeStore = chrome.storage.sync;

    return {
        getAll: function () {
            return new Promise(resolve => {
                chromeStore.get(null, data => {
                    const parsedData = Object.keys(data).reduce((obj, key) => {
                        try {
                            // eslint-disable-next-line no-param-reassign
                            obj[key] = JSON.parse(data[key]);
                        } catch (err) {
                            // swallow
                        }

                        return obj;
                    }, {});

                    resolve(parsedData);
                });
            });
        },
        set: function (name, value) {
            chromeStore.set({[name]: JSON.stringify(value)});
        },
        remove: function (name) {
            chromeStore.remove(name);
        },
        clear: function () {
            chromeStore.clear();
        },
    };
});