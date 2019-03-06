/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (var i = 1; i <= preferences.length; i++) {
    if (checkTriangle(i, preferences)){
      count++;
    }
  }
  
  return count/3;
};
function checkTriangle(i, preferences) {

  let a1 = preferences[i-1];
  let a2 = preferences[a1-1];
  let a3 = preferences[a2-1];
  return i == a3 && i != a1 && i != a2;
}
