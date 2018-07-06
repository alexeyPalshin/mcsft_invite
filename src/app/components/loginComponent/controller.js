module.exports = ["$scope", "ApiService", function ($scope, ApiService) {
    'ngInject';

    var yandexAccount = ApiService.loadUserInfo();

    console.log(yandexAccount);

}];