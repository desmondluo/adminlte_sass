/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/24.
 */

"use strict";
adminlte.filter('loginStatus', ['$filter', function ($filter) {
    return function (input) {
        if (input == 1) {
            return "Online";
        } else if (input == 2) {
            return "Offline";
        } else {
            return "Unknow";
        }
    };
}]);