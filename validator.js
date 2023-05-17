const validator = {//objeto
  isValid: function (valuenumber) {//es diferente porque está dentro de un objeto
    valuenumber = valuenumber.split("");//split toma cada elemento, con split se convierte en arreglo

    for (let primeraposicion = 0; primeraposicion < valuenumber.length / 2; primeraposicion++) {//++para que vaya uno en uno
      const ultimaposicion = valuenumber.length - 1;//el -1 es para que tome desde la primera posicion"0"
      const z = ultimaposicion - primeraposicion;//para ir recorriendo hacia el centro por ambos lados en la iteracion

      const ultimovalor = valuenumber[z];
      valuenumber[z] = valuenumber[primeraposicion];
      valuenumber[primeraposicion] = ultimovalor;//pastillero
    }
    for (let impares = 1; impares < valuenumber.length; impares = impares + 2) {//el "2"es para irse de dos en dos
      valuenumber[impares] = Number(valuenumber[impares]) * 2;//"number"para no tomarlo en cadena, solo tomar numeros
      if (valuenumber[impares] > 9) {
        valuenumber[impares] = valuenumber[impares] - 9;
      }

    }

    let total = 0
    for (let primeraposicion = 0; primeraposicion < valuenumber.length; primeraposicion++) {
      valuenumber[primeraposicion] = Number(valuenumber[primeraposicion]);//para sumar los numeros
      total = total + valuenumber[primeraposicion];

    }
    return total % 10 === 0;//el residuo debe de terminar en cero para que funcione el algoritmo
  },


  maskify: function (valuenumber) {
    const ultimaposicion = valuenumber.length - 1;
    let mask = ""//cadena vacia se contruye al iterar sustituyendo el número del valor por"#"
    for (let ocultar = 0; ocultar < valuenumber.length; ocultar++) {
      if (ocultar > ultimaposicion - 4) {
        mask = mask + valuenumber[ocultar];

      } else {
        mask = mask + "#";
      }
    }
    return mask;
  }




}





export default validator;
