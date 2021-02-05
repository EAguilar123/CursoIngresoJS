/*

Aguilar Elian


Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numeroSueldo;
	var numeroResultado;
	var numeroAumento;
	var numeroPorcentaje;

	numeroSueldo=document.getElementById('txtIdSueldo').value;
	numeroSueldo=parseInt(numeroSueldo);
	
	numeroPorcentaje=prompt("Ingrese el porcentaje","Ingrese aqui")
	numeroPorcentaje=parseInt(numeroPorcentaje);
	numeroAumento=(numeroSueldo*numeroPorcentaje)/100
	//numeroAumento=numeroSueldo*0.10;

	numeroResultado=numeroSueldo+numeroAumento;
	document.getElementById('txtIdResultado').value=numeroResultado;
	
}
