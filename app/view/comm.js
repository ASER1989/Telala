'use strict';

angular.module('myApp.common', ['ngRoute'])

.controller('commCtrl', ['$scope','ajax','path','$location',function($scope,ajax,path,$location) {
    path.upPath =$location.path();
    $scope.custPath = "#!"+ path.upPath;
    $scope.menu=[
        {url:"#!/admin/index",txt:"首页"},
        {url:"#!/user/list",txt:"用户管理"},
        {url:"",txt:"客户管理"},
    ]
}]);