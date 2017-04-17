/**
 * Created by dylike.
 */
angular.module('app.pager', [])
    .directive('pager', function () {
        'use strict';

        return {
            restrict: 'AE',
            transclude: true,
            scope:{
                items:"=",
                action:'&',
                barclass:"@",
                total:"="
            },
            template:' <div class="pager">' +
            '<div class="{{barclass}}">' +
            // '<span><img src=""> </span>' +
            '<span class="icons pager-prev float left" ng-click="previous()"></span>' +
            '<span ng-repeat="item in pageItem" ng-class="{\'custpage\':custpage==item}">' +
            '<a href="javascript:void(0)" ng-click="topage(item)" >{{item}}</a></span>'+
            '<span class="icons pager-next float right" ng-click="next()"></span>' +
            '</div>',
            
            link: function (scope, element, attrs, ngModel) {
                scope.pageItem = [];
                scope.custpage=1;
                scope.topage=function (item) {
                    scope.custpage= item;
                    scope.action({page:item});
                };
                scope.next=function () {
                    if(scope.custpage==scope.total) return;

                    scope.custpage+=1;
                    scope.action({page: scope.custpage});
                };
                scope.previous=function () {
                    if(scope.custpage==1) return;
                    scope.custpage-=1;
                    scope.action({page: scope.custpage});
                };
                
                var rundPage=function () {
                    scope.pageItem = [];
                    var lt = 4;
                    var fleng = scope.total - scope.custpage >= 2 ? 2: 4- (scope.total -  scope.custpage);
                    for (var i = 1; i <= fleng; i++) {
                        var nitem = scope.custpage - i;

                        if (nitem <= 0) break;

                        scope.pageItem.push(nitem);
                        lt -= 1;
                    }
                    scope.pageItem.reverse();
                    scope.pageItem.push(scope.custpage);

                    for (var i = 1; i <= lt; i++) {
                        var nitem = scope.custpage + i;
                        if (nitem > scope.total) break;

                        scope.pageItem.push(nitem);
                    }

                    scope.pageItem.length == 0 ? scope.pageItem.push(1) : void(0);

                }

                var totalWatch =scope.$watch('total',function(){
                    rundPage();
                });

                scope.$watch('custpage',rundPage);

            }
        }
    });

