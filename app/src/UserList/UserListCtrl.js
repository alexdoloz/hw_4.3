'use strict'

userApp.controller('UserListCtrl', function ($scope, UsersService, PostsService) {
  $scope.usersLoading = true;
  UsersService.getUsers().then(function (response) {
    $scope.usersLoading = false;
    $scope.users = response.data
  })

  $scope.postsLoading = true;
  PostsService.getPosts().then(function (response) {
    $scope.postsLoading = false;
    $scope.posts = response.data
  })


/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
