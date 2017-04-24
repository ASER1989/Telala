'use strict';

angular.module('myApp.common', ['ngRoute'])

.controller('commCtrl', ['$scope','ajax','path','$location','user',function($scope,ajax,path,$location,user) {
    path.upPath =$location.path();
    $scope.custPath = "#!"+ path.upPath;
    $scope.menu=[
        {url:"#!/admin/index",txt:"客户管理"},
        {url:"#!/user/list",txt:"用户管理"}
    ]
    $scope.user=user;

    ajax({url:"/index/GetUserInfo"}).then(function (data) {
        if(data.code<0){
            $location.path("login");
            return;
        }
        $scope.user.type= data.data.Type;
        $scope.user.nickname= data.data.NickName;

    });

}]);