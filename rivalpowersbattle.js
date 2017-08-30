//rivalpowers battle script

function clearresults(){
	document.getElementById('battleout').innerHTML = " ";
}
function br(){
	document.getElementById('battleout').innerHTML += "<br>";
}

//Unit template/repository
function Unit(quantity, morale, training, discipline, tech, effectiveness){
	this.quantity = quantity;
	this.morale = morale;
	this.training = training;
	this.discipline = discipline;
	this.tech = tech;
	this.effectiveness = effectiveness;
}

//Artillery template/repository
function Artillery(quantity, morale, training, discipline, tech, impact, effectiveness){
	this.quantity = quantity;
	this.morale = morale;
	this.training = training;
	this.discipline = discipline;
	this.tech = tech;
	this.impact = impact;
	this.effectiveness = effectiveness;
}

//terrain template/repository
function TerrainEffectiveness(Artillery, lightCav, heavyCav, mountedInf, lineInf, lightInf, meleeInf){
	this.Artillery = Artillery;
	this.lightCav = lightCav;
	this.heavyCav = heavyCav;
	this.mountedInf = mountedInf;
	this.lineInf = lineInf;
	this.lightInf = lightInf;
	this.meleeInf = meleeInf;
}


//Terrain Effectiveness

var PlainsEffectiveness = new TerrainEffectiveness(1,1,1,1,1,1,1);
PlainsEffectiveness.Artillery = 1;
PlainsEffectiveness.lightCav = 1;
PlainsEffectiveness.heavyCav = 1;
PlainsEffectiveness.mountedInf = 1;
PlainsEffectiveness.lineInf = 1;
PlainsEffectiveness.lightInf = 1;
PlainsEffectiveness.meleeInf = 1;

var HillsEffectiveness = new TerrainEffectiveness();
HillsEffectiveness.Artillery = 1;
HillsEffectiveness.lightCav = 1;
HillsEffectiveness.heavyCav = 1;
HillsEffectiveness.mountedInf = 1;
HillsEffectiveness.lineInf = 1;
HillsEffectiveness.lightInf = 1;
HillsEffectiveness.meleeInf = 1.5;

var DesertEffectiveness = new TerrainEffectiveness();
DesertEffectiveness.Artillery = 1;
DesertEffectiveness.lightCav = 1;
DesertEffectiveness.heavyCav = 1;
DesertEffectiveness.mountedInf = 1;
DesertEffectiveness.lineInf = 1;
DesertEffectiveness.lightInf = 1;
DesertEffectiveness.meleeInf = 1.25;

var TundraEffectiveness = new TerrainEffectiveness();
TundraEffectiveness.Artillery = 1;
TundraEffectiveness.lightCav = 0.8;
TundraEffectiveness.heavyCav = 0.8;
TundraEffectiveness.mountedInf = 0.8;
TundraEffectiveness.lineInf = 1;
TundraEffectiveness.lightInf = 1;
TundraEffectiveness.meleeInf = 1;

var MountainsEffectiveness = new TerrainEffectiveness();
MountainsEffectiveness.Artillery = 1;
MountainsEffectiveness.lightCav = 0.35;
MountainsEffectiveness.heavyCav = 0.35;
MountainsEffectiveness.mountedInf = 0.35;
MountainsEffectiveness.lineInf = 1.2;
MountainsEffectiveness.lightInf = 1.2;
MountainsEffectiveness.meleeInf = 2;

var ForestEffectiveness = new TerrainEffectiveness();
ForestEffectiveness.Artillery = 0.3;
ForestEffectiveness.lightCav = 0.8;
ForestEffectiveness.heavyCav = 0.8;
ForestEffectiveness.mountedInf = 0.8;
ForestEffectiveness.lineInf = 1;
ForestEffectiveness.lightInf = 1;
ForestEffectiveness.meleeInf = 2.5;

var MarshEffectiveness = new TerrainEffectiveness();
MarshEffectiveness.Artillery = 0.1;
MarshEffectiveness.lightCav = 0.2;
MarshEffectiveness.heavyCav = 0.2;
MarshEffectiveness.mountedInf = 0.2;
MarshEffectiveness.lineInf = 0.5;
MarshEffectiveness.lightInf = 0.5;
MarshEffectiveness.meleeInf = 1.5;

