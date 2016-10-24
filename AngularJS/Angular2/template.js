/**
 * Created by 北狼 on 2016/10/7.
 */
var myModule = angular.module("myModule",[]);
myModule.run(function ($templateCache) {
    $templateCache.put("hello.html","<div>111111111111111</div>");
});
myModule.directive("hello",function () {
    return {
        restrict:'AEMC',
        transclude:true,
        template:'<div>Hi Angular.js<div ng-transclude></div></div>',
        //replace:true
    }
});