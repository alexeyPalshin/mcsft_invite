import appConfig from '../config';
import {
    getUid as getCookieUid,
    getSessionId,
} from './utils/cookie';
const API_URL = 'https://mail.yandex.{domain}/api';
const AUTH_CONFIG = {
    tokenUrl: 'https://oauth.yandex.{domain}/token',
    passportUrl: 'https://pass.yandex.ru/accounts',
    clientId: 'da316fcd424046deb5fbfb9f7a65f6f3',
    clientSecret: 'd233557310334c429bcc9f673431c50f',
};

var service_name = __filename.replace(/\\/g, '/').split('/').splice(-1)[0].split('.').map(function(item){
    return item[0].toUpperCase() + item.slice(1);
});
service_name.splice(-1);
service_name = service_name.join('');
angular.module('mcsft').service(service_name, ["$http", function ($http)  {
    'ngInject';

    // prevent sending 'Origin' header, otherwise yandex doesn't execute an operation
    chrome.webRequest.onBeforeSendHeaders.addListener(({requestHeaders}) => ({
        requestHeaders: requestHeaders.filter(({name}) => name !== 'Origin'),
    }), {
        urls: appConfig.supportedDomains.map(domain => `${API_URL}/*`.replace('{domain}', domain)),
    }, ['blocking', 'requestHeaders']);

    var cookieUid;
    return {
        loadUserInfo: function () {

            getCookieUid().then(function (response) {
                //variable definition
                cookieUid = response;

                var req = {
                    method: 'get',
                    url: AUTH_CONFIG.passportUrl,
                    params: { yu: cookieUid }
                };

                $http(req).then(function (res) {
                    const resData = res.data || JSON.parse(res.text);

                    if (resData.code === appConfig.errors.notAuthorized) {
                        throw new Error(appConfig.errors.notAuthorized);
                    }

                    return resData;
                }, function (error) {
                    console.log(error);
                })
            }, function (error) {
                console.log(error);
            });
            // if (!cookieUid) {
            //     throw new Error(appConfig.errors.notAuthorized);
            // }

        }
    };
}]);