var JungleEffectiveness = new TerrainEffectiveness();
JungleEffectiveness.Artillery = 0.1;
JungleEffectiveness.lightCav = 0.5;
JungleEffectiveness.heavyCav = 0.5;
JungleEffectiveness.mountedInf = 0.5;
JungleEffectiveness.lineInf = 0.7;
JungleEffectiveness.lightInf = 0.7;
JungleEffectiveness.meleeInf = 4;

var UrbanEffectiveness = new TerrainEffectiveness();
UrbanEffectiveness.Artillery = 1;
UrbanEffectiveness.lightCav = 1;
UrbanEffectiveness.heavyCav = 1;
UrbanEffectiveness.mountedInf = 1;
UrbanEffectiveness.lineInf = 1;
UrbanEffectiveness.lightInf = 1;
UrbanEffectiveness.meleeInf = 1;






//Units

var A_lightInf = new Unit();
var A_lineInf = new Unit();
var A_mountedInf = new Unit();
var A_meleeInf = new Unit();
var A_lightCav = new Unit();
var A_heavyCav = new Unit();
var A_artillery = new Artillery();

var B_lightInf = new Unit();
var B_lineInf = new Unit();
var B_mountedInf = new Unit();
var B_meleeInf = new Unit();
var B_lightCav = new Unit();
var B_heavyCav = new Unit();
var B_artillery = new Artillery();



