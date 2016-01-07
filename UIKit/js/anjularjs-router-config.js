var myApp = angular.module('myApp', ['ui.router']);
//配置路由
myApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/state1");
	// Now set up the states
	$stateProvider
	.state('state1', {
		url: "/state1",
		templateUrl: "html/angularhtml1.html"
	})
	.state('state2', {
		url: "/state2",
		templateUrl: "html/angularhtml2.html"
	})
	.state('uikit1', {
		url: "/uikit1",
		templateUrl: "html/ui-kit.html"
	});
});