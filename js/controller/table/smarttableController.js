/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   2016/10/21.
 */

"use strict";

adminlte.controller('smarttableController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.setLayouts(true);
    $scope.simpleCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
}]);