app.controller('mainController', function($scope) {
    $scope.gridValues=[[0,1,0,2,0,0,0,0,5],[0,1,0,2,0,0,0,0,5],
    [0,1,0,2,0,0,0,0,5],[0,1,0,2,0,0,0,0,5],[0,1,0,2,0,0,0,0,5],[0,1,0,2,0,0,0,0,5],
    [0,1,0,2,0,0,0,0,5],[0,1,0,2,0,0,0,0,5],[0,1,0,2,0,0,0,0,5]];
    $scope.increaseVal = function(x,y) {
        if ($scope.gridValues[x][y] > 8) $scope.gridValues[x][y] = 0;
        else $scope.gridValues[x][y]++;
    }
});
