/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensajeDeRespuesta;


	alert(mensajeDeRespuesta="su nombre es : "+nombre);	


	nombre= prompt("ingrese nombre");

	
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//mostrando

	alert(mensajeDeRespuesta="su nombre es : "+nombre);

}
/*
salida 
	alert()
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//muestra el valor

ingreso
	=prompt()
	nombreIngresado=document.getElementById('txtIdNombre').value;// toma el valor 


*/

