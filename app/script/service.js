'use strict';

// Declare app level module which depends on views, and components
var ag = angular.module('myApp.service', [])
ag.service("ajax",['$http','$location',function ($http,$location) {
    var ajax = function (v) {
        v = angular.isObject(v) ? v : {url: v};
        v.url = v.url;

        if (angular.uppercase(v.method) == "POST" && v.data != null) {
            v.headers = v.headers || {'Content-Type': 'application/x-www-form-urlencoded'};
            v.transformRequest = v.transformRequest || function (obj) {
                    var str = [];
                    for (var s in obj) {
                        str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
                    }
                    return str.join("&");
                }
        }
        var res={};
        res.then= function (fn) {

           return $http(v).then(function (data) {
                var res = data.data;
                if(res.code==-110){
                    $location.path('/login');
                    return;
                }
               if(res.code==-100){
                    console.log(v);
                    alert("您无权访问当前页面！")
                   return;
               }

                typeof fn =="function" && fn.call($location,res);
            });
        }
        return res;
    }
    return ajax;
}]);

ag.service("paramObj",function () {
    this.data=null;
})
ag.service("user",function () {
    this.type=null;
    this.nickname=null;
})
ag.service("path",function () {
    this.upPath =null;
})
