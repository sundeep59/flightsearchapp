angular.module("flightSearchApp", [])
    .controller("SearchCtrl", ['$scope', '$http', function ($scope, $http) {
        var fare, res;
        $scope.filterData = [];
        $http.get('C:\\Users\\vethota\\Documents\\Sundeep\\Downloads data\\UI Assignment\\data\\flightsData.json').success(function (data) {
            $scope.flightData = data.flights;
        });
        $scope.cities = [
            {city: "Bangalore"},
            {city: "Hyderabad"},
            {city: "Pune"},
            {city: "Cochin"},
            {city: "New Delhi"},
            {city: "Calcutta"},
            {city: "Chennai"}
        ];
        $scope.from = $scope.cities[0].city;
//        console.log($scope.from);
        $scope.to = $scope.cities[1].city;
        $scope.departDate = {value: new Date(2016, 5, 02)};
        $scope.returnDate = {value: new Date(2013, 5, 03)};
        $scope.passengers = [
            {value: "1"},
            {value: "2"},
            {value: "3"},
            {value: "4"},
            {value: "5"},
            {value: "6"}

        ];
        fare = document.getElementById("price"),
            res = document.getElementById("result");

        fare.addEventListener("input", function () {
            res.innerHTML = "Rs. " + fare.value;

        }, false);
    }
        /*  .filter('flightDataFilter', [function () {
         return function (flightData, filterData) {
         if (!angular.isUndefined(flightData) && !angular.isUndefined(filterData) && filterData.length > 0) {
         angular.forEach(filterData, function (from) {
         angular.forEach(flightData, function (flight) {
         if (angular.equals(flight.from, from)) {
         $scope.flightData.push(flight);
         }
         });
         });
         return $scope.flightData;
         } else {
         return $scope.flightData;
         }
         };

         }])*/]);