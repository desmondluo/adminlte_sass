/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/19.
 */

"use strict";

adminlte.controller('sidebarController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.imagepath   = "dist/img/user2-160x160.jpg";
    $rootScope.loginStatus = 1;
    $rootScope.username    = "Alexander Pierce";
}]);