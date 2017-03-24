//https://hellothere2.github.io/


function clearresults() {
  document.getElementById('out').innerHTML = " ";
}


function battle(){

}


function skirmish(){

}

function Melee(){

}

function Pursue(){

}



function test(){
	document.getElementById('out').innerHTML += "Test <br>";
	function.window test2();
}


function test2(){
	document.getElementById('out').innerHTML += "Test2 <br>";
}

var Aleftflankcomposition_infantry = parseInt(document.getElementById('A_left_inf').value);
var Aleftflankcomposition_heavyinfantry = parseInt(document.getElementById('A_left_hinf').value);
var Aleftflankcomposition_pikemen = parseInt(document.getElementById('A_left_pike').value);
var Aleftflankcomposition_lightcavalry = parseInt(document.getElementById('A_left_lightcav').value);
var Aleftflankcomposition_heavycavalry = parseInt(document.getElementById('A_left_hcav').value);
var Aleftflankcomposition_archers = parseInt(document.getElementById('A_left_arch').value);
var Aleftflankcomposition_horsearchers = parseInt(document.getElementById('A_left_horsearch').value);
var Aleftflankcomposition_warelephants = parseInt(document.getElementById('A_left_warelephants').value);
var Aleftflankcomposition_camelcavalry = parseInt(document.getElementById('A_left_camelcavalry').value);

var Amidflankcomposition_infantry = parseInt(document.getElementById('A_mid_inf').value);
var Amidflankcomposition_heavyinfantry = parseInt(document.getElementById('A_mid_hinf').value);
var Amidflankcomposition_pikemen = parseInt(document.getElementById('A_mid_pike').value);
var Amidflankcomposition_lightcavalry = parseInt(document.getElementById('A_mid_lightcav').value);
var Amidflankcomposition_heavycavalry = parseInt(document.getElementById('A_mid_hcav').value);
var Amidflankcomposition_archers = parseInt(document.getElementById('A_mid_arch').value);
var Amidflankcomposition_horsearchers = parseInt(document.getElementById('A_mid_horsearch').value);
var Amidflankcomposition_warelephants = parseInt(document.getElementById('A_mid_warelephants').value);
var Amidflankcomposition_camelcavalry = parseInt(document.getElementById('A_mid_camelcavalry').value);

var Arightflankcomposition_infantry = parseInt(document.getElementById('A_right_inf').value);
var Arightflankcomposition_heavyinfantry = parseInt(document.getElementById('A_right_hinf').value);
var Arightflankcomposition_pikemen = parseInt(document.getElementById('A_right_pike').value);
var Arightflankcomposition_lightcavalry = parseInt(document.getElementById('A_right_lightcav').value);
var Arightflankcomposition_heavycavalry = parseInt(document.getElementById('A_right_hcav').value);
var Arightflankcomposition_archers = parseInt(document.getElementById('A_right_arch').value);
var Arightflankcomposition_horsearchers = parseInt(document.getElementById('A_right_horsearch').value);
var Arightflankcomposition_warelephants = parseInt(document.getElementById('A_right_warelephants').value);
var Arightflankcomposition_camelcavalry = parseInt(document.getElementById('A_right_camelcavalry').value);


var Bleftflankcomposition_infantry = parseInt(document.getElementById('B_left_inf').value);
var Bleftflankcomposition_heavyinfantry = parseInt(document.getElementById('B_left_hinf').value);
var Bleftflankcomposition_pikemen = parseInt(document.getElementById('B_left_pike').value);
var Bleftflankcomposition_lightcavalry = parseInt(document.getElementById('B_left_lightcav').value);
var Bleftflankcomposition_heavycavalry = parseInt(document.getElementById('B_left_hcav').value);
var Bleftflankcomposition_archers = parseInt(document.getElementById('B_left_arch').value);
var Bleftflankcomposition_horsearchers = parseInt(document.getElementById('B_left_horsearch').value);
var Bleftflankcomposition_warelephants = parseInt(document.getElementById('B_left_warelephants').value);
var Bleftflankcomposition_camelcavalry = parseInt(document.getElementById('B_left_camelcavalry').value);

