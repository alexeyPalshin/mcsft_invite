// import appConfig from '../config';
// import {
//     getUid as getCookieUid,
//     getSessionId,
// } from './utils/cookie';
// const API_URL = 'https://mail.yandex.{domain}/api';
// const AUTH_CONFIG = {
//     tokenUrl: 'https://oauth.yandex.{domain}/token',
//     passportUrl: 'https://pass.yandex.ru/accounts',
//     clientId: 'da316fcd424046deb5fbfb9f7a65f6f3',
//     clientSecret: 'd233557310334c429bcc9f673431c50f',
// };

var service_name = __filename.replace(/\\/g, '/').split('/').splice(-1)[0].split('.').map(function(item){
    return item[0].toUpperCase() + item.slice(1);
});
service_name.splice(-1);
service_name = service_name.join('');
angular.module('mcsft').service(service_name, ["$http", function ($http)  {
    'ngInject';

    return {
        login: function () {

            return new Promise((resolve, reject) => {


            });
        }
    };
}]);