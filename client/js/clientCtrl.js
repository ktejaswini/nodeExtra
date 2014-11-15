'use strict';

var clientCtrl = angular.module('clientCtrl',[]);
var d = new Date().toISOString();

clientCtrl.controller('indexCtrl',['$scope',
	function ($scope) {
		$scope.value = 'Home Page';
	}]);

clientCtrl.controller('carsCtrl',['$scope','$resource',
	function ($scope, $resource) {
		var result = $resource('/store/carsData');
		$scope.value = result.query();
	}]);

clientCtrl.controller('routersCtrl',['$scope','$resource', 
	function ($scope, $resource) {
		var result = $resource('/store/routersData');
		$scope.value = result.query();
	}]);
 	
clientCtrl.controller('tvCtrl',['$scope','$resource', 
	function ($scope, $resource) {
		var result = $resource('/store/tvData');
		$scope.value = result.query();
	}]);

clientCtrl.controller('carsDetailCtrl',['$scope','$resource', '$routeParams',
	function ($scope, $resource, $routeParams) {
		var carid = $routeParams.carid ;
		var url = "/store/carsDetail/"+carid;
		var result = $resource(url);
		var res = result.get();
		console.log(res);
		console.log(d);
		if(d > res.startDate && d < res.endDate) {
			$scope.stock = 'In Stock';
		}
		else {
			$scope.stock = 'Out of Stock';
		}
		$scope.value = result.get();
		
	}]);
 
clientCtrl.controller('routersDetailCtrl',['$scope','$resource', '$routeParams',
	function ($scope, $resource, $routeParams) {
		var routerid = $routeParams.routerid ;
		var url = "/store/routersDetail/"+routerid;
		var result = $resource(url);
		$scope.value = result.get();
	}]);

clientCtrl.controller('tvDetailCtrl',['$scope','$resource', '$routeParams',
	function ($scope, $resource, $routeParams) {
		var tvid = $routeParams.tvid ;
		var url = "/store/tvDetail/"+tvid;
		var result = $resource(url);
		$scope.value = result.get();
	}]);
 	
 	