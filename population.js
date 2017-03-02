//Population Model


function clearresults(){

document.getElementById('out').innerHTML = " ";

}

//Logistic Growth

function LogisticGrowth(){


var t = document.getElementById('time').value;//time
var initial = document.getElementById('initialpopulation').value;//initial population
var MaxPopulation = document.getElementById('K').value; //population ceiling
var r = document.getElementById('r').value; //annual growth rate

var ixv = (MaxPopulation - initial);
var lkj = (-r*t);
var e = Math.exp(lkj);
var bottom = initial + (ixv * e);
var top = initial * MaxPopulation;
var equation = top / bottom;

if(equation>MaxPopulation){
	equation = MaxPopulation;
}

if(isNaN(equation)){
	document.getElementById('out').innerHTML += "Error </br>";
} else document.getElementById('out').innerHTML += "<table> <tr> <th>Year</th> <th>Population</th>  </tr> <tr> <td>" + t + "</th> <td>" + equation + "</th>  </tr> </table> Population after " + t + " years = " + equation + "</br>";

}

function findmaxpop(){


var t = document.getElementById('time').value;//time
var initial = document.getElementById('initialpopulation').value;//initial population
var population = document.getElementById('currentpop').value

var popdivision = population/initial;
var frequency = 1/t;

growthrate = Math.pow(popdivision,frequency);
growthrate = growthrate - 1;
growthrate = Math.round(growthrate * 100000) / 100000;

document.getElementById('out').innerHTML += "Growth rate = " + growthrate + " </br>";

var lkj = (-growthrate*t);
var e = Math.exp(lkj);
var bottom = e - initial;
var top = (initial * e) - (population*t);
var equation = top / bottom;


if(isNaN(equation)){

document.getElementById('out').innerHTML += "Error </br>";

} else if(equation<0){
	document.getElementById('out').innerHTML += "Error </br>";
} else document.getElementById('out').innerHTML += "Maximum population = " + equation + "</br>";

}





function findgrowthrate(){

var t = document.getElementById('time').value;//time
var initial = document.getElementById('initialpopulation').value;//initial population
var population = document.getElementById('currentpop').value

var popdivision = population/initial;
var frequency = 1/t;

growthrate = Math.pow(popdivision,frequency);
growthrate = growthrate - 1;
growthrate = Math.round(growthrate * 100000) / 100000;

document.getElementById('out').innerHTML += "Growth rate = " + growthrate + " </br>";

}