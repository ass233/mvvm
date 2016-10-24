/**
 * Created by 北狼 on 2016/10/7.
 */
var UserInfoModule = angular.module('UserInfoModule',[]);
UserInfoModule.controller('UserInfoCtrl',['$scope',function ($scope) {
    $scope.userInfo = {
        email:"1026145889@qq.com",
        password:123456,
        autoLogin:true
    };
    $scope.getFormData = function () {
        console.log($scope.userInfo);
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email:'ass233.cm@163.com',
            password:'asdqwe',
            autoLogin:false
        }
    };
    $scope.restForm = function () {
        $scope.userInfo = {
            email:"1026145889@qq.com",
            password:123456,
            autoLogin:true
        };
    }
}]);