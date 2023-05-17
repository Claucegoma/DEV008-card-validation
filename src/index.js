import validator from './validator.js';
function validar() {//para la funcionalidad del botoncito
  const cajanum = document.getElementById("cardnumber");//llama a toda la caja a insertar número
  const valuenumber = cajanum.value;//para tener unicamente el valor numerico

  if (valuenumber.length <= 0) {
    alert("Ingresa número de tarjeta")
    return;//esto sirve para que sin esto anterior no pueda continuar(fila de disney)
  }
  const result = validator.isValid(valuenumber)//esto es llamar a la funcion del validator

  if (result) {
    cajanum.value = validator.maskify(valuenumber)
    alert("¡¡ Tarjeta válida <3 !!")
  } else {
    alert("Tarjeta inválida:(")
  }

}











document.getElementById("Clickcontinuar").addEventListener("click", validar);//para llamar el id de html;evento"click"