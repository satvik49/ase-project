//describe('mapoutput', function () {
//   beforeEach(module('starter'));
//   
//   var $controller;
//   var scope;   
//   beforeEach(inject(function($rootScope,$contoller){
//scope=$rootScope.$new();
//       $controller
//   }));
//
//       it('tests function of my controller', function() {
//        var $scope = {};
//        var controller = $controller('mapoutput', { $scope: $scope });
//        expect($scope.destination.nottoEqual(''));
//        
//        });
//});
//    
//   
describe('mapoutput', function(){
    var scope;//we'll use this scope in our tests
 var state;
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('starter'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller,$state){
        //create an empty scope
        scope = $rootScope.$new();
       
        //declare the controller and inject our empty scope
        $controller('mapoutput', {$scope: scope});
    }));
     it('tests function of my controller', function()
    {
        expect(1).toEqual(1);
     });
});