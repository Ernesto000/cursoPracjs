// Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays 
//with the length provided by size (second argument). There are 4 green checks (objectives) 
//our code needs to pass in order to complete this Algorithm:

// (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
// ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
// ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
// ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }

