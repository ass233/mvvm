/**
 * Created by 北狼 on 2016/10/11.
 */
function MyController($scope) {
    $scope.clock = {
        now:new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    },1000);
    updateClock();
};