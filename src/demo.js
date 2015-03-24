require('./');

var app = angular.module('Demo', ['ChartComponents']);
app.controller('DemoCtrl', ['$scope', function ($scope) {
  $scope.items = require('../spec/fixtures/barchart-data.json');
}]);
