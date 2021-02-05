/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var perimetroR;
	
	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;
	//radio=document.getElementById('txtIdRadio').value;

	perimetroR=(2*largo)+(2*ancho);
	perimetroR=parseInt(perimetroR);

	alert("La cantidad de alambre a comprar es "+perimetroR+" metros.")


}
function Circulo () 
{
	
	//var largo;
	//var ancho;
	var radio;
	var	perimetroC;

	//largo=document.getElementById('txtIdLargo').value;
	//ancho=document.getElementById('txtIdAncho').value;
	radio=document.getElementById('txtIdRadio').value;

	perimetroC=2*3.14*radio;

	alert("La cantidad de alambre a comprar es "+perimetroC+" metros.");


}
function Materiales () 
{
	
	var cemento;
	var cal;
	var	perimetroR;

	cemento=2;
	cal=3;

	


}