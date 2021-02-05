/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensajeDeRespuesta;

	nombreIngresado=prompt("Ingrese su nombre");
	//prompt(mensajeDeRespuesta="su nombre es : "+nombre);	

	mensajeDeRespuesta="Su nombre es: "+nombreIngresado;
	//nombre= prompt("ingrese nombre");

	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;
	//document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//mostrando

	//alert(mensajeDeRespuesta="su nombre es : "+nombre);

}
/*
salida 
	alert()
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//muestra el valor

ingreso
	=prompt()
	nombreIngresado=document.getElementById('txtIdNombre').value;// toma el valor 


*/

