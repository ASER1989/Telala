'use strict';

angular.module('myApp.stage', ['ngRoute', 'myApp.service'])
.config(['$routeProvider', function ($routeProvider) {
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
    .when('/stage/add/6', {
        templateUrl: 'view/stage/add-cust-6.html',
        controller: 'addcustsix'
    })
    .when('/stage/add/7', {
        templateUrl: 'view/stage/add-cust-7.html',
        controller: 'addcustseven'
    })
    .when('/stage/add/8', {
        templateUrl: 'view/stage/add-cust-8.html',
        controller: 'addcusteight'
    })
    .when('/stage/add/9', {
        templateUrl: 'view/stage/add-cust-9.html',
        controller: 'addcustnine'
    })
}])
.service('dataModel', function () {
    this.data = null;
})

.controller('addcustomer', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.model = {};
    _that.next = function () {
        dm.data = _that.model;
        $location.path('/stage/add/2');
    }


}])
.controller('addcustsec', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {


    _that.model = dm.data;
    if (_that.model == null) {
        $location.path('/stage/add');
    }
    _that.next = function () {
        $location.path('/stage/add/3');
    }

    _that.save = function (valid) {
        if (valid) {
            ajax({
                url: "/customer/add",
                params: _that.form
            }).then(function (data) {
                if (data.code > 0) {
                    init();
                    _that.loginHide = true;
                }
            })
        }
    }
}])
.controller('addcustthree', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {


    _that.model = dm.data;
    if (_that.model == null) {
        $location.path('/stage/add');
    }
    _that.next = function () {
        $location.path('/stage/add/4');
    }

}])
.controller('addcustfour', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.model = dm.data;
    _that.list = [1];
    if (_that.model == null) {
        $location.path('/stage/add');
    }

    _that.add = function (i) {
        _that.list.push(i + 1);
    }

    _that.next = function () {
        $location.path('/stage/add/5');
    }

}])
.controller('addcustfive', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.model = dm.data;
    _that.list = [1];
    if (_that.model == null) {
        $location.path('/stage/add');
    }

    _that.add = function (i) {
        _that.list.push(i + 1);
    }

    _that.next = function () {
        $location.path('/stage/add/6');
    }

}])
.controller('addcustsix', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.model = dm.data;
    _that.list = [1];
    if (_that.model == null) {
        $location.path('/stage/add');
    }

    _that.add = function (i) {
        _that.list.push(i + 1);
    }

    _that.next = function () {
        $location.path('/stage/add/7');
    }

}])
.controller('addcustseven', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.model = dm.data;
    _that.list = [1];
    if (_that.model == null) {
        $location.path('/stage/add');
    }

    _that.add = function (i) {
        _that.list.push(i + 1);
    }

    _that.next = function () {
        $location.path('/stage/add/8');
    }

}])
.controller('addcusteight', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.model = dm.data;
    _that.list = [1];
    if (_that.model == null) {
        $location.path('/stage/add');
    }

    _that.add = function (i) {
        _that.list.push(i + 1);
    }

    _that.next = function () {
        $location.path('/stage/add/9');
    }

}])
.controller('addcustnine', ['$scope', 'ajax', 'dataModel', '$location', function (_that, ajax, dm, $location) {

    _that.form = dm.data;
    _that.list = [1];
    if (_that.form == null) {
        $location.path('/stage/add');
    }

    _that.add = function (i) {
        _that.list.push(i + 1);
    }

    _that.next = function () {
        ajax({
            url: "/customer/add",
            data: {
                str: JSON.stringify(_that.form),
                name: _that.form.name,
                sex: _that.form.sex,
                ismarr: _that.form.ismarr,
                cardNo: _that.form.cardNo,
                address: _that.form.address,
                workunit: _that.form.workunit,
                workaddress: _that.form.workaddress,
                job: _that.form.job,
                phone: _that.form.phone
            },
            method: "post"

        }).then(function (data) {
            if (data.code > 0) {
                alert("保存成功！");
            }
        })
    }

}])
