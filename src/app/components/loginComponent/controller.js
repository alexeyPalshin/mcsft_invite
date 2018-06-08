module.exports = function ($scope) {
    'ngInject';

    chrome.tabs.query({"active": true}, function (tabs) {
        if (tabs.length > 0) {
            $scope.title = tabs[0].title;

            chrome.tabs.sendMessage(
                tabs[0].id, {"action": "PageInfo"}, function (response) {
                    $scope.pageInfos = response;
                    $scope.$apply();
                }
            )
        }
    })

};