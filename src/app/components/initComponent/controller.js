module.exports = ["$scope", "ApiService", "$state", function ($scope, ApiService, $state) {
    'ngInject';


    this.$onInit =  () => {
        console.log(this.yandexuid);
    };

    // var yandexAccount = ApiService.loadUserInfo();

    // console.log(title);

}];