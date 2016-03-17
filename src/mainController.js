app.controller('mainController', function($scope) {
   $scope.gridValues = [9];
   for (i = 0; i < 10; i++)
   {
        $scope.gridValues[i] = [9];
        for (j=0; j < 10; j++)
        {
            $scope.gridValues[i][j] = 0;
        }
    }
    $scope.increaseVal = function(x,y) {
        if ($scope.gridValues[x][y] > 8) $scope.gridValues[x][y] = 0;
        else $scope.gridValues[x][y]++;
    }
    $scope.solve = function() {
        $scope.log1 = "Solving...";
        for (i = 0; i < 10; i++)
        {
            $scope.log2 = i;
             for (j=0; j < 10; j++)
             {
                 $scope.log3 = j;
             }
         }
         $scope.log1 = "Solved";
    }
});
