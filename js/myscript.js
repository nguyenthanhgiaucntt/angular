var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
    $scope.username = '';//ng-model
    $scope.name = function(){
        return $filter('lowercase')($scope.username); 
    }
    //
    $scope.lenth5 = 5;
    //hien thi loi dang danh sach
    $scope.rules = [
        {ruleName: 'Tai khoan phai du 5 ky tu'},
        {ruleName: 'tai khoan phai chua ky tu hoa'},
        {ruleName: 'TK phai co'}
    ];
    //ruleName
    console.log($scope.rules);
    // bai 21
    $scope.alertFuntion = function(){
        alert('clicked!!');
    }
    $scope.name = 'giauvp';
}]);

