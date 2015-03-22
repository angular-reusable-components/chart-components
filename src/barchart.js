var module = angular.module('ChartComponents.barchart', []);

/*@ngInject*/
module.directive('barchart', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./templates/barchart.html'),
    scope: {
      'data': '='
    },
    link: function(scope, element, attrs) {
      scope.max = 0;

      scope.$watchCollection('data', function (newData) {
        if (newData) {
          newData.forEach(function (item) {
            scope.max = Math.max(scope.max, item.value);
          });
        } else {
          scope.max = 0;
        }
      });
    }
  };
});
