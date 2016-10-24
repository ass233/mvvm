/**
 * Created by 北狼 on 2016/10/8.
 */
var myModule = angular.module("myModule",[]);
myModule.controller('MyCtrl',['$scope',function ($scope) {
    $scope.loadData = function () {
        console.log("加载数据中.......111111")
    }
}]);

myModule.controller('MyCtrl2',['$scope',function ($scope) {
    $scope.loadData2 = function () {
        console.log("加载数据中.......22222222")
    }
}]);
myModule.directive("loader",function () {
    return {
        restrict:"AE",
        link:function (scope,element,attrs) {
            element.bind("mouseenter",function () {
                //scope.loadData();
                //scope.$apply("loadData()");
                scope.$apply(attrs.howtoload);
            })
        }
    }
});