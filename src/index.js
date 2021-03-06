/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) 
{
  var loversCounter=0;
  
  for (var i=0; i<preferences.length; i++)
  {
    
    if (preferences[i]== i+1) continue;
    
    var first = preferences[i];
    var second = preferences[first-1];
    var third = preferences[second-1];

    if (third == i+1)
      {
        loversCounter++;
      }
  }
  
  return loversCounter/3;

  // your implementation
};
