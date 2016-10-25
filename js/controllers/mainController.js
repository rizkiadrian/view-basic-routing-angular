var app = angular.module('myApp',['ngRoute']);
app.controller('controllerMain',controllerMain);
app.controller('ctrlservicetw',ctrlservicetw);
app.controller('ctrlservicetr',ctrlservicetr);
app.config(moduleRoutes);


function controllerMain($scope,$route,$routeParams,$location){

	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;


}

function ctrlservicetw($scope,$routeParams){

	$scope.name = "saya dari controller dua";
	$scope.params = $routeParams;
}

function ctrlservicetr($scope,$routeParams){

	$scope.name = "saya dari controller tiga";
	$scope.params = $routeParams;
}

function moduleRoutes($routeProvider,$locationProvider){

	$routeProvider
	.when('/svcs-two',{
		templateUrl : '../view/svcs-two.html',
		controller : ctrlservicetw
	})
	.when('/svcs-three',{
		templateUrl : '../view/svcs-three.html',
		controller : ctrlservicetr
	})
	.otherwise({redirectTo:'/'});

	//// configure html5 to get links working on jsfiddle
    //// if only use below code route will cause error require base tag
    //// $locationProvider.html5Mode(true);
    //// this code is working

    $locationProvider.html5Mode({

        enabled: true,

        requireBase: false

    });
}
