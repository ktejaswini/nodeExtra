'use strict';

var clientCtrl = angular.module('clientCtrl',[]);

clientCtrl.controller('editCtrl',['$scope','$resource',
	function ($scope, $resource) {
		var result = $resource('/api/list');
		$scope.value = result.query();
	}]);

clientCtrl.controller('delCtrl',['$scope','$resource','$routeParams',
	function ($scope, $resource, $routeParams) {
		var id1 = $routeParams.id ;
		console.log('going to delete '+id1);

		var result = $resource('/api/delMachine/:id', {id:'@id'});
		var res = result.delete({id:id1}, function() {
  			console.log('delete successfull');
		});

		var result1 = $resource('/api/list');
		$scope.value = result1.query();
	}]);

// clientCtrl.controller('addCtrl',['$scope','$resource','$routeParams',
// 	function ($scope,$resource,$routeParams) {
// 		var x = {}; 
// 		x = $scope.machine ;
// 		console.log('add Ctrl');
// 		console.log('model--->'+ x);
// 		// var addResult = $resource('/api/newMachine');
// 		// var res = addResult.save();
// 		// console.log('output'+ addResult);
// 		// var result1 = $resource('/api/list');
// 		// $scope.value = result1.query();
// 	}]);

clientCtrl.controller('selectCtrl',['$scope','$resource',
	function ($scope, $resource) {
		console.log('inside select ctrl');
		var result = $resource('/api/list');
		$scope.value = result.query();
	}]);

clientCtrl.controller('mainCtrl',['$scope','$resource','$routeParams',
	function ($scope,$resource,$routeParams) {
		console.log('main Ctrl');
		var id = $routeParams.id;
		var url = 'api/listOne/'+id;
		var result = $resource(url);
		var res = result.get();
		$scope.value = res;
	}]);

clientCtrl.controller('insertCtrl',['$scope','$resource','$routeParams',
function ($scope,$resource,$routeParams) {
		console.log('insert Ctrl');
		var id = $routeParams.id;
		var url = 'api/insert/'+id;
		var result = $resource(url, {}, {'put': {method: 'PUT', params: {}, isArray: false}});
		var res = result.put();
		// var url1 = 'api/listOne/'+id;
		// var result1 = $resource(url1);
		// var res1 = result1.get();
		$scope.value = res;
	}]);

clientCtrl.controller('turnCtrl',['$scope','$resource','$routeParams',
function ($scope,$resource,$routeParams) {
		console.log('turn Ctrl');
		var id = $routeParams.id;
		var url = 'api/turn/'+id;
		var result = $resource(url, {}, {'put': {method: 'PUT', params: {}, isArray: false}});
		var res = result.put();
		console.log('After put');
		$scope.value = res;
	}]);
 	