function battle(){
	//Check if loaded
	document.getElementById('battleout').innerHTML += "Unit template loaded";
	br();
	document.getElementById('battleout').innerHTML += "Artillery template loaded";
	br();
	document.getElementById('battleout').innerHTML += "Terrain loaded";
	br();

	//Declare some variables
	var A_name = document.getElementById('Force_A_input_name').value;
	var B_name = document.getElementById('Force_B_input_name').value;

	var terrain = document.getElementById('terrain_dropdown');

	A_lightInf.quantity = document.getElementById('Force_A_input_lightInfantry').value;
	A_lightInf.morale = document.getElementById('Force_A_morale_lightInfantry').value;
	A_lightInf.training = document.getElementById('Force_A_training_lightInfantry').value;
	A_lightInf.discipline = document.getElementById('Force_A_discipline_lightInfantry').value;
	A_lightInf.tech = document.getElementById('Force_A_tech_lightInfantry').value;

	A_lineInf.quantity = document.getElementById('Force_A_input_lineInfantry').value;
	A_lineInf.morale = document.getElementById('Force_A_morale_lineInfantry').value;
	A_lineInf.training = document.getElementById('Force_A_training_lineInfantry').value;
	A_lineInf.discipline = document.getElementById('Force_A_discipline_lineInfantry').value;
	A_lineInf.tech = document.getElementById('Force_A_tech_lineInfantry').value;

	A_meleeInf.quantity = document.getElementById('Force_A_input_meleeInfantry').value;
	A_meleeInf.morale = document.getElementById('Force_A_morale_meleeInfantry').value;
	A_meleeInf.training = document.getElementById('Force_A_training_meleeInfantry').value;
	A_meleeInf.discipline = document.getElementById('Force_A_discipline_meleeInfantry').value;
	A_meleeInf.tech = document.getElementById('Force_A_tech_meleeInfantry').value;

	A_mountedInf.quantity = document.getElementById('Force_A_input_mountedInfantry').value;
	A_mountedInf.morale = document.getElementById('Force_A_morale_mountedInfantry').value;
	A_mountedInf.training = document.getElementById('Force_A_training_mountedInfantry').value;
	A_mountedInf.discipline = document.getElementById('Force_A_discipline_mountedInfantry').value;
	A_mountedInf.tech = document.getElementById('Force_A_tech_mountedInfantry').value;

	A_lightCav.quantity = document.getElementById('Force_A_input_lightCavalry').value;
	A_lightCav.morale = document.getElementById('Force_A_morale_lightCavalry').value;
	A_lightCav.training = document.getElementById('Force_A_training_lightCavalry').value;
	A_lightCav.discipline = document.getElementById('Force_A_discipline_lightCavalry').value;
	A_lightCav.tech = document.getElementById('Force_A_tech_lightCavalry').value;

	A_heavyCav.quantity = document.getElementById('Force_A_input_heavyCavalry').value;
	A_heavyCav.morale = document.getElementById('Force_A_morale_heavyCavalry').value;
	A_heavyCav.training = document.getElementById('Force_A_training_heavyCavalry').value;
	A_heavyCav.discipline = document.getElementById('Force_A_discipline_heavyCavalry').value;
	A_heavyCav.tech = document.getElementById('Force_A_tech_heavyCavalry').value;

	A_artillery.quantity = document.getElementById('Force_A_input_artillery').value;
	A_artillery.morale = document.getElementById('Force_A_morale_artillery').value;
	A_artillery.training = document.getElementById('Force_A_training_artillery').value;
	A_artillery.discipline = document.getElementById('Force_A_discipline_artillery').value;
	A_artillery.tech = document.getElementById('Force_A_tech_artillery').value;
	A_artillery.impact = document.getElementById('Force_A_impact_artillery').value;



	B_lightInf.quantity = document.getElementById('Force_B_input_lightInfantry').value;
	B_lightInf.morale = document.getElementById('Force_B_morale_lightInfantry').value;
	B_lightInf.training = document.getElementById('Force_B_training_lightInfantry').value;
	B_lightInf.discipline = document.getElementById('Force_B_discipline_lightInfantry').value;
	B_lightInf.tech = document.getElementById('Force_B_tech_lightInfantry').value;

	B_lineInf.quantity = document.getElementById('Force_B_input_lineInfantry').value;
	B_lineInf.morale = document.getElementById('Force_B_morale_lineInfantry').value;
	B_lineInf.training = document.getElementById('Force_B_training_lineInfantry').value;
	B_lineInf.discipline = document.getElementById('Force_B_discipline_lineInfantry').value;
	B_lineInf.tech = document.getElementById('Force_B_tech_lineInfantry').value;

	B_meleeInf.quantity = document.getElementById('Force_B_input_meleeInfantry').value;
	B_meleeInf.morale = document.getElementById('Force_B_morale_meleeInfantry').value;
	B_meleeInf.training = document.getElementById('Force_B_training_meleeInfantry').value;
	B_meleeInf.discipline = document.getElementById('Force_B_discipline_meleeInfantry').value;
	B_meleeInf.tech = document.getElementById('Force_B_tech_meleeInfantry').value;

	B_mountedInf.quantity = document.getElementById('Force_B_input_mountedInfantry').value;
	B_mountedInf.morale = document.getElementById('Force_B_morale_mountedInfantry').value;
	B_mountedInf.training = document.getElementById('Force_B_training_mountedInfantry').value;
	B_mountedInf.discipline = document.getElementById('Force_B_discipline_mountedInfantry').value;
	B_mountedInf.tech = document.getElementById('Force_B_tech_mountedInfantry').value;

	B_lightCav.quantity = document.getElementById('Force_B_input_lightCavalry').value;
	B_lightCav.morale = document.getElementById('Force_B_morale_lightCavalry').value;
	B_lightCav.training = document.getElementById('Force_B_training_lightCavalry').value;
	B_lightCav.discipline = document.getElementById('Force_B_discipline_lightCavalry').value;
	B_lightCav.tech = document.getElementById('Force_B_tech_lightCavalry').value;

	B_heavyCav.quantity = document.getElementById('Force_B_input_heavyCavalry').value;
	B_heavyCav.morale = document.getElementById('Force_B_morale_heavyCavalry').value;
	B_heavyCav.training = document.getElementById('Force_B_training_heavyCavalry').value;
	B_heavyCav.discipline = document.getElementById('Force_B_discipline_heavyCavalry').value;
	B_heavyCav.tech = document.getElementById('Force_B_tech_heavyCavalry').value;

	B_artillery.quantity = document.getElementById('Force_B_input_artillery').value;
	B_artillery.morale = document.getElementById('Force_B_morale_artillery').value;
	B_artillery.training = document.getElementById('Force_B_training_artillery').value;
	B_artillery.discipline = document.getElementById('Force_B_discipline_artillery').value;
	B_artillery.tech = document.getElementById('Force_B_tech_artillery').value;
	B_artillery.impact = document.getElementById('Force_B_impact_artillery').value;

	document.getElementById('battleout').innerHTML += "Units for both sides have been loaded, applying effectiveness based on terrain";
	br();

	if (terrain.selectedIndex == 0){ //Desert
		document.getElementById('battleout').innerHTML += "Desert Terrain";
		A_lightInf.effectiveness = DesertEffectiveness.lightInf;
		A_lineInf.effectiveness = DesertEffectiveness.lineInf;
		A_meleeInf.effectiveness = DesertEffectiveness.meleeInf;
		A_mountedInf.effectiveness = DesertEffectiveness.mountedInf;
		A_lightCav.effectiveness = DesertEffectiveness.lightCav;
		A_heavyCav.effectiveness = DesertEffectiveness.heavyCav;
		A_artillery.effectiveness = DesertEffectiveness.Artillery;
		B_lightInf.effectiveness = DesertEffectiveness.lightInf;
		B_lineInf.effectiveness = DesertEffectiveness.lineInf;
		B_meleeInf.effectiveness = DesertEffectiveness.meleeInf;
		B_mountedInf.effectiveness = DesertEffectiveness.mountedInf;
		B_lightCav.effectiveness = DesertEffectiveness.lightCav;
		B_heavyCav.effectiveness = DesertEffectiveness.heavyCav;
		B_artillery.effectiveness = DesertEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 1){ //Forest
		document.getElementById('battleout').innerHTML += "Forest Terrain";
		A_lightInf.effectiveness = ForestEffectiveness.lightInf;
		A_lineInf.effectiveness = ForestEffectiveness.lineInf;
		A_meleeInf.effectiveness = ForestEffectiveness.meleeInf;
		A_mountedInf.effectiveness = ForestEffectiveness.mountedInf;
		A_lightCav.effectiveness = ForestEffectiveness.lightCav;
		A_heavyCav.effectiveness = ForestEffectiveness.heavyCav;
		A_artillery.effectiveness = ForestEffectiveness.Artillery;
		B_lightInf.effectiveness = ForestEffectiveness.lightInf;
		B_lineInf.effectiveness = ForestEffectiveness.lineInf;
		B_meleeInf.effectiveness = ForestEffectiveness.meleeInf;
		B_mountedInf.effectiveness = ForestEffectiveness.mountedInf;
		B_lightCav.effectiveness = ForestEffectiveness.lightCav;
		B_heavyCav.effectiveness = ForestEffectiveness.heavyCav;
		B_artillery.effectiveness = ForestEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 2){ //Hills
		document.getElementById('battleout').innerHTML += "Hills Terrain";
		A_lightInf.effectiveness = HillsEffectiveness.lightInf;
		A_lineInf.effectiveness = HillsEffectiveness.lineInf;
		A_meleeInf.effectiveness = HillsEffectiveness.meleeInf;
		A_mountedInf.effectiveness = HillsEffectiveness.mountedInf;
		A_lightCav.effectiveness = HillsEffectiveness.lightCav;
		A_heavyCav.effectiveness = HillsEffectiveness.heavyCav;
		A_artillery.effectiveness = HillsEffectiveness.Artillery;
		B_lightInf.effectiveness = HillsEffectiveness.lightInf;
		B_lineInf.effectiveness = HillsEffectiveness.lineInf;
		B_meleeInf.effectiveness = HillsEffectiveness.meleeInf;
		B_mountedInf.effectiveness = HillsEffectiveness.mountedInf;
		B_lightCav.effectiveness = HillsEffectiveness.lightCav;
		B_heavyCav.effectiveness = HillsEffectiveness.heavyCav;
		B_artillery.effectiveness = HillsEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 3){ //Jungle
		document.getElementById('battleout').innerHTML += "Jungle Terrain";
		A_lightInf.effectiveness = JungleEffectiveness.lightInf;
		A_lineInf.effectiveness = JungleEffectiveness.lineInf;
		A_meleeInf.effectiveness = JungleEffectiveness.meleeInf;
		A_mountedInf.effectiveness = JungleEffectiveness.mountedInf;
		A_lightCav.effectiveness = JungleEffectiveness.lightCav;
		A_heavyCav.effectiveness = JungleEffectiveness.heavyCav;
		A_artillery.effectiveness = JungleEffectiveness.Artillery;
		B_lightInf.effectiveness = JungleEffectiveness.lightInf;
		B_lineInf.effectiveness = JungleEffectiveness.lineInf;
		B_meleeInf.effectiveness = JungleEffectiveness.meleeInf;
		B_mountedInf.effectiveness = JungleEffectiveness.mountedInf;
		B_lightCav.effectiveness = JungleEffectiveness.lightCav;
		B_heavyCav.effectiveness = JungleEffectiveness.heavyCav;
		B_artillery.effectiveness = JungleEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 4){ //Marsh
		document.getElementById('battleout').innerHTML += "Marsh Terrain";
		A_lightInf.effectiveness = MarshEffectiveness.lightInf;
		A_lineInf.effectiveness = MarshEffectiveness.lineInf;
		A_meleeInf.effectiveness = MarshEffectiveness.meleeInf;
		A_mountedInf.effectiveness = MarshEffectiveness.mountedInf;
		A_lightCav.effectiveness = MarshEffectiveness.lightCav;
		A_heavyCav.effectiveness = MarshEffectiveness.heavyCav;
		A_artillery.effectiveness = MarshEffectiveness.Artillery;
		B_lightInf.effectiveness = MarshEffectiveness.lightInf;
		B_lineInf.effectiveness = MarshEffectiveness.lineInf;
		B_meleeInf.effectiveness = MarshEffectiveness.meleeInf;
		B_mountedInf.effectiveness = MarshEffectiveness.mountedInf;
		B_lightCav.effectiveness = MarshEffectiveness.lightCav;
		B_heavyCav.effectiveness = MarshEffectiveness.heavyCav;
		B_artillery.effectiveness = MarshEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 5){ //Mountain
		document.getElementById('battleout').innerHTML += "Mountain Terrain";
		A_lightInf.effectiveness = MountainsEffectiveness.lightInf;
		A_lineInf.effectiveness = MountainsEffectiveness.lineInf;
		A_meleeInf.effectiveness = MountainsEffectiveness.meleeInf;
		A_mountedInf.effectiveness = MountainsEffectiveness.mountedInf;
		A_lightCav.effectiveness = MountainsEffectiveness.lightCav;
		A_heavyCav.effectiveness = MountainsEffectiveness.heavyCav;
		A_artillery.effectiveness = MountainsEffectiveness.Artillery;
		B_lightInf.effectiveness = MountainsEffectiveness.lightInf;
		B_lineInf.effectiveness = MountainsEffectiveness.lineInf;
		B_meleeInf.effectiveness = MountainsEffectiveness.meleeInf;
		B_mountedInf.effectiveness = MountainsEffectiveness.mountedInf;
		B_lightCav.effectiveness = MountainsEffectiveness.lightCav;
		B_heavyCav.effectiveness = MountainsEffectiveness.heavyCav;
		B_artillery.effectiveness = MountainsEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 6){ //Plains
		document.getElementById('battleout').innerHTML += "Plains Terrain";
		A_lightInf.effectiveness = PlainsEffectiveness.lightInf;
		A_lineInf.effectiveness = PlainsEffectiveness.lineInf;
		A_meleeInf.effectiveness = PlainsEffectiveness.meleeInf;
		A_mountedInf.effectiveness = PlainsEffectiveness.mountedInf;
		A_lightCav.effectiveness = PlainsEffectiveness.lightCav;
		A_heavyCav.effectiveness = PlainsEffectiveness.heavyCav;
		A_artillery.effectiveness = PlainsEffectiveness.Artillery;
		B_lightInf.effectiveness = PlainsEffectiveness.lightInf;
		B_lineInf.effectiveness = PlainsEffectiveness.lineInf;
		B_meleeInf.effectiveness = PlainsEffectiveness.meleeInf;
		B_mountedInf.effectiveness = PlainsEffectiveness.mountedInf;
		B_lightCav.effectiveness = PlainsEffectiveness.lightCav;
		B_heavyCav.effectiveness = PlainsEffectiveness.heavyCav;
		B_artillery.effectiveness = PlainsEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 7){ //Tundra
		document.getElementById('battleout').innerHTML += "Tundra Terrain";
		A_lightInf.effectiveness = TundraEffectiveness.lightInf;
		A_lineInf.effectiveness = TundraEffectiveness.lineInf;
		A_meleeInf.effectiveness = TundraEffectiveness.meleeInf;
		A_mountedInf.effectiveness = TundraEffectiveness.mountedInf;
		A_lightCav.effectiveness = TundraEffectiveness.lightCav;
		A_heavyCav.effectiveness = TundraEffectiveness.heavyCav;
		A_artillery.effectiveness = TundraEffectiveness.Artillery;
		B_lightInf.effectiveness = TundraEffectiveness.lightInf;
		B_lineInf.effectiveness = TundraEffectiveness.lineInf;
		B_meleeInf.effectiveness = TundraEffectiveness.meleeInf;
		B_mountedInf.effectiveness = TundraEffectiveness.mountedInf;
		B_lightCav.effectiveness = TundraEffectiveness.lightCav;
		B_heavyCav.effectiveness = TundraEffectiveness.heavyCav;
		B_artillery.effectiveness = TundraEffectiveness.Artillery;
	} else if (terrain.selectedIndex == 8){ //Urban
		document.getElementById('battleout').innerHTML += "Urban Terrain";
		A_lightInf.effectiveness = UrbanEffectiveness.lightInf;
		A_lineInf.effectiveness = UrbanEffectiveness.lineInf;
		A_meleeInf.effectiveness = UrbanEffectiveness.meleeInf;
		A_mountedInf.effectiveness = UrbanEffectiveness.mountedInf;
		A_lightCav.effectiveness = UrbanEffectiveness.lightCav;
		A_heavyCav.effectiveness = UrbanEffectiveness.heavyCav;
		A_artillery.effectiveness = UrbanEffectiveness.Artillery;
		B_lightInf.effectiveness = UrbanEffectiveness.lightInf;
		B_lineInf.effectiveness = UrbanEffectiveness.lineInf;
		B_meleeInf.effectiveness = UrbanEffectiveness.meleeInf;
		B_mountedInf.effectiveness = UrbanEffectiveness.mountedInf;
		B_lightCav.effectiveness = UrbanEffectiveness.lightCav;
		B_heavyCav.effectiveness = UrbanEffectiveness.heavyCav;
		B_artillery.effectiveness = UrbanEffectiveness.Artillery;
	}
	br();


	//Recon Phase
	br();
	document.getElementById('battleout').innerHTML += "Recon Phase";
	br();
	///recon rolls
	document.getElementById('battleout').innerHTML += A_name + " rolls d20... ";
	reconrolla = Math.floor(Math.random() * 20) + 1;
	document.getElementById('battleout').innerHTML += reconrolla;
	br();
	document.getElementById('battleout').innerHTML += B_name + " rolls d20... ";
	reconrollb = Math.floor(Math.random() * 20) + 1;
	document.getElementById('battleout').innerHTML += reconrollb;
	br();

	//Bombardment Phase
	br();
	document.getElementById('battleout').innerHTML += "Bombardment phase";
	br();
	var a_firepower = A_artillery.quantity * A_artillery.tech * A_artillery.impact;
	var b_firepower = B_artillery.quantity * B_artillery.tech * B_artillery.impact;
	var A_artilleryModifier = (a_firepower / b_firepower)*A_artillery.effectiveness;
	var B_artilleryModifier = (b_firepower / a_firepower)*B_artillery.effectiveness;
	if (A_artilleryModifier > 2.5){
		A_artilleryModifier = 2.5;
	}
	if (B_artilleryModifier > 2.5){
		B_artilleryModifier = 2.5;
	}
	artydmga = (Math.floor(Math.random() * 20) + 1)*A_artilleryModifier*A_artillery.training*0.1;
	artydmgb = (Math.floor(Math.random() * 20) + 1)*B_artilleryModifier*B_artillery.training*0.1;

	artymoraledmga = (Math.floor(Math.random() * 10) + 1)*A_artilleryModifier*0.3;
	artymoraledmgb = (Math.floor(Math.random() * 10) + 1)*B_artilleryModifier*0.3;

	document.getElementById('battleout').innerHTML+=A_name+"'s artillery causes "+artydmga+" casualties";
	br();
	document.getElementById('battleout').innerHTML+=B_name+"'s artillery causes "+artydmgb+" casualties";
	br();



	//Skirmish Phase
	br();
	document.getElementById('battleout').innerHTML += "Skirmish phase";
	br();




	//Line Battle Phase
	br();
	document.getElementById('battleout').innerHTML += "Line Battle phase";
	br();



	//Pursuit
	br();
	document.getElementById('battleout').innerHTML += "Pursuit Phase";
	br();
}




