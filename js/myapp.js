var myApp = angular.module('myApp', []);
myApp.controller('userCtrl', function ($scope, $http) {

    $http.get("https://reqres.in/api/users")
            .then(function (result) {               
                
                $scope.user = result.data;
                console.log(result.data);
                console.log(result);

            });

    $scope.proxPage = function (page) {
        page = parseInt(page) + 1;
        $http.get("https://reqres.in/api/users?page=" + page)
            .then(function (result) {
               
                $scope.user = result.data;
                $scope.buscar = null;
                console.log(result.data);

            });
    }

    $scope.antPage = function (page) {
        page = parseInt(page) - 1;
        $http.get("https://reqres.in/api/users?page=" + page)
            .then(function (result) {
               
                $scope.user = result.data;
                $scope.buscar = null;
                console.log(result.data);

            });
    }

    $scope.goPage = function (page) {        
        $http.get("https://reqres.in/api/users?page=" + page)
            .then(function (result) {

                $scope.user = result.data;
                $scope.buscar = null;
                console.log(result.data);

            });
    }

});