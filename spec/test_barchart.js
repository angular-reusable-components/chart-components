var mockData = require('./fixtures/barchart-data.json');

describe('Bar Chart Tests', function() {
  var element, scope, compile;

  beforeEach(angular.mock.module('ChartComponents'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope;
    compile = $compile;
  }));
  describe('test', function () {
    beforeEach(function () {
      compileElement(mockData);
    });
    it("should have rows for each item", function() {
      expect(element.find('.barchart-items').length).toBe(4);
    });
    it("should have label for each item", function() {
      var labels = element.find('.label-text').map(function (i,item) {
        return angular.element(item).text();
      }).get();
      expect(labels).toEqual([ 'Smurf', 'Beta', 'Band', 'Happy' ]);
    });
    it("should update on change", function() {
      var data = angular.copy(mockData);
      data[0].value = 100;

      compileElement(data);

      var labels = element.find('.label-text').map(function (i,item) {
        return angular.element(item).text();
      }).get();
      expect(labels).toEqual([ 'Happy', 'Smurf', 'Beta', 'Band' ]);
    });
  });

  function compileElement (data) {
    scope.data = data;
    element = angular.element('<barchart data="data"></barchart>');
    compile(element)(scope);
    scope.$digest();
    return element;
  }

});
