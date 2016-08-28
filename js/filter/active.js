/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/28.
 */

"use strict";
adminlte.filter('active', ['$filter', function ($filter) {
    return function (input) {
        if (input == true) {
            return "active";
        } else {
            return "";
        }
    };
}]);