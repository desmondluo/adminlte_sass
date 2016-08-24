/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/19.
 */

"use strict";

adminlte.controller('loginController', ['$scope','$rootScope','$location', function($scope, $rootScope, $location) {
    $rootScope.showHeader    = false;
    $rootScope.showSide      = false;
    $rootScope.showFooter    = false;
    $scope.errorMsg = '欢迎使用adminlte_scss演示环境';

    $scope.login = function() {
        $location.path('/main');
    };
}]);