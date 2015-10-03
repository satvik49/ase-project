// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  
.controller('mapoutput', function ($scope,$http) {

    var map;
    var map_spec;
    var directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true
    });
    var directionsService = new google.maps.DirectionsService();

    $scope.initialize = function () {
          var pos = new google.maps.LatLng(0, 0); 
          var map_spec = {
                zoom: 3,
                center: pos
            };

            map = new google.maps.Map(document.getElementById('map-canvas'),
            map_spec);
     };
    $scope.findOut = function () {
       var start = "kansas city, rockhill road, 64110";
            var end = document.getElementById('destination').value;

            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            		};

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setMap(map);
                    directionsDisplay.setDirections(response);
                    console.log(status);
                						}
           
        								});
		var distance = new google.maps.DistanceMatrixService;
	distance.getDistanceMatrix({
    origins: [start],
    destinations: [end],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  				}, function(response, status) {
								
    							if (status !== google.maps.DistanceMatrixStatus.OK) {
      							alert('Error was: ' + status);
    													     } 
													     else {
															
      															var originList = response.originAddresses;
      															var destinationList = response.destinationAddresses;
      															var outputDiv = document.getElementById('output_distance');
															
      															outputDiv.innerHTML = '';
															
      															
															
															var results = response.rows[0].elements;
															
															outputDiv.innerHTML = originList + '       to       ' + destinationList +
              															':           ' + results[0].distance.text +  '<br>';
    														    };

    
								});




				

	


	
                
                     

				
          





    					};

	google.maps.event.addDomListener(window, 'load', $scope.initialize);

    
});
