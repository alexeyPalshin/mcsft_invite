module.exports = ["$scope", "ApiService", function ($scope, ApiService) {
    'ngInject';

    $scope.yandexAccount = ApiService.loadUserInfo();



}];