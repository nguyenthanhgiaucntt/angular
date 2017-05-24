/**
 * Created by giaun on 23/05/2017.
 */
var myApp = angular.module('myApp',[]);
myApp.controller('mainController',['$scope','$timeout',function($scope,$timeout){
    $scope.name = "Giau";
    $timeout(function(){
        $scope.name = "Hey Boy";
    },3000);
}]);