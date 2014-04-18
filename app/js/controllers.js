'use strict';

/* Controllers */

<<<<<<< HEAD
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
      {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.',
       'age': 1},
      {'name': 'Motorola XOOM™ with Wi-Fi',
             'snippet': 'The Next, Next Generation tablet.',
       'age': 2},
      {'name': 'MOTOROLA XOOM™',
             'snippet': 'The Next, Next Generation tablet.',
       'age': 3}
  ];

    $scope.orderProp = 'age';
});
=======
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
>>>>>>> master
