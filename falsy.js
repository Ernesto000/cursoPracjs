function bouncer(arr) {

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
   
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);