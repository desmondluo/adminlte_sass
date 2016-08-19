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
    $routeProvider.otherwise({
        redirectTo : "/main"
    });
}]);