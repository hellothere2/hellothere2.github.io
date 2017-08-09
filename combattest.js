//Prototypes

function Unit(name, category, unitClass, soldiers, weapon, attack, armourPiercing, cavBonus, rangedWeapon, ammo, rangedPiercing, armour, defenceSkill, shield, training){
	this.name = name;
	this.category = category;
	this.unitClass = unitClass;
	this.soldiers = soldiers;
	this.weapon = weapon;
	this.attack = attack;
	this.armourPiercing = armourPiercing;
	this.cavBonus = cavBonus;
	this.rangedWeapon = rangedWeapon;
	this.ammo = ammo;
	this.rangedPiercing = rangedPiercing;
	this.armour = armour;
	this.defenceSkill = defenceSkill;
	this.shield = shield;
	this.training = training;
}

//(name, category, unitClass, soldiers, weapon, attack, armourPiercing, cavBonus, rangedWeapon, ammo, rangedPiercing, armour, defenceSkill, shield, training)
var Peasants = new Unit("Peasants", "Infantry", "Light", 60, "Farming Tool", 4,false,0,"None",0,false,0,3,0,0);
var townMilitia = new Unit("Town Militia", "Infantry", "Light", 60, "Light Spear", 5,false,4,"None",0,false,0,1,6,1);
var archerMilitia = new Unit("Archer Militia", "Infantry", "Missile", 48, "None", 5,false,4,"Self Bow",1,false,0,1,6,1);
var mailedKnights = new Unit("Mailed Knights", "Mounted", "Heavy", 32, "Cavalry Sword", 11,false,0,"None",0,false,5,5,4,1);

var TypeList = ["Peasants","Town Militia","Archer Militia","Mailed Knights"];

function addFields_a() {
  // Number of inputs to create
  var number = parseInt(document.getElementById("unit_A").value);
  // Container <div> where dynamic content will be placed
  var container = document.getElementById("Force_A_UnitInputs");
  // Clear previous contents of the container
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < number; i++) {
    // Append a node with a random text
    container.appendChild(document.createTextNode("Unit " + i + "'s name followed by type:"));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.id = "unit_A" + i; ///unit_A0, unit_A1, unit_A2, unit_A3, etc.
    input.name = "Force_A_UnitNamesList"
    input.value = "unit_A" + i;
    container.appendChild(input);
    // Create an <select> element, set its type and name attributes
    var selectList = document.createElement("select");
    selectList.id = "unit_A" + i + "type";
    container.appendChild(selectList);
    //create and append the options
    for (i2 = 0; i2 < TypeList.length; i2++){
    	var option = document.createElement("option");
    	option.value = TypeList[i2];
    	option.text = TypeList[i2];
    	selectList.appendChild(option);
    }
    // Append a line break 
    container.appendChild(document.createElement("br"));
    // Create an <input> element, set its type and name attributes
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "unit_A" + i + "soldiers"; ///member1skill, member2skill, member3skill, etc.
    input2.name = "unit_ASoldierValues"
    input2.value = 100;
    container.appendChild(input2);
    // Append a line break 
    container.appendChild(document.createElement("br"));
  }
}

function addFields_b() {
  // Number of inputs to create
  var number = parseInt(document.getElementById("unit_B").value);
  // Container <div> where dynamic content will be placed
  var container = document.getElementById("Force_B_UnitInputs");
  // Clear previous contents of the container
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < number; i++) {
    // Append a node with a random text
    container.appendChild(document.createTextNode("Unit " + i + "'s name followed by type:"));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.id = "unit_B" + i; ///unit_B0, unit_B1, unit_B2, unit_B3, etc.
    input.name = "Force_B_UnitNamesList"
    input.value = "unit_B" + i;
    container.appendChild(input);
    // Create an <select> element, set its type and name attributes
    var selectList = document.createElement("select");
    selectList.id = "unit_B" + i + "type";
    container.appendChild(selectList);
    //create and append the options
    for (i2 = 0; i2 < TypeList.length; i2++){
    	var option = document.createElement("option");
    	option.value = TypeList[i2];
    	option.text = TypeList[i2];
    	selectList.appendChild(option);
    }
    // Append a line break 
    container.appendChild(document.createElement("br"));
    // Create an <input> element, set its type and name attributes
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "unit_B" + i + "soldiers"; ///member1skill, member2skill, member3skill, etc.
    input2.name = "unit_BSoldierValues"
    input2.value = 100;
    container.appendChild(input2);
    // Append a line break 
    container.appendChild(document.createElement("br"));
  }
}

