/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/18.
 */

"use strict";

adminlte.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/main', {
        controller : "mainController",
        templateUrl : "view/main.html"
    });
    $routeProvider.when('/login', {
        controller: "loginController",
        templateUrl: "view/login/login.html"
    });
    $routeProvider.when('/index1', {
        controller: 'index1Controller',
        templateUrl: 'view/dashboard/index1.html'
    });
    $routeProvider.when('/echarts', {
        controller: 'echartsController',
        templateUrl: 'view/chart/echarts.html'
    });
    $routeProvider.when('/smarttable', {
        controller: 'smarttableController',
        templateUrl: 'view/table/smarttable.html'
    });
    $routeProvider.otherwise({
        redirectTo : "/main"
    });
}]);