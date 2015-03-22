require('./barchart');

var module = angular.module('ChartComponents', [
  'ChartComponents.barchart'
]);

/*@ngInject*/
module.controller('DemoCtrl', function ($scope) {
  $scope.items = require('../spec/fixtures/barchart-data.json');
});
