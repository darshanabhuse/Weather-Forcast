var app = angular.module('jsbin',  ['ngAnimate']);

app.controller('DemoCtrl', function($scope, $http) {
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  $scope.city = "London";

  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: $scope.city,
      mode: 'json',
      units: 'metric',
      cnt: '5',
      appid: '96a5ddcbbb1705a49672d1bca7a425c5'
    }
  };

  $http(request)
    .then(function(response) {
      $scope.data = response.data.list;
      $scope.active = true;
    }).
    catch(function(response) {
      $scope.data = response.data;
    });
});