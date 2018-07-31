module.exports = ['$scope', 'ApiService', '$state', function ($scope, ApiService, $state) {
    'ngInject';

    if (angular.equals(this.yandexuid, '{}')) {
        $state.go('login');
    }

    var accounts = JSON.parse(this.yandexuid);

    $scope.yandexuid = accounts.default_uid;
    // console.log(accounts);

    // var yandexAccount = ApiService.loadUserInfo();

    // console.log(title);

}];