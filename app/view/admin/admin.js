'use strict';

angular.module('myApp.admin', ['ngRoute','myApp.service'])

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

.controller('userListCtrl', ['$scope','ajax',function(_that,ajax) {
    _that.loginHide=true;
    _that.form={};
    _that.list=[];
    function init() {
        ajax({
            url:"/index/userlist"
        }).then(function (res) {
            angular.forEach(res.data,function (item) {
                var time =item.CreateTime.replace(/[^\d]/g,"");
                item.CreateTime =new Date(Number(time));
            })
            _that.list=res.data;
        })
    }
    init();


    _that.save=function (valid) {
        if(valid){
            ajax({
                url:"/index/AddUser",
                params:_that.form
            }).then(function (data) {
                if(data.code>0){
                    init();
                    _that.loginHide=true;
                }
            })
        }
    }
}])