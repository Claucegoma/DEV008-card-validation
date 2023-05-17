# Proyecto: Card validation 
Claudia Cecilia González Mariblanca,Mayo 2023
 
## Índice

* [1 . Objetivos de aprendizaje]
* [1.1.Objetivos particulares]
* [2 . Preámbulo]
* [3 . Resumen del proyecto]
* [4 . Conclusión]
## 1. Objetivos de aprendizaje
*Trabajar sobre fundamentos de JavaScript, incluyendo conceptos como variables, condicionales y funciones, así como eventos y manipulación básica del DOM,y fundamentos de
 HTML y CSS. 
*Mientras se desarrolla este proyecto,familiarizarse con nuevos
conceptos.

## 1.1. Objetivos particulares

* Trabajar en base a un boilerplate, la estructura básica de un proyecto en
  distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles)
  en JavaScript
* Descargar e implementar control de versiones con git (y la plataforma github)

## 2. Preámbulo

En este proyecto se construyó una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Implementando funcionalidad para ocultar todos los dígitos de una tarjeta, menos los últimos cuatro, utilizando el Algorítmo de Luhn.
El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 3. Resumen del proyecto

Un usuario desea realizar un viaje con su familia, en esta ocasión a Suiza. En la página se le pide rellenar la interfaz con su nombre y el número de su tarjeta para posteriormente, este número sea validado y termine su compra. Sin esta validación no podrá continuar.

La interfaz tendrá las siguientes caracerísticas: 

* Pedirá insertar un número (texto) a validar. Usando sólo caracteres numéricos
  (dígitos) en la tarjeta a validar [0-9] con un máximo de 16 caracteres a ingresar.  
* Al presionar "Continuar" se hará todo el proceso de validación.
Verá si el resultado es válido o no, verificando así si la tarjeta que ingresó el usuario es válida.  
* Ocultará todos los dígitos del número de tarjeta a exepción de los últimos
  4 caracteres al presionar el botón “continuar” y sólo sucederá cuando la tarjeta sea válida, de lo contrario no se ocultarán. Si la persona ingresa un número inválido (puede ser un error al teclear), será más sencillo verificar cuál dígito ingresó mal y pueda corregirlo, sin necesidad de borrar todo el número y empezar de nuevo. 
* No debería poder ingresar un campo vacío.  
* Saldrá un mensaje de error al no insertar ningún número en el campo del número de tarjeta (campo vacío). 


Para el aspecto llamativo de la página se decidió colocar una imagen de fondo y colores en las letras que combinaran con la imagen. Un lugar particularmente llamativo para los turistas que desean viajar a ese país. lugar de la imágen: Lauterbrunnen(https://3.bp.blogspot.com/-dtPk1wgNCDE/VmXIHPk8NNI/AAAAAAAAcgs/lsPe3HSGv8k/s1600/lauterbrunnen-switzerland.jpg)


 
 Los principales usuarios de la página serían personas que estén próximas a realizar viajes.
Buscarán una compra segura y clara donde la compra sea eficiente desde el momento de poder validar su tarjeta de crédito.
El realizar una página especifica para el momento de ingresar datos personales, pienso debe de ser grande, legíble, no sólo en una ventana emergente. Que el usuario realmente se sienta motivado a comprar y no desista en el último momento. 



 
**4 .Conclusión:.** 
*Este proyecto fue fundamentado en: HTML, CSS, JavaScript.
*Se cumplieron los objetivos de aprendizaje generales y particulares.
*Se realizaron pruebas unitarias realizadas de los métodos `validator` (`isValid` y `maskify`).
*Se subió el proyecto a un repositorio de Github pages de forma pública.




