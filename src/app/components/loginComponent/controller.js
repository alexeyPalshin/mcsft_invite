module.exports = ["$scope", "ApiService", "$state", function ($scope, ApiService, $state) {
    'ngInject';

    $scope.user = {
        email: "",
        password: "",
    };

    $scope.login = function() {
        UsersService.login($scope.user).then(function (data) {
            $state.go('init');
        });
    };
}];