'use strict';

angular.module('myApp.stage', ['ngRoute','myApp.service'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/stage/index', {
        templateUrl: 'view/stage/index.html',
        controller: 'indexCtrl'
    })
    .when('/stage/add', {
        templateUrl: 'view/stage/addCustomer.html',
        controller: 'addcustomer'
    })
    .when('/stage/add/2', {
        templateUrl: 'view/stage/add-cust-2.html',
        controller: 'addcustsec'
    })
    .when('/stage/add/3', {
        templateUrl: 'view/stage/add-cust-3.html',
        controller: 'addcustthree'
    })
    .when('/stage/add/4', {
        templateUrl: 'view/stage/add-cust-4.html',
        controller: 'addcustfour'
    })
    .when('/stage/add/5', {
        templateUrl: 'view/stage/add-cust-5.html',
        controller: 'addcustfive'
    })
}])
.service('dataModel',function () {
    this.data=null;
})

.controller('addcustomer', ['$scope','ajax','dataModel','$location',function(_that,ajax,dm,$location) {

    _that.model={

    };
    _that.next=function () {
        dm.data=_that.model;
        $location.path('/stage/add/2');
    }

    _that.save=function (valid) {
        if(valid){
            ajax({
                url:"/customer/add",
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
.controller('addcustsec', ['$scope','ajax','dataModel','$location',function(_that,ajax,dm,$location) {


    _that.model= dm.data;
    if(_that.model==null)
    {
        $location.path('/stage/add');
    }
    _that.next=function () {
        $location.path('/stage/add/3');
    }

    _that.save=function (valid) {
        if(valid){
            ajax({
                url:"/customer/add",
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
.controller('addcustthree', ['$scope','ajax','dataModel','$location',function(_that,ajax,dm,$location) {


    _that.model= dm.data;
    if(_that.model==null)
    {
        $location.path('/stage/add');
    }
    _that.next=function () {
        $location.path('/stage/add/4');
    }

}])
.controller('addcustfour', ['$scope','ajax','dataModel','$location',function(_that,ajax,dm,$location) {


    _that.model= dm.data;
    _that.list=[1];
    if(_that.model==null)
    {
        // $location.path('/stage/add');
    }

    _that.add=function (i) {
        _that.list.push(i+1);
    }
    _that.next=function () {
        $location.path('/stage/add/5');
    }

}])
