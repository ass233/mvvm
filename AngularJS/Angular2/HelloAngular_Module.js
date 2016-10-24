/**
 * Created by 北狼 on 2016/10/4.
 */
var myModule = angular.module("HelloAngular",[]);

myModule.controller("helloAngular",['$scope',function HelloAngular($scope) {
    $scope.greeting = {
        text : 'Hello'
    };
}]);