var Bmidflankcomposition_infantry = parseInt(document.getElementById('B_mid_inf').value);
var Bmidflankcomposition_heavyinfantry = parseInt(document.getElementById('B_mid_hinf').value);
var Bmidflankcomposition_pikemen = parseInt(document.getElementById('B_mid_pike').value);
var Bmidflankcomposition_lightcavalry = parseInt(document.getElementById('B_mid_lightcav').value);
var Bmidflankcomposition_heavycavalry = parseInt(document.getElementById('B_mid_hcav').value);
var Bmidflankcomposition_archers = parseInt(document.getElementById('B_mid_arch').value);
var Bmidflankcomposition_horsearchers = parseInt(document.getElementById('B_mid_horsearch').value);
var Bmidflankcomposition_warelephants = parseInt(document.getElementById('B_mid_warelephants').value);
var Bmidflankcomposition_camelcavalry = parseInt(document.getElementById('B_mid_camelcavalry').value);

var Brightflankcomposition_infantry = parseInt(document.getElementById('B_right_inf').value);
var Brightflankcomposition_heavyinfantry = parseInt(document.getElementById('B_right_hinf').value);
var Brightflankcomposition_pikemen = parseInt(document.getElementById('B_right_pike').value);
var Brightflankcomposition_lightcavalry = parseInt(document.getElementById('B_right_lightcav').value);
var Brightflankcomposition_heavycavalry = parseInt(document.getElementById('B_right_hcav').value);
var Brightflankcomposition_archers = parseInt(document.getElementById('B_right_arch').value);
var Brightflankcomposition_horsearchers = parseInt(document.getElementById('B_right_horsearch').value);
var Brightflankcomposition_warelephants = parseInt(document.getElementById('B_right_warelephants').value);
var Brightflankcomposition_camelcavalry = parseInt(document.getElementById('B_right_camelcavalry').value);




var troop_kill_factor = 0.015;

//flank variables
var leftflankvalueA=false; //side A left flank
var midflankvalueA=false; //side a mid flank
var rightflankvalueA=false; //side a right flank
var leftflankvalueB=false; //side b left flank
var midflankvalueB=false; //side b mid flank
var rightflankvalueB=false; //sibe b right flank

//side a flanks
if (document.getElementById('leftA').checked) {
	var leftflankvalueA = true; //side A left flank
} else var leftflankvalueA = false;
if (document.getElementById('midA').checked) {
	var midflankvalueA = true; //side A mid flank
} else var midflankvalueA = false;
if (document.getElementById('rightA').checked) {
	var rightflankvalueA = true; //side A right flank
} else var rightflankvalueA = false;

//side b flanks
if (document.getElementById('leftB').checked) {
	var leftflankvalueB = true; //side B left flank
} else var leftflankvalueB = false;
if (document.getElementById('midB').checked) {
	var midflankvalueB = true; //side B mid flank
} else var midflankvalueB = false;
if (document.getElementById('rightB').checked) {
	var rightflankvalueB = true; //side B right flank
} else var rightflankvalueB = false;

int flanks [][] = new int[2][3]; //2 rows by 3 columns
flanks[0][0] = leftflankvalueA; //side A left flank
flanks[0][1] = midflankvalueA; //side a mid flank
flanks[0][2] = rightflankvalueA; //side a right flank
flanks[1][0] = leftflankvalueB; //side b left flank
flanks[1][1] = midflankvalueB; //side b mid flank
flanks[1][2] = rightflankvalueB; //sibe b right flank


if (leftflankvalueA == leftflankvalueB){
	left fight each other
} else if (leftflankvalueA == midflankvalueB){
	left fights mid
} else if (leftflankvalueA == rightflankvalueB){
	left fights right
} else document.getElementById('out').innerHTML += "Side A's Left flank cannot fight anyone."


if (midlankvalueA == midlankvalueB){
	mid fight each other
} else if (midflankvalueA == leftflankvalueB){
	mid fights left
} else if (midflankvalueA == rightflankvalueB){
	mid fights right
} else document.getElementById('out').innerHTML += "Side A's Mid flank cannot fight anyone."


if (rightlankvalueA == rightlankvalueB){
	right fight each other
} else if (rightflankvalueA == midflankvalueB){
	right fights mid
} else if (rightflankvalueA == leftflankvalueB){
	right fights left
} else document.getElementById('out').innerHTML += "Side A's Right flank cannot fight anyone."



