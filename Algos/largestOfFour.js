function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

// //solution declarativa
// function largestOfFour(arr) {
//     return arr.map(Function.apply.bind(Math.max, null));
//   }

//We build a special callback function (using the Function.bind method)
// that works just like Math.max but also has Function.prototype.apply's 
//ability to take arrays as its arguments.