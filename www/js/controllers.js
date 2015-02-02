angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {
//})
//
.controller('UserCtrl', function($scope, User) {

})
//
//.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//  $scope.friend = Friends.get($stateParams.friendId);
//})

    .controller('AccountCtrl', ["$scope", "$ionicPopup", "User", function($scope, $ionicPopup, User) {
   $scope.user = User.getUser();

   $scope.login = function () {
     User.login($scope.user.email, $scope.user.password, function(res) {
       if (res.uid) {
         $scope.user = res;
           console.log(res)
         } else {
         $ionicPopup.alert({
           title: 'Login error!',
             template: res.message
         });
       }
     });
   };

 $scope.register = function () {
   User.register($scope.user.email, $scope.user.password, function(res) {
     if (res.uid) {
       $scope.user = res;
       } else {
       $ionicPopup.alert({
         title: 'Register error!',
           template: res.message
       });
     }
   });
 };

 $scope.logout = function () {
   User.logout();
   $scope.user = {};
   };
 }]);
