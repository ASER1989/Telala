'use strict';

angular.module('myApp.admin', ['ngRoute','myApp.service','app.pager'])

.directive("commView", function () {
    return {
        templateUrl: "view/common.html",
        restrict: "AE",
        transclude: true
    }
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin/index', {
    templateUrl: 'view/admin/customerList.html',
    controller: 'indexCtrl'
  })
  .when('/admin/cus-detail', {
      templateUrl: 'view/admin/customerDetail.html',
      controller: 'customerDetail'
  })
  .when('/user/list', {
      templateUrl: 'view/admin/userList.html',
      controller: 'userListCtrl'
  })
}])

.controller('indexCtrl', ['$scope','ajax','paramObj','$location',function(_that,ajax,param,$loc) {
    _that.list = null;
    _that.page={
        total:1,
        index:1
    }
    function load() {
        ajax({
            url:"/customer/getlist",
            params:{}
        }).then(function (data) {
          _that.page.total = data.data.count;
          _that.list = data.data.list;
        })
    }
    _that.topage = function(page){
        _that.page.index = page;
        load();
    }
    load();
    
    _that.todetail=function (item) {
        param.data =JSON.parse(item.detail);
        $loc.path("/admin/cus-detail");
    }
}])
.controller("customerDetail",['$scope','ajax','paramObj','$location',function (_that,ajax,param,$loc) {
    param.data==null && $loc.path("/admin/index");
    _that.item = param.data;
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