(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
	  $scope.name = "";
	  $scope.resultMessage = "";

	  $scope.result = function () {
	  	var split = $scope.name.split(',');
	  	
	  	if(split.length===1 && split==""){
			$scope.resultMessage = "Please enter data first";
	  	} else if(split.length<4){
	  		$scope.resultMessage = "Enjoy!";
	  	} else {
	  		$scope.resultMessage = "Too much!";
	  	};
	  };

	}

})();
