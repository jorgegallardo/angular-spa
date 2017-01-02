var app = angular.module('AngularSPA', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'MainController',
      activeTab: 'main'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'AboutController',
      activeTab: 'about'
    })
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'ContactController',
      activeTab: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider
    .html5Mode(true);
}])

.controller('NavBarController', ['$scope', '$route', function($scope, $route) {
  $scope.$route = $route;
  $scope.$on("$routeChangeSuccess", function(event, current, previous) {
    $scope.activeTab = current.$$route.activeTab;
  });
}])

.controller('MainController', ['$scope', function($scope) {
  $scope.name = 'Eleven';
}])

.controller('AboutController', ['$scope', function($scope) {
  $scope.name = 'Timmy';
}])

.controller('ContactController', ['$scope', function($scope) {
  $scope.name = 'Jimmy';
}]);