if (document.getElementById('hill').checked) {
	TerrainType = "hill";
} else if (document.getElementById('mountain').checked) {
	TerrainType = "mountain";
} else if (document.getElementById('river').checked) {
	TerrainType = "river";
} else if (document.getElementById('strait').checked) {
	TerrainType = "strait";
} else if (document.getElementById('amphibious').checked) {
	TerrainType = "amphibious";
}


//var unitAttack = Attack * (1 + tech_bonus + terrain_bonus + cultural_bonus + tactic_bonus) * (1 + leader_trait_bonus + tactical_affinity_bonus);


int unitStats [][] = new int[9][8]; //9 rows by 8 columns

//light inf
unitStats[0][0] = 2; //morale
unitStats[0][1] = 0.7; //maintenance
unitStats[0][2] = 1; //Skirmish attack
unitStats[0][3] = 1; //melee attack
unitStats[0][4] = 2; //pursue attack
unitStats[0][5] = 2; //skirmish defense
unitStats[0][6] = 1; //melee defense
unitStats[0][7] = 2.5; //pursue defense
//heavy inf
unitStats[1][0] = 4; //heavy inf morale
unitStats[1][1] = 3; //maintenance
unitStats[1][2] = 0.25; //Skirmish attack
unitStats[1][3] = 6; //melee attack
unitStats[1][4] = 1; //pursue attack
unitStats[1][5] = 3; //skirmish defense
unitStats[1][6] = 4; //melee defense
unitStats[1][7] = 4; //pursue defense
//pikemen
unitStats[2][0] = 6; //morale
unitStats[2][1] = 2; //maintenance
unitStats[2][2] = 0.1; //Skirmish attack
unitStats[2][3] = 5; //melee attack
unitStats[2][4] = 0.2; //pursue attack
unitStats[2][5] = 3.5; //skirmish defense
unitStats[2][6] = 4.5; //melee defense
unitStats[2][7] = 2; //pursue defense
//light cavalry
unitStats[3][0] = 4; //morale
unitStats[3][1] = 3; //maintenance
unitStats[3][2] = 2; //Skirmish attack
unitStats[3][3] = 3; //melee attack
unitStats[3][4] = 6; //pursue attack
unitStats[3][5] = 4.5; //skirmish defense
unitStats[3][6] = 3; //melee defense
unitStats[3][7] = 4.5; //pursue defense
//heavy cavalry
unitStats[4][0] = 10; //morale
unitStats[4][1] = 6; //maintenance
unitStats[4][2] = 0.5; //Skirmish attack
unitStats[4][3] = 10; //melee attack
unitStats[4][4] = 4; //pursue attack
unitStats[4][5] = 4; //skirmish defense
unitStats[4][6] = 5; //melee defense
unitStats[4][7] = 7.5; //pursue defense
//archers
unitStats[5][0] = 1; //morale
unitStats[5][1] = 2; //maintenance
unitStats[5][2] = 2; //Skirmish attack
unitStats[5][3] = 1; //melee attack
unitStats[5][4] = 2; //pursue attack
unitStats[5][5] = 1.5; //skirmish defense
unitStats[5][6] = 1.5; //melee defense
unitStats[5][7] = 2.25; //pursue defense
//horse archers
unitStats[6][0] = 3; //morale
unitStats[6][1] = 4; //maintenance
unitStats[6][2] = 4; //Skirmish attack
unitStats[6][3] = 1; //melee attack
unitStats[6][4] = 7; //pursue attack
unitStats[6][5] = 4.5; //skirmish defense
unitStats[6][6] = 2; //melee defense
unitStats[6][7] = 4.5; //pursue defense
//war elephants
unitStats[3][0] = 15; //morale
unitStats[3][1] = 20; //maintenance
unitStats[3][2] = 0.25; //Skirmish attack
unitStats[3][3] = 25; //melee attack
unitStats[3][4] = 3; //pursue attack
unitStats[3][5] = 6; //skirmish defense
unitStats[3][6] = 10; //melee defense
unitStats[3][7] = 3; //pursue defense
//camel cavalry
unitStats[3][0] = 5; //morale
unitStats[3][1] = 3; //maintenance
unitStats[3][2] = 3; //Skirmish attack
unitStats[3][3] = 6; //melee attack
unitStats[3][4] = 3; //pursue attack
unitStats[3][5] = 2; //skirmish defense
unitStats[3][6] = 2; //melee defense
unitStats[3][7] = 1.5; //pursue defense









