'use strict'

angular
    .module('UserApp')
    .controller('EditUserCtrl', function ($scope, UsersService, $routeParams) {
        var user = {};
        UsersService.getUser($routeParams.userId).then(function (response) {
            var data = response.data;
            var user = {
                name: data.name,
                email: data.email,
                username: data.username
            };
            $scope.user = user;
        }).catch(function (error) {
            console.log(error);
        });

        $scope.updateUser = function (myUser) {
            $scope.updateSuccess = false

            UsersService.updateUser($routeParams.userId, myUser).then(function (response) {
                $scope.updateSuccess = true
            })
        }
    });
