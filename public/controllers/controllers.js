/**
 * Created by shiyanghuang on 15/6/30.
 */

angular.module('contactlistapp',[])
    .controller('controller', function($scope, $http) {
    console.log("Hello word from controller");
    var refresh = function () {
        $scope.contactlist = [];
        $http.get('/contactlist').success(function(data) {
            console.log("I got data");
            $scope.contactlist = data;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(data) {
            console.log(data);
            refresh();
        });
    };
    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/contactlist/' + id).success( function (data) {
            refresh();
        });
    };
    $scope.edit = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function (data) {
            $scope.contact = data;
        });
    };

    $scope.update = function () {
        console.log($scope.contact);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (data) {
            console.log(data);
            refresh();
        });
    };

    $scope.deselect = function () {
        $scope.contact = "";
    };
});