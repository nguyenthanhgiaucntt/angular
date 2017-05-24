/**
 * Created by giaun on 22/05/2017.
 */

var myApp = angular.module('myApp',['ngMessages']);

myApp.controller('mainController',function($scope){
    //khai bao 1 cai bien dua vao $scope
    $scope.name = "Hoa";
    $scope.job= "xich lo";
    $scope.hamdfdf = function() {
        return "Hoa Admin23";
    }
});
var searchPerson = function($scope,firstName,lastName,address){

}
console.log(angular.injector().annotate(searchPerson));