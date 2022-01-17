function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

//The first parameter inside the slice method is 
//the starting index and the second parameter would be the ending index.
//For example str.slice(10, 17) would return give me.