'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'view/login.html',
    controller: 'loginCtrl'
  })
  .when('/', {
      templateUrl: 'view/login.html',
      controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope','ajax','path',function($scope,ajax,path) {
    $scope.path = path;
    $scope.msgHide = true;
    $scope.sign=function (valid) {

        if(valid){
            ajax({
                url:"/index/login",
                method:"post",
                data:{name:this.uname,pwd:this.pwd}
            }).then(function(res) {

                if(res.code<0){
                    $scope.msgHide = false;
                    return;
                }

                $scope.path.upPath=$scope.path.upPath || (res.data.Type==0?"/admin/index":"/stage/add") ;
                this.path($scope.path.upPath);

            })
        }
    }
}]);