/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/19.
 */

"use strict";

adminlte.controller('loginController', ['$scope','$rootScope', function($scope, $rootScope) {
    $rootScope.showHeader    = false;
    $rootScope.showSide      = false;
    $rootScope.showFooter    = false;

    $scope.errorMsg = "欢迎使用adminlte_scss演示环境";
}]);