function clearresults(){
	document.getElementById('battleout').innerHTML = " ";
}
function htmlbreak(){
	document.getElementById('battleout').innerHTML += "<br>";
}


function battle(){
	var Force_A_numberOfUnits = parseInt(document.getElementById("unit_A").value);
	var Force_B_numberOfUnits = parseInt(document.getElementById("unit_B").value);
	document.getElementById('battleout').innerHTML += "Attackers have "+Force_A_numberOfUnits+" units";
	htmlbreak();
	document.getElementById('battleout').innerHTML += "Defenders have "+Force_B_numberOfUnits+" units";
	htmlbreak();

//Determine Unit Type
	var Force_A_Unit = ["placeholder"];
	for (i = 0; i < Force_A_numberOfUnits; i++){
		Force_A_Unit[i] = new Unit();
		if (document.getElementById('unit_A'+i+'type').selectedIndex == 0){ //is peasants
			Force_A_Unit[i].name = document.getElementById("unit_A"+i).value;
			Force_A_Unit[i].category = Peasants.category;
			Force_A_Unit[i].unitClass = Peasants.unitClass;
			Force_A_Unit[i].soldiers = document.getElementById("unit_A"+i+"soldiers").value;
			Force_A_Unit[i].weapon = Peasants.weapon;
			Force_A_Unit[i].attack = Peasants.attack;
			Force_A_Unit[i].armourPiercing = Peasants.armourPiercing;
			Force_A_Unit[i].cavBonus = Peasants.cavBonus;
			Force_A_Unit[i].rangedWeapon = Peasants.rangedWeapon;
			Force_A_Unit[i].ammo = Peasants.ammo;
			Force_A_Unit[i].rangedPiercing = Peasants.rangedPiercing;
			Force_A_Unit[i].armour = Peasants.armour;
			Force_A_Unit[i].defenceSkill = Peasants.defenceSkill;
			Force_A_Unit[i].shield = Peasants.shield;
			Force_A_Unit[i].training = Peasants.training;
		} else if (document.getElementById('unit_A'+i+'type').selectedIndex == 1){ //town militia
			Force_A_Unit[i].name = document.getElementById("unit_A"+i).value;
			Force_A_Unit[i].category = townMilitia.category;
			Force_A_Unit[i].unitClass = townMilitia.unitClass;
			Force_A_Unit[i].soldiers = document.getElementById("unit_A"+i+"soldiers").value;
			Force_A_Unit[i].weapon = townMilitia.weapon;
			Force_A_Unit[i].attack = townMilitia.attack;
			Force_A_Unit[i].armourPiercing = townMilitia.armourPiercing;
			Force_A_Unit[i].cavBonus = townMilitia.cavBonus;
			Force_A_Unit[i].rangedWeapon = townMilitia.rangedWeapon;
			Force_A_Unit[i].ammo = townMilitia.ammo;
			Force_A_Unit[i].rangedPiercing = townMilitia.rangedPiercing;
			Force_A_Unit[i].armour = townMilitia.armour;
			Force_A_Unit[i].defenceSkill = townMilitia.defenceSkill;
			Force_A_Unit[i].shield = townMilitia.shield;
			Force_A_Unit[i].training = townMilitia.training;
		} else if (document.getElementById('unit_A'+i+'type').selectedIndex == 2){ //archer militia
			Force_A_Unit[i].name = document.getElementById("unit_A"+i).value;
			Force_A_Unit[i].category = archerMilitia.category;
			Force_A_Unit[i].unitClass = archerMilitia.unitClass;
			Force_A_Unit[i].soldiers = document.getElementById("unit_A"+i+"soldiers").value;
			Force_A_Unit[i].weapon = archerMilitia.weapon;
			Force_A_Unit[i].attack = archerMilitia.attack;
			Force_A_Unit[i].armourPiercing = archerMilitia.armourPiercing;
			Force_A_Unit[i].cavBonus = archerMilitia.cavBonus;
			Force_A_Unit[i].rangedWeapon = archerMilitia.rangedWeapon;
			Force_A_Unit[i].ammo = archerMilitia.ammo;
			Force_A_Unit[i].rangedPiercing = archerMilitia.rangedPiercing;
			Force_A_Unit[i].armour = archerMilitia.armour;
			Force_A_Unit[i].defenceSkill = archerMilitia.defenceSkill;
			Force_A_Unit[i].shield = archerMilitia.shield;
			Force_A_Unit[i].training = archerMilitia.training;
		} else if (document.getElementById('unit_A'+i+'type').selectedIndex == 3){ //Mailed knights
			Force_A_Unit[i].name = document.getElementById("unit_A"+i).value;
			Force_A_Unit[i].category = mailedKnights.category;
			Force_A_Unit[i].unitClass = mailedKnights.unitClass;
			Force_A_Unit[i].soldiers = document.getElementById("unit_A"+i+"soldiers").value;
			Force_A_Unit[i].weapon = mailedKnights.weapon;
			Force_A_Unit[i].attack = mailedKnights.attack;
			Force_A_Unit[i].armourPiercing = mailedKnights.armourPiercing;
			Force_A_Unit[i].cavBonus = mailedKnights.cavBonus;
			Force_A_Unit[i].rangedWeapon = mailedKnights.rangedWeapon;
			Force_A_Unit[i].ammo = mailedKnights.ammo;
			Force_A_Unit[i].rangedPiercing = mailedKnights.rangedPiercing;
			Force_A_Unit[i].armour = mailedKnights.armour;
			Force_A_Unit[i].defenceSkill = mailedKnights.defenceSkill;
			Force_A_Unit[i].shield = mailedKnights.shield;
			Force_A_Unit[i].training = mailedKnights.training;
		}
	}

	var Force_B_Unit = ["placeholder"];
	for (i = 0; i < Force_B_numberOfUnits; i++){
		Force_B_Unit[i] = new Unit();
		if (document.getElementById('unit_B'+i+'type').selectedIndex == 0){ //is peasants
			Force_B_Unit[i].name = document.getElementById("unit_B"+i).value;
			Force_B_Unit[i].category = Peasants.category;
			Force_B_Unit[i].unitClass = Peasants.unitClass;
			Force_B_Unit[i].soldiers = document.getElementById("unit_B"+i+"soldiers").value;
			Force_B_Unit[i].weapon = Peasants.weapon;
			Force_B_Unit[i].attack = Peasants.attack;
			Force_B_Unit[i].armourPiercing = Peasants.armourPiercing;
			Force_B_Unit[i].cavBonus = Peasants.cavBonus;
			Force_B_Unit[i].rangedWeapon = Peasants.rangedWeapon;
			Force_B_Unit[i].ammo = Peasants.ammo;
			Force_B_Unit[i].rangedPiercing = Peasants.rangedPiercing;
			Force_B_Unit[i].armour = Peasants.armour;
			Force_B_Unit[i].defenceSkill = Peasants.defenceSkill;
			Force_B_Unit[i].shield = Peasants.shield;
			Force_B_Unit[i].training = Peasants.training;
		} else if (document.getElementById('unit_B'+i+'type').selectedIndex == 1){ //town militia
			Force_B_Unit[i].name = document.getElementById("unit_B"+i).value;
			Force_B_Unit[i].category = townMilitia.category;
			Force_B_Unit[i].unitClass = townMilitia.unitClass;
			Force_B_Unit[i].soldiers = document.getElementById("unit_B"+i+"soldiers").value;
			Force_B_Unit[i].weapon = townMilitia.weapon;
			Force_B_Unit[i].attack = townMilitia.attack;
			Force_B_Unit[i].armourPiercing = townMilitia.armourPiercing;
			Force_B_Unit[i].cavBonus = townMilitia.cavBonus;
			Force_B_Unit[i].rangedWeapon = townMilitia.rangedWeapon;
			Force_B_Unit[i].ammo = townMilitia.ammo;
			Force_B_Unit[i].rangedPiercing = townMilitia.rangedPiercing;
			Force_B_Unit[i].armour = townMilitia.armour;
			Force_B_Unit[i].defenceSkill = townMilitia.defenceSkill;
			Force_B_Unit[i].shield = townMilitia.shield;
			Force_B_Unit[i].training = townMilitia.training;
		} else if (document.getElementById('unit_B'+i+'type').selectedIndex == 2){ //archer militia
			Force_B_Unit[i].name = document.getElementById("unit_B"+i).value;
			Force_B_Unit[i].category = archerMilitia.category;
			Force_B_Unit[i].unitClass = archerMilitia.unitClass;
			Force_B_Unit[i].soldiers = document.getElementById("unit_B"+i+"soldiers").value;
			Force_B_Unit[i].weapon = archerMilitia.weapon;
			Force_B_Unit[i].attack = archerMilitia.attack;
			Force_B_Unit[i].armourPiercing = archerMilitia.armourPiercing;
			Force_B_Unit[i].cavBonus = archerMilitia.cavBonus;
			Force_B_Unit[i].rangedWeapon = archerMilitia.rangedWeapon;
			Force_B_Unit[i].ammo = archerMilitia.ammo;
			Force_B_Unit[i].rangedPiercing = archerMilitia.rangedPiercing;
			Force_B_Unit[i].armour = archerMilitia.armour;
			Force_B_Unit[i].defenceSkill = archerMilitia.defenceSkill;
			Force_B_Unit[i].shield = archerMilitia.shield;
			Force_B_Unit[i].training = archerMilitia.training;
		} else if (document.getElementById('unit_B'+i+'type').selectedIndex == 3){ //Mailed knights
			Force_B_Unit[i].name = document.getElementById("unit_B"+i).value;
			Force_B_Unit[i].category = mailedKnights.category;
			Force_B_Unit[i].unitClass = mailedKnights.unitClass;
			Force_B_Unit[i].soldiers = document.getElementById("unit_B"+i+"soldiers").value;
			Force_B_Unit[i].weapon = mailedKnights.weapon;
			Force_B_Unit[i].attack = mailedKnights.attack;
			Force_B_Unit[i].armourPiercing = mailedKnights.armourPiercing;
			Force_B_Unit[i].cavBonus = mailedKnights.cavBonus;
			Force_B_Unit[i].rangedWeapon = mailedKnights.rangedWeapon;
			Force_B_Unit[i].ammo = mailedKnights.ammo;
			Force_B_Unit[i].rangedPiercing = mailedKnights.rangedPiercing;
			Force_B_Unit[i].armour = mailedKnights.armour;
			Force_B_Unit[i].defenceSkill = mailedKnights.defenceSkill;
			Force_B_Unit[i].shield = mailedKnights.shield;
			Force_B_Unit[i].training = mailedKnights.training;
		}
	}
	

//Prepare the arrays
	var attackercasualties = [];
	var defendercasualties = [];
	var attkroll = [];
	var dfndroll = [];

	for (z = 0; z < Force_A_numberOfUnits;z++){
		attackercasualties.push(0);
		attkroll.push(0);
	}
	for (z = 0; z < Force_B_numberOfUnits;z++){
		defendercasualties.push(0);
		dfndroll.push(0);
	}









//The actual combat
	for (n = 0; n < Force_A_numberOfUnits;n++){
		//Choose opponents
		attkroll[n] = Math.floor(Math.random() * Force_B_numberOfUnits);
		placeholder_a = attkroll[n];
		document.getElementById('battleout').innerHTML += placeholder_a; //debugging
		htmlbreak();
		for (i=0;i<Force_A_Unit[n].soldiers;i++){
			if (Force_A_Unit[n].unitClass == "Missile"){
				for (a=Force_A_Unit[n].ammo;a>0;a--){
					roll = Math.floor(Math.random() * Force_A_Unit[n].attack) + Force_A_Unit[n].training;
					if (Force_A_Unit[n].rangedPiercing == true){
						defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield;
					} else {
						defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield + Force_B_Unit[placeholder_a].armour;
					}
					roll2 = Math.floor(Math.random() * defender_totaldefence) + Force_B_Unit[placeholder_a].training;
					if (roll > roll2){
						defendercasualties[placeholder_a]+=1;
					}
				}
			} else if (Force_A_Unit[n].category == "Mounted" && Force_A_Unit[n].unitClass == "Heavy"){
				if (Force_B_Unit[placeholder_a].category == "Mounted"){
					roll = Math.floor(Math.random() * Force_A_Unit[n].attack) + Force_A_Unit[n].training + Force_A_Unit[n].cavBonus;
					if (Force_A_Unit[n].armourPiercing == false){
						defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield + Force_B_Unit[placeholder_a].armour;
					} else {
						defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield;
					}
					roll2 = Math.floor(Math.random() * defender_totaldefence) + Force_B_Unit[placeholder_a].training + Force_B_Unit[placeholder_a].cavBonus;
					if (roll > roll2){
						defendercasualties[placeholder_a]+=1;
					}
				} else {
					//do a for loop for each soldier, seeing if the charge itself kills an enemy
					for (c = 0; c < Force_A_Unit[n].soldiers; c++){
						roll = Math.floor(Math.random() * Force_A_Unit[n].attack) + Force_A_Unit[n].training;
						//Defender only gets defence skill because armor doesn't block a fucking horse
						roll2 = Math.floor(Math.random() * Force_B_Unit[placeholder_a].defenceSkill) + Force_B_Unit[placeholder_a].training;
						if (roll > roll2){
							defendercasualties[placeholder_a]+=1;
						}
					}
					//now do regular combat on top of that
					roll = Math.floor(Math.random() * Force_A_Unit[n].attack) + Force_A_Unit[n].training;
					if (Force_A_Unit[n].armourPiercing == false){
						defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield + Force_B_Unit[placeholder_a].armour;
					} else {
						defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield;
					}
					roll2 = Math.floor(Math.random() * defender_totaldefence) + Force_B_Unit[placeholder_a].training;
					if (roll > roll2){
						defendercasualties[placeholder_a]+=1;
					}
				}
			} else { //if it isn't ranged or cav, then it's generic infantry which is all done the same way
				if (Force_B_Unit[placeholder_a].category == "Mounted"){
					roll = Math.floor(Math.random() * Force_A_Unit[n].attack) + Force_A_Unit[n].training + Force_A_Unit[n].cavBonus;
				} else {
					roll = Math.floor(Math.random() * Force_A_Unit[n].attack) + Force_A_Unit[n].training;
				}

				if (Force_A_Unit[n].armourPiercing == false){
					defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield + Force_B_Unit[placeholder_a].armour;
				} else {
					defender_totaldefence = Force_B_Unit[placeholder_a].defenceSkill + Force_B_Unit[placeholder_a].shield;
				}
				roll2 = Math.floor(Math.random() * defender_totaldefence) + Force_B_Unit[placeholder_a].training;
				if (roll > roll2){
					defendercasualties[placeholder_a]+=1;
				}
			}
		}
	}












	document.getElementById('battleout').innerHTML += "Defender's turn";
	htmlbreak();
	for (n = 0; n < Force_B_numberOfUnits;n++){
			//Choose opponents
			dfndroll[n] = Math.floor(Math.random() * Force_B_numberOfUnits);
			placeholder_b = dfndroll[n];
			document.getElementById('battleout').innerHTML += placeholder_b; //debugging
			htmlbreak();
			for (i=0;i<Force_B_Unit[n].soldiers;i++){
				if (Force_B_Unit[n].unitClass == "Missile"){
					for (a=Force_B_Unit[n].ammo;a>0;a--){
						roll = Math.floor(Math.random() * Force_B_Unit[n].attack) + Force_B_Unit[n].training;
						if (Force_B_Unit[n].rangedPiercing == true){
							attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield;
						} else {
							attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield + Force_A_Unit[placeholder_b].armour;
						}
						roll2 = Math.floor(Math.random() * attacker_totaldefence) + Force_A_Unit[placeholder_b].training;
						if (roll > roll2){
							attackercasualties[placeholder_b]+=1;
						}
					}
				} else if (Force_B_Unit[n].category == "Mounted" && Force_B_Unit[n].unitClass == "Heavy"){
					if (Force_A_Unit[placeholder_b].category == "Mounted"){
						roll = Math.floor(Math.random() * Force_B_Unit[n].attack) + Force_B_Unit[n].training + Force_B_Unit[n].cavBonus;
						if (Force_B_Unit[n].armourPiercing == false){
							attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield + Force_A_Unit[placeholder_b].armour;
						} else {
							attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield;
						}
						roll2 = Math.floor(Math.random() * attacker_totaldefence) + Force_A_Unit[placeholder_b].training + Force_A_Unit[placeholder_b].cavBonus;
						if (roll > roll2){
							attackercasualties[placeholder_b]+=1;
						}
					} else {
						//do a for loop for each soldier, seeing if the charge itself kills an enemy
						for (c = 0; c < Force_B_Unit[n].soldiers; c++){
							roll = Math.floor(Math.random() * Force_B_Unit[n].attack) + Force_B_Unit[n].training;
							//attacker only gets defence skill because armor doesn't block a fucking horse
							roll2 = Math.floor(Math.random() * Force_A_Unit[placeholder_b].defenceSkill) + Force_A_Unit[placeholder_b].training;
							if (roll > roll2){
								attackercasualties[placeholder_b]+=1;
							}
						}
						//now do regular combat on top of that
						roll = Math.floor(Math.random() * Force_B_Unit[n].attack) + Force_B_Unit[n].training;
						if (Force_A_Unit[n].armourPiercing == false){
							attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield + Force_A_Unit[placeholder_b].armour;
						} else {
							attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield;
						}
						roll2 = Math.floor(Math.random() * attacker_totaldefence) + Force_A_Unit[placeholder_b].training;
						if (roll > roll2){
							attackercasualties[placeholder_b]+=1;
						}
					}
				} else { //if it isn't ranged or cav, then it's generic infantry which is all done the same way
					if (Force_A_Unit[placeholder_b].category == "Mounted"){
						roll = Math.floor(Math.random() * Force_B_Unit[n].attack) + Force_B_Unit[n].training + Force_B_Unit[n].cavBonus;
					} else {
						roll = Math.floor(Math.random() * Force_B_Unit[n].attack) + Force_B_Unit[n].training;
					}

					if (Force_B_Unit[n].armourPiercing == false){
						attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield + Force_A_Unit[placeholder_b].armour;
					} else {
						attacker_totaldefence = Force_A_Unit[placeholder_b].defenceSkill + Force_A_Unit[placeholder_b].shield;
					}
					roll2 = Math.floor(Math.random() * attacker_totaldefence) + Force_A_Unit[placeholder_b].training;
					if (roll > roll2){
						attackercasualties[placeholder_b]+=1;
					}
				}
			}
		}




















//Process Casualties
	for (i=0;i<Force_A_numberOfUnits;i++){
		Force_A_Unit[i].soldiers = Force_A_Unit[i].soldiers - attackercasualties[i];
		if (Force_A_Unit[i].soldiers < 0){
			Force_A_Unit[i].soldiers = 0;
		}
		document.getElementById('battleout').innerHTML += Force_A_Unit[i].name + " soldiers left = " + Force_A_Unit[i].soldiers;
		htmlbreak();
	}

	for (i=0;i<Force_B_numberOfUnits;i++){
		Force_B_Unit[i].soldiers = Force_B_Unit[i].soldiers - defendercasualties[i];
		if (Force_B_Unit[i].soldiers < 0){
			Force_B_Unit[i].soldiers = 0;
		}
		document.getElementById('battleout').innerHTML += Force_B_Unit[i].name + " soldiers left = " + Force_B_Unit[i].soldiers;
		htmlbreak();
	}

}

