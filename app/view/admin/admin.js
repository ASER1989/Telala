'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin/index', {
    templateUrl: 'view/admin/index.html',
    controller: 'indexCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);