app.controller('mainController', function($scope) {
   $scope.gridValues = [9];
   $scope.possibles = [9];
   for (var i = 0; i < 9; i++)
   {
        $scope.gridValues[i] = [9];
        $scope.possibles[i] = [9];
        for (var j=0; j < 9; j++)
        {
            $scope.possibles[i][j] = [1,2,3,4,5,6,7,8,9];
            $scope.gridValues[i][j] = 0;
        }
    }
    $scope.increaseVal = function(x,y) {
        if ($scope.gridValues[x][y] > 8) $scope.gridValues[x][y] = 0;
        else $scope.gridValues[x][y]++;
    }
    $scope.scanAndUpdate = function(x,y)
    {
      for (var i = 0; i < 9; i++)
      {
          var checkVal = $scope.gridValues[i][y];
          if (checkVal > 0)
          {
            ////alert("RESETTING:" + i + "," + y + "," + checkVal);
            $scope.possibles[x][y][checkVal-1] = 0;
            $scope.log4 = $scope.possibles[x][y];
          }
          checkVal = $scope.gridValues[x][i];
          if (checkVal > 0)
          {
            ////alert("RESETTING:" + x + "," + i + "," + checkVal);
            $scope.possibles[x][y][checkVal-1] = 0;
            $scope.log4 = $scope.possibles[x][y];
          }
       }

       var numberNonZeroElements = 0;
       var lastNonZeroElement = 0;
       for (var i = 0; i < 9; i++)
       {
         if ($scope.possibles[x][y][i] != 0)
         {
           numberNonZeroElements++;
           lastNonZeroElement = $scope.possibles[x][y][i];
         }
       }

      if (numberNonZeroElements == 1)
      {
        $scope.gridValues[x][y] = lastNonZeroElement;
      }
    }

    $scope.solve = function() {
        $scope.log1 = "Solving...";
       for (var i = 0; i < 9; i++)
        {
            $scope.log2 = i;
             for (var j=0; j < 9; j++)
             {
               $scope.log3 = j;
                 if ($scope.gridValues[i][j] == 0)
                 {
                   $scope.scanAndUpdate(i,j);
                 }
             }
         }
         $scope.log1 = "Solved";
    }
});
