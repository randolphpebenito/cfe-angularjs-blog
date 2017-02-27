'use strict';

angular.module('blogList').
    component('blogList', {
        template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
        controller: function($scope){
            $scope.title = 'Hi there'
            $scope.clicks = 0
            $scope.someClickTest = function(){
            console.log("clicked")
            $scope.clicks += 1
            $scope.title = 'Clicked ' + $scope.clicks + ' times'
            }
        }
    });

    //HTML  
	//<div class='' ng-controller='BlogListController'>
	//	<h1 class='new-class'>{{ title }}</h1>
	//	<button ng-click='btnCtr()'>Click me!</button>
	//</div>
//    controller('BlogListController', function($scope){
//        console.log("hello")
//        $scope.title = 'Click the button below to start counting'
//        $scope.clicks = 0
//        $scope.btnCtr() = function(){
//            console.log("clicked")
//            $scope.clicks += 1
//            $scope.title = 'Clicked ' + $scope.clicks + ' times'
//        }
//    });

    // compontent('blogList');
