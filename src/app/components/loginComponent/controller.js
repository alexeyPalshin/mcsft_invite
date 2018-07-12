module.exports = ["$scope", "ApiService", "$state", function ($scope, ApiService, $state) {
    'ngInject';

    $scope.title = 'gup';
    $state.go('init');

}];