int TerrainBonus [][] = new int[7][10]; //7 rows by 10 columns
//formatted as 10 = +10%
//light infantry
TerrainBonus[0][0] = 0; //Hill attack
TerrainBonus[0][1] = 0; //hill defense
TerrainBonus[0][2] = 10; //mountain attack
TerrainBonus[0][3] = 0; //mountain defense
TerrainBonus[0][4] = -10; //river attack
TerrainBonus[0][5] = -10; //river defense
TerrainBonus[0][6] = -15; //strait attack
TerrainBonus[0][7] = -15; //strait defense
TerrainBonus[0][8] = -15; //amphibious attack
TerrainBonus[0][9] = -15; //amphibious defense
//heavy infantry
TerrainBonus[1][0] = 0; //Hill attack
TerrainBonus[1][1] = 0; //hill defense
TerrainBonus[1][2] = 10; //mountain attack
TerrainBonus[1][3] = 0; //mountain defense
TerrainBonus[1][4] = -15; //river attack
TerrainBonus[1][5] = -15; //river defense
TerrainBonus[1][6] = -20; //strait attack
TerrainBonus[1][7] = -20; //strait defense
TerrainBonus[1][8] = -20; //amphibious attack
TerrainBonus[1][9] = -20; //amphibious defense
//pikeman
TerrainBonus[2][0] = 10; //Hill attack
TerrainBonus[2][1] = 5; //hill defense
TerrainBonus[2][2] = 20; //mountain attack
TerrainBonus[2][3] = 10; //mountain defense
TerrainBonus[2][4] = -15; //river attack
TerrainBonus[2][5] = -15; //river defense
TerrainBonus[2][6] = -20; //strait attack
TerrainBonus[2][7] = -20; //strait defense
TerrainBonus[2][8] = -20; //amphibious attack
TerrainBonus[2][9] = -20; //amphibious defense
//light cavalry
TerrainBonus[3][0] = 0; //Hill attack
TerrainBonus[3][1] = 0; //hill defense
TerrainBonus[3][2] = 10; //mountain attack
TerrainBonus[3][3] = 0; //mountain defense
TerrainBonus[3][4] = -10; //river attack
TerrainBonus[3][5] = -10; //river defense
TerrainBonus[3][6] = -15; //strait attack
TerrainBonus[3][7] = -15; //strait defense
TerrainBonus[3][8] = -15; //amphibious attack
TerrainBonus[3][9] = -15; //amphibious defense
//heavy cavalry
TerrainBonus[4][0] = 0; //Hill attack
TerrainBonus[4][1] = 0; //hill defense
TerrainBonus[4][2] = 0; //mountain attack
TerrainBonus[4][3] = 0; //mountain defense
TerrainBonus[4][4] = -12.5; //river attack
TerrainBonus[4][5] = -12.5; //river defense
TerrainBonus[4][6] = -17.2; //strait attack
TerrainBonus[4][7] = -17.2; //strait defense
TerrainBonus[4][8] = -17.5; //amphibious attack
TerrainBonus[4][9] = -17.5; //amphibious defense
//Archers
TerrainBonus[5][0] = 20; //Hill attack
TerrainBonus[5][1] = 15; //hill defense
TerrainBonus[5][2] = 30; //mountain attack
TerrainBonus[5][3] = 20; //mountain defense
TerrainBonus[5][4] = -10; //river attack
TerrainBonus[5][5] = -5; //river defense
TerrainBonus[5][6] = -15; //strait attack
TerrainBonus[5][7] = -10; //strait defense
TerrainBonus[5][8] = -10; //amphibious attack
TerrainBonus[5][9] = -15; //amphibious defense
//Horse Archers
TerrainBonus[6][0] = 15; //Hill attack
TerrainBonus[6][1] = 10; //hill defense
TerrainBonus[6][2] = 25; //mountain attack
TerrainBonus[6][3] = 15; //mountain defense
TerrainBonus[6][4] = -12.5; //river attack
TerrainBonus[6][5] = -7.5; //river defense
TerrainBonus[6][6] = -17.2; //strait attack
TerrainBonus[6][7] = -12.5; //strait defense
TerrainBonus[6][8] = -12.5; //amphibious attack
TerrainBonus[6][9] = -17.5; //amphibious defense


casualties = troop_kill_factor * (damagerecieved - unitdefense);
moraledamage = casualties * 3;
