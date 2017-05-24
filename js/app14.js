/**
 * Created by giaun on 23/05/2017.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('mainController',['$scope','$log',function($scope,$log){
    $log.info($log);
}]);