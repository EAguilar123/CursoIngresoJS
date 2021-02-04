/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	mensaje="La suma es: "+resultado;


	alert(mensaje);

}

function restar()
{

	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno-numeroDos;
	mensaje="La resta es: "+resultado;


	alert(mensaje);	
	
}

function multiplicar()
{ 
	
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;
	mensaje="La multiplicación es: "+resultado;


	alert(mensaje);	
	
}

function dividir()
{
	
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno/numeroDos;
	mensaje="La división es: "+resultado;


	alert(mensaje);	
	
}

