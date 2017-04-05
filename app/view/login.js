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

.controller('loginCtrl', [function() {

}]);