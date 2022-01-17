function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }

  //usamos el if para repetir hasta que la funcion 
  //llegue a uno sumando siempre al string guardado

  //REcursion
//   function repeatStringNumTimes(str, num) {
//     return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
//   }