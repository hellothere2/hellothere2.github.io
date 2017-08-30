//rivalpowers battle script

function clearresults(){
	document.getElementById('battleout').innerHTML = " ";
}
function htmlbreak(){
	document.getElementById('battleout').innerHTML += "<br>";
}


function Unit(quantity, morale, training, discipline, tech, effectiveness){
	this.quantity = quantity;
	this.morale = morale;
	this.training = training;
	this.discipline = discipline;
	this.tech = tech;
	this.effectiveness = effectiveness;
}

function Artillery(){
	this.quantity = quantity;
	this.morale = morale;
	this.training = training;
	this.discipline = discipline;
	this.tech = tech;
	this.impact = impact;
	this.effectiveness = effectiveness;
}

function battle(){
	document.getElementById('battleout').innerHTML += "Test";
}




