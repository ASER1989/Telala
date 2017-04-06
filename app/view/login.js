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

.controller('loginCtrl', ['$scope','$http',function($scope,ajax) {
    $scope.sign=function (valid) {
        if(valid){
            ajax({
                url:"/index/login",
                method:"post",
                data:{name:this.uname,pwd:this.pwd}
            }).then(function(res) {
                var data = res.data;
                if(data.code<0){

                }
            })
        }
    }
}]);