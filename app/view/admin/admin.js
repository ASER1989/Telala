'use strict';

angular.module('myApp.admin', ['ngRoute'])

.directive("commView", function () {
    return {
        templateUrl: "view/common.html",
        restrict: "AE",
        transclude: true
    }
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin/index', {
    templateUrl: 'view/admin/index.html',
    controller: 'indexCtrl'
  })
  .when('/user/list', {
      templateUrl: 'view/admin/userList.html',
      controller: 'userListCtrl'
  })
}])

.controller('indexCtrl', [function() {

}])

.controller('userListCtrl', ['$scope','$http',function(_that,ajax) {
    _that.loginHide=true;
    _that.list=[];
    ajax({
      url:"/index/userlist"
    }).then(function (res) {
        var res = res.data;
        _that.list=res._data;
    })
}])