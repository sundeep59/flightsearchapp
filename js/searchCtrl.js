angular.module("flightSearchApp", [])
    .controller("SearchCtrl", ['$scope', '$http', function ($scope, $http) {
        var fare, res;
        $scope.filterData = [];
        var data = {
          "flights": [
            {
              "id":"1",
              "image": "images/airindialogo.jpg",
              "book": "Book this flight",
              "from": "New Delhi",
              "to": "Mumbai",
              "flightoneway": "AI-101",
              "flightreturn": "AI-102",
              "fare": "Rs. 4000",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "space": "."
            },{
              "id":"2",
              "image": "images/indigologo.jpg",
              "from": "Mumbai",
              "to": "Calcutta",
              "flightoneway": "IN-201",
              "flightreturn": "IN-202",
              "fare": "Rs. 6000",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"3",
              "image": "images/indigologo.jpg",
              "from": "Mumbai",
              "to": "Calcutta",
              "flightoneway": "AI-101",
              "flightreturn": "AI-102",
              "fare": "Rs. 3500",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"4",
              "image": "images/emirateslogo.jpg",
              "from": "Calcutta",
              "to": "New Delhi",
              "flightoneway": "ER-201",
              "flightreturn": "ER-202",
              "fare": "Rs. 5000",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"5",
              "image": "images/emirateslogo.jpg",
              "from": "Calcutta",
              "to": "New Delhi",
              "flightoneway": "AI-101",
              "flightreturn": "AI-102",
              "fare": "Rs. 5500",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"6",
              "image": "images/jetairwayslogo.jpg",
              "from": "Bangalore",
              "to": "Hyderabad",
              "flightoneway": "JA-101",
              "flightreturn": "JA-102",
              "fare": "Rs. 3500",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"7",
              "image": "images/spicejetlogo.jpg",
              "from": "Chennai",
              "to": "Bangalore",
              "flightoneway": "SJ-101",
              "flightreturn": "SJ-102",
              "fare": "Rs. 4500",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"8",
              "image": "images/jetairwayslogo.jpg",
              "from": "Bangalore",
              "to": "Hyderabad",
              "flightoneway": "JA-201",
              "flightreturn": "JA-202",
              "fare": "Rs. 2500",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            },
            {
              "id":"9",
              "image": "images/spicejetlogo.jpg",
              "from": "Chennai",
              "to": "Bangalore",
              "flightoneway": "SJ-201",
              "flightreturn": "SJ-202",
              "fare": "Rs. 3000",
              "depart1": "18:00 PM",
              "arrive1": "20:10 PM",
              "depart2": "01:00 PM",
              "arrive2": "03:10 PM",
              "book": "Book this flight",
              "space": "."
            }
          ]
        }
            $scope.flightData = data.flights;
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
]);