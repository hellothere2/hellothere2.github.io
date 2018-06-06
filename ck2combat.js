//ck2 combat.js
//written by hello_there2
//https://ck2.paradoxwikis.com/Combat

function htmlbreak(){
	document.getElementById('battleout').innerHTML += "<br>";
}

function clearresults(){
	document.getElementById('battleout').innerHTML = " ";
}

//Create arrays to store unit data inside
function Unit(number, morale, maintenance, skirmish_attack, melee_attack, pursue_attack, skirmish_defence, melee_defence, pursue_defence, current_attack, current_defence){
	this.number = number;
	this.morale = morale;
	this.maintenance = maintenance;
	this.skirmish_attack = skirmish_attack;
	this.melee_attack = melee_attack;
	this.pursue_attack = pursue_attack;
	this.skirmish_defence = skirmish_defence;
	this.melee_defence = melee_defence;
	this.pursue_defence = pursue_defence;
	this.current_attack = current_attack;
	this.current_defence = current_defence;
}

function Flank(commander_name, commander, LI, HI, LC, HC, A, P, HA, WE, CC, phase, target){
	this.commander_name = commander_name; //string name of commander
	this.commander = commander; //commander type
	this.LI = LI; //Light Inf
	this.HI = HI; //Heavy Inf
	this.LC = LC; //Light Cav
	this.HC = HC; //Heavy Cav
	this.A = A; //Ranged Inf/Archers
	this.P = P; //Pikemen
	this.HA = HA; //Horse Archers
	this.WE = WE; //War Elephants
	this.CC = CC; //Camel Cav
	this.phase = phase; //what phase is this flank in? i.e. has it retreated early
	this.target = target; //left, center, right
}

function Army(army_name, LI, HI, LC, HC, A, P, HA, WE, CC){
	this.army_name = army_name; //string name of army
	this.LI = LI; //Total Light Inf
	this.HI = HI; //Total Heavy Inf
	this.LC = LC; //Total Light Cav
	this.HC = HC; //Total Heavy Cav
	this.A = A; //Total Ranged Inf/Archers
	this.P = P; //Total Pikemen
	this.HA = HA; //Total Horse Archers
	this.WE = WE; //Total War Elephants
	this.CC = CC; //Total Camel Cav
}

//Create arrays to store tech bonuses in
function TechBonus(LI, HI, CAV){
	this.LI = LI;
	this.HI = HI;
	this.CAV = CAV;
}

//Formula for the attack/defence of a unit is
//(Base unit stat) * (1 + tech bonus + ...
// ...terrain bonus + cultural bonus + tactic bonus) * (1 + leader trait bonus + tactical affinity bonus).

//Phases
//All battles will start in the Skirmish phase. This is when archers and horse archers excel, and they will be the only ones doing any major damage.
//After a few days, it will switch to the Melee phase, where melee oriented units like heavy infantry and pikemen excel.
//Note that flanks do not necessarily have to be in the same phase as each other, and they'll usually enter Melee at slightly different times.
//When the morale of a flank reaches 25%, they will start retreating, and combat will switch to the Pursue phase.
//This is where light cavalry truly excels, but heavier cavalry does well also.
//Retreat: After 5 days, the flank will be removed from combat.



function CK2Combat(){

	document.getElementById("battleout").innerHTML += "CK2 Combat Script initialized...";
	htmlbreak();


	var A_TechBonus = new TechBonus();
		A_TechBonus.LI = (parseInt(document.getElementById("Tech_LI_A").value) * 7.5) * 0.01;
		A_TechBonus.HI = (parseInt(document.getElementById("Tech_HI_A").value) * 7.5) * 0.01;
		A_TechBonus.CAV = (parseInt(document.getElementById("Tech_CAV_A").value) * 7.5) * 0.01;
	var B_TechBonus = new TechBonus();
		B_TechBonus.LI = (parseInt(document.getElementById("Tech_LI_B").value) * 7.5) * 0.01;
		B_TechBonus.HI = (parseInt(document.getElementById("Tech_HI_B").value) * 7.5) * 0.01;
		B_TechBonus.CAV = (parseInt(document.getElementById("Tech_CAV_B").value) * 7.5) * 0.01;

	document.getElementById("battleout").innerHTML += "Tech Bonus values loaded";
	//The Tech Bonus values will come out as 0-8 so they need to be transformed later on when we apply them
	htmlbreak();
	


	var LI_template = new Unit(0, 2, 0.7, 1, 1, 2, 2, 1, 2.5);
	var HI_template = new Unit(0, 4, 3, 0.25, 6, 1, 3, 4, 4);
	var P_template = new Unit(0, 6, 2.5, 0.1, 4.5, 0.2, 4, 4.5, 2);
	var LC_template = new Unit(0, 4, 3, 2, 3, 6, 4.5, 3, 4.5);
	var HC_template = new Unit(0, 10, 6, 0.5, 10, 4, 4, 5, 7.5);
	var A_template = new Unit(0, 1, 2, 2, 1, 2, 1.5, 1.5, 2.25);
	var HA_template = new Unit(0, 3, 4, 4, 3, 7, 4, 4, 4.5);
	var WE_template = new Unit(0, 15, 20, 0.25, 25, 0.25, 5, 15, 2);
	var CC_template = new Unit(0, 5, 3, 4, 7, 2, 4.5, 3, 2.5);

	document.getElementById("battleout").innerHTML += "Templates loaded.";
	htmlbreak();



	var Phase = 1; //1 = skirmish 2 = melee 3 = pursue 4 = Retreat 5 = removed from battle
	var end = 0; //0 = script still running, 1 = end the script

	document.getElementById("battleout").innerHTML += "Combat phases loaded.";
	htmlbreak();

	//Pre-combat Prepwork

		//Create 2 empty army variables
		var Force_A = new Army();
			Force_A.army_name = document.getElementById("Force_A_name");
			//We will store legitimate values in these later, for now we're leaving them empty
			Force_A.LI = 0; //Total Light Inf
			Force_A.HI = 0; //Total Heavy Inf
			Force_A.LC = 0; //Total Light Cav
			Force_A.HC = 0; //Total Heavy Cav
			Force_A.A = 0; //Total Ranged Inf/Archers
			Force_A.HA = 0; //Total Horse Archers
			Force_A.WE = 0; //Total War Elephants
			Force_A.CC = 0; //Total Camel Cav
		var Force_B = new Army();
			Force_B.army_name = document.getElementById("Force_B_name");
			//We will store legitimate values in these later, for now we're leaving them empty
			Force_B.LI = 0; //Total Light Inf
			Force_B.HI = 0; //Total Heavy Inf
			Force_B.LC = 0; //Total Light Cav
			Force_B.HC = 0; //Total Heavy Cav
			Force_B.A = 0; //Total Ranged Inf/Archers
			Force_B.HA = 0; //Total Horse Archers
			Force_B.WE = 0; //Total War Elephants
			Force_B.CC = 0; //Total Camel Cav


		document.getElementById("battleout").innerHTML += "Placeholder Armies loaded.";
		htmlbreak();


		//Create the left flank
		var A_left_LI_number = parseInt(document.getElementById("Force_A_left_input_LI").value);
		var A_left_HI_number = parseInt(document.getElementById("Force_A_left_input_HI").value);
		var A_left_HC_number = parseInt(document.getElementById("Force_A_left_input_HC").value);
		var A_left_LC_number = parseInt(document.getElementById("Force_A_left_input_LC").value);
		var A_left_CC_number = parseInt(document.getElementById("Force_A_left_input_CC").value);
		var A_left_HA_number = parseInt(document.getElementById("Force_A_left_input_HA").value);
		var A_left_WE_number = parseInt(document.getElementById("Force_A_left_input_WE").value);
		var A_left_P_number = parseInt(document.getElementById("Force_A_left_input_P").value);
		var A_left_A_number = parseInt(document.getElementById("Force_A_left_input_A").value);
		//Create the center flank
		var A_center_LI_number = parseInt(document.getElementById("Force_A_center_input_LI").value);
		var A_center_HI_number = parseInt(document.getElementById("Force_A_center_input_HI").value);
		var A_center_HC_number = parseInt(document.getElementById("Force_A_center_input_HC").value);
		var A_center_LC_number = parseInt(document.getElementById("Force_A_center_input_LC").value);
		var A_center_CC_number = parseInt(document.getElementById("Force_A_center_input_CC").value);
		var A_center_HA_number = parseInt(document.getElementById("Force_A_center_input_HA").value);
		var A_center_WE_number = parseInt(document.getElementById("Force_A_center_input_WE").value);
		var A_center_P_number = parseInt(document.getElementById("Force_A_center_input_P").value);
		var A_center_A_number = parseInt(document.getElementById("Force_A_center_input_A").value);
		//Create the right flank
		var A_right_LI_number = parseInt(document.getElementById("Force_A_right_input_LI").value);
		var A_right_HI_number = parseInt(document.getElementById("Force_A_right_input_HI").value);
		var A_right_HC_number = parseInt(document.getElementById("Force_A_right_input_HC").value);
		var A_right_LC_number = parseInt(document.getElementById("Force_A_right_input_LC").value);
		var A_right_CC_number = parseInt(document.getElementById("Force_A_right_input_CC").value);
		var A_right_HA_number = parseInt(document.getElementById("Force_A_right_input_HA").value);
		var A_right_WE_number = parseInt(document.getElementById("Force_A_right_input_WE").value);
		var A_right_P_number = parseInt(document.getElementById("Force_A_right_input_P").value);
		var A_right_A_number = parseInt(document.getElementById("Force_A_right_input_A").value);
		document.getElementById("battleout").innerHTML += "Numbers imported";
		htmlbreak();
		var A_left = new Flank();
			A_left.commander_name = document.getElementById("Force_A_Commander_left_name"); //string name of commander
			A_left.commander = document.getElementById("Commander_Bonus_left_A"); //commander type
			A_left.phase = 1; //what phase is this flank in? i.e. has it retreated early //1 = skirmish 2 = melee 3 = pursue 4 = Retreat
			A_left.target = 1; // 1 left,  2 center,  3 right
			A_left.LI = A_left_LI_number;
				var A_left_LI = new Unit();
					A_left_LI.number = A_left_LI_number;
					A_left_LI.morale = LI_template.morale;
					A_left_LI.maintenance = LI_template.maintenance;
					A_left_LI.skirmish_attack = LI_template.skirmish_attack;
					A_left_LI.melee_attack = LI_template.melee_attack;
					A_left_LI.pursue_attack = LI_template.pursue_attack;
					A_left_LI.skirmish_defence = LI_template.skirmish_defence;
					A_left_LI.melee_defence = LI_template.melee_defence;
					A_left_LI.pursue_defence = LI_template.pursue_defence;
			A_left.HI = A_left_HI_number;
				var A_left_HI = new Unit();
					A_left_HI.number = A_left_HI_number;
					A_left_HI.morale = HI_template.morale;
					A_left_HI.maintenance = HI_template.maintenance;
					A_left_HI.skirmish_attack = HI_template.skirmish_attack;
					A_left_HI.melee_attack = HI_template.melee_attack;
					A_left_HI.pursue_attack = HI_template.pursue_attack;
					A_left_HI.skirmish_defence = HI_template.skirmish_defence;
					A_left_HI.melee_defence = HI_template.melee_defence;
					A_left_HI.pursue_defence = HI_template.pursue_defence;
			A_left.HC = A_left_HC_number;
				var A_left_HC = new Unit();
					A_left_HC.number = A_left_HC_number;
					A_left_HC.morale = HC_template.morale;
					A_left_HC.maintenance = HC_template.maintenance;
					A_left_HC.skirmish_attack = HC_template.skirmish_attack;
					A_left_HC.melee_attack = HC_template.melee_attack;
					A_left_HC.pursue_attack = HC_template.pursue_attack;
					A_left_HC.skirmish_defence = HC_template.skirmish_defence;
					A_left_HC.melee_defence = HC_template.melee_defence;
					A_left_HC.pursue_defence = HC_template.pursue_defence;
			A_left.LC = A_left_LC_number;
				var A_left_LC = new Unit();
					A_left_LC.number = A_left_LC_number;
					A_left_LC.morale = LC_template.morale;
					A_left_LC.maintenance = LC_template.maintenance;
					A_left_LC.skirmish_attack = LC_template.skirmish_attack;
					A_left_LC.melee_attack = LC_template.melee_attack;
					A_left_LC.pursue_attack = LC_template.pursue_attack;
					A_left_LC.skirmish_defence = LC_template.skirmish_defence;
					A_left_LC.melee_defence = LC_template.melee_defence;
					A_left_LC.pursue_defence = LC_template.pursue_defence;
			A_left.CC = A_left_CC_number;
				var A_left_CC = new Unit();
					A_left_CC.number = A_left_CC_number;
					A_left_CC.morale = CC_template.morale;
					A_left_CC.maintenance = CC_template.maintenance;
					A_left_CC.skirmish_attack = CC_template.skirmish_attack;
					A_left_CC.melee_attack = CC_template.melee_attack;
					A_left_CC.pursue_attack = CC_template.pursue_attack;
					A_left_CC.skirmish_defence = CC_template.skirmish_defence;
					A_left_CC.melee_defence = CC_template.melee_defence;
					A_left_CC.pursue_defence = CC_template.pursue_defence;
			A_left.HA = A_left_HA_number;
				var A_left_HA = new Unit();
					A_left_HA.number = A_left_HA_number;
					A_left_HA.morale = HA_template.morale;
					A_left_HA.maintenance = HA_template.maintenance;
					A_left_HA.skirmish_attack = HA_template.skirmish_attack;
					A_left_HA.melee_attack = HA_template.melee_attack;
					A_left_HA.pursue_attack = HA_template.pursue_attack;
					A_left_HA.skirmish_defence = HA_template.skirmish_defence;
					A_left_HA.melee_defence = HA_template.melee_defence;
					A_left_HA.pursue_defence = HA_template.pursue_defence;
			A_left.WE = A_left_WE_number;
				var A_left_WE = new Unit();
					A_left_WE.number = A_left_WE_number;
					A_left_WE.morale = WE_template.morale;
					A_left_WE.maintenance = WE_template.maintenance;
					A_left_WE.skirmish_attack = WE_template.skirmish_attack;
					A_left_WE.melee_attack = WE_template.melee_attack;
					A_left_WE.pursue_attack = WE_template.pursue_attack;
					A_left_WE.skirmish_defence = WE_template.skirmish_defence;
					A_left_WE.melee_defence = WE_template.melee_defence;
					A_left_WE.pursue_defence = WE_template.pursue_defence;
			A_left.P = A_left_P_number;
				var A_left_P = new Unit();
					A_left_P.number = A_left_P_number;
					A_left_P.morale = P_template.morale;
					A_left_P.maintenance = P_template.maintenance;
					A_left_P.skirmish_attack = P_template.skirmish_attack;
					A_left_P.melee_attack = P_template.melee_attack;
					A_left_P.pursue_attack = P_template.pursue_attack;
					A_left_P.skirmish_defence = P_template.skirmish_defence;
					A_left_P.melee_defence = P_template.melee_defence;
					A_left_P.pursue_defence = P_template.pursue_defence;
			A_left.A = A_left_A_number;
				var A_left_A = new Unit();
					A_left_A.number = A_left_A_number;
					A_left_A.morale = A_template.morale;
					A_left_A.maintenance = A_template.maintenance;
					A_left_A.skirmish_attack = A_template.skirmish_attack;
					A_left_A.melee_attack = A_template.melee_attack;
					A_left_A.pursue_attack = A_template.pursue_attack;
					A_left_A.skirmish_defence = A_template.skirmish_defence;
					A_left_A.melee_defence = A_template.melee_defence;
					A_left_A.pursue_defence = A_template.pursue_defence;
		document.getElementById("battleout").innerHTML += "Left Flank loaded";
		htmlbreak();

		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////

		///Now let's do the center flank

		var A_center = new Flank();
			A_center.commander_name = document.getElementById("Force_A_Commander_center_name"); //string name of commander
			A_center.commander = document.getElementById("Commander_Bonus_center_A"); //commander type
			A_center.phase = 1; //what phase is this flank in? i.e. has it retreated early //1 = skirmish 2 = melee 3 = pursue 4 = Retreat
			A_center.target = 2; //center, center, right
			A_center.LI = A_center_LI_number;
				var A_center_LI = new Unit();
					A_center_LI.number = A_center_LI_number;
					A_center_LI.morale = LI_template.morale;
					A_center_LI.maintenance = LI_template.maintenance;
					A_center_LI.skirmish_attack = LI_template.skirmish_attack;
					A_center_LI.melee_attack = LI_template.melee_attack;
					A_center_LI.pursue_attack = LI_template.pursue_attack;
					A_center_LI.skirmish_defence = LI_template.skirmish_defence;
					A_center_LI.melee_defence = LI_template.melee_defence;
					A_center_LI.pursue_defence = LI_template.pursue_defence;
			A_center.HI = A_center_HI_number;
				var A_center_HI = new Unit();
					A_center_HI.number = A_center_HI_number;
					A_center_HI.morale = HI_template.morale;
					A_center_HI.maintenance = HI_template.maintenance;
					A_center_HI.skirmish_attack = HI_template.skirmish_attack;
					A_center_HI.melee_attack = HI_template.melee_attack;
					A_center_HI.pursue_attack = HI_template.pursue_attack;
					A_center_HI.skirmish_defence = HI_template.skirmish_defence;
					A_center_HI.melee_defence = HI_template.melee_defence;
					A_center_HI.pursue_defence = HI_template.pursue_defence;
			A_center.HC = A_center_HC_number;
				var A_center_HC = new Unit();
					A_center_HC.number = A_center_HC_number;
					A_center_HC.morale = HC_template.morale;
					A_center_HC.maintenance = HC_template.maintenance;
					A_center_HC.skirmish_attack = HC_template.skirmish_attack;
					A_center_HC.melee_attack = HC_template.melee_attack;
					A_center_HC.pursue_attack = HC_template.pursue_attack;
					A_center_HC.skirmish_defence = HC_template.skirmish_defence;
					A_center_HC.melee_defence = HC_template.melee_defence;
					A_center_HC.pursue_defence = HC_template.pursue_defence;
			A_center.LC = A_center_LC_number;
				var A_center_LC = new Unit();
					A_center_LC.number = A_center_LC_number;
					A_center_LC.morale = LC_template.morale;
					A_center_LC.maintenance = LC_template.maintenance;
					A_center_LC.skirmish_attack = LC_template.skirmish_attack;
					A_center_LC.melee_attack = LC_template.melee_attack;
					A_center_LC.pursue_attack = LC_template.pursue_attack;
					A_center_LC.skirmish_defence = LC_template.skirmish_defence;
					A_center_LC.melee_defence = LC_template.melee_defence;
					A_center_LC.pursue_defence = LC_template.pursue_defence;
			A_center.CC = A_center_CC_number;
				var A_center_CC = new Unit();
					A_center_CC.number = A_center_CC_number;
					A_center_CC.morale = CC_template.morale;
					A_center_CC.maintenance = CC_template.maintenance;
					A_center_CC.skirmish_attack = CC_template.skirmish_attack;
					A_center_CC.melee_attack = CC_template.melee_attack;
					A_center_CC.pursue_attack = CC_template.pursue_attack;
					A_center_CC.skirmish_defence = CC_template.skirmish_defence;
					A_center_CC.melee_defence = CC_template.melee_defence;
					A_center_CC.pursue_defence = CC_template.pursue_defence;
			A_center.HA = A_center_HA_number;
				var A_center_HA = new Unit();
					A_center_HA.number = A_center_HA_number;
					A_center_HA.morale = HA_template.morale;
					A_center_HA.maintenance = HA_template.maintenance;
					A_center_HA.skirmish_attack = HA_template.skirmish_attack;
					A_center_HA.melee_attack = HA_template.melee_attack;
					A_center_HA.pursue_attack = HA_template.pursue_attack;
					A_center_HA.skirmish_defence = HA_template.skirmish_defence;
					A_center_HA.melee_defence = HA_template.melee_defence;
					A_center_HA.pursue_defence = HA_template.pursue_defence;
			A_center.WE = A_center_WE_number;
				var A_center_WE = new Unit();
					A_center_WE.number = A_center_WE_number;
					A_center_WE.morale = WE_template.morale;
					A_center_WE.maintenance = WE_template.maintenance;
					A_center_WE.skirmish_attack = WE_template.skirmish_attack;
					A_center_WE.melee_attack = WE_template.melee_attack;
					A_center_WE.pursue_attack = WE_template.pursue_attack;
					A_center_WE.skirmish_defence = WE_template.skirmish_defence;
					A_center_WE.melee_defence = WE_template.melee_defence;
					A_center_WE.pursue_defence = WE_template.pursue_defence;
			A_center.P = A_center_P_number;
				var A_center_P = new Unit();
					A_center_P.number = A_center_P_number;
					A_center_P.morale = P_template.morale;
					A_center_P.maintenance = P_template.maintenance;
					A_center_P.skirmish_attack = P_template.skirmish_attack;
					A_center_P.melee_attack = P_template.melee_attack;
					A_center_P.pursue_attack = P_template.pursue_attack;
					A_center_P.skirmish_defence = P_template.skirmish_defence;
					A_center_P.melee_defence = P_template.melee_defence;
					A_center_P.pursue_defence = P_template.pursue_defence;
			A_center.A = A_center_A_number;
				var A_center_A = new Unit();
					A_center_A.number = A_center_A_number;
					A_center_A.morale = A_template.morale;
					A_center_A.maintenance = A_template.maintenance;
					A_center_A.skirmish_attack = A_template.skirmish_attack;
					A_center_A.melee_attack = A_template.melee_attack;
					A_center_A.pursue_attack = A_template.pursue_attack;
					A_center_A.skirmish_defence = A_template.skirmish_defence;
					A_center_A.melee_defence = A_template.melee_defence;
					A_center_A.pursue_defence = A_template.pursue_defence;
		document.getElementById("battleout").innerHTML += "Center Flank loaded";
		htmlbreak();

		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		//Now let's do the right flank, this is the last flank for Force A

		var A_right = new Flank();
			A_right.commander_name = document.getElementById("Force_A_Commander_right_name"); //string name of commander
			A_right.commander = document.getElementById("Commander_Bonus_right_A"); //commander type
			A_right.phase = 1; //what phase is this flank in? i.e. has it retreated early //1 = skirmish 2 = melee 3 = pursue 4 = Retreat
			A_right.target = 3; //right, center, right
			A_right.LI = A_right_LI_number;
				var A_right_LI = new Unit()
					A_right_LI.number = A_right_LI_number;
					A_right_LI.morale = LI_template.morale;
					A_right_LI.maintenance = LI_template.maintenance;
					A_right_LI.skirmish_attack = LI_template.skirmish_attack;
					A_right_LI.melee_attack = LI_template.melee_attack;
					A_right_LI.pursue_attack = LI_template.pursue_attack;
					A_right_LI.skirmish_defence = LI_template.skirmish_defence;
					A_right_LI.melee_defence = LI_template.melee_defence;
					A_right_LI.pursue_defence = LI_template.pursue_defence;
			A_right.HI = A_right_HI_number;
				var A_right_HI = new Unit()
					A_right_HI.number = A_right_HI_number;
					A_right_HI.morale = HI_template.morale;
					A_right_HI.maintenance = HI_template.maintenance;
					A_right_HI.skirmish_attack = HI_template.skirmish_attack;
					A_right_HI.melee_attack = HI_template.melee_attack;
					A_right_HI.pursue_attack = HI_template.pursue_attack;
					A_right_HI.skirmish_defence = HI_template.skirmish_defence;
					A_right_HI.melee_defence = HI_template.melee_defence;
					A_right_HI.pursue_defence = HI_template.pursue_defence;
			A_right.HC = A_right_HC_number;
				var A_right_HC = new Unit()
					A_right_HC.number = A_right_HC_number;
					A_right_HC.morale = HC_template.morale;
					A_right_HC.maintenance = HC_template.maintenance;
					A_right_HC.skirmish_attack = HC_template.skirmish_attack;
					A_right_HC.melee_attack = HC_template.melee_attack;
					A_right_HC.pursue_attack = HC_template.pursue_attack;
					A_right_HC.skirmish_defence = HC_template.skirmish_defence;
					A_right_HC.melee_defence = HC_template.melee_defence;
					A_right_HC.pursue_defence = HC_template.pursue_defence;
			A_right.LC = A_right_LC_number;
				var A_right_LC = new Unit()
					A_right_LC.number = A_right_LC_number;
					A_right_LC.morale = LC_template.morale;
					A_right_LC.maintenance = LC_template.maintenance;
					A_right_LC.skirmish_attack = LC_template.skirmish_attack;
					A_right_LC.melee_attack = LC_template.melee_attack;
					A_right_LC.pursue_attack = LC_template.pursue_attack;
					A_right_LC.skirmish_defence = LC_template.skirmish_defence;
					A_right_LC.melee_defence = LC_template.melee_defence;
					A_right_LC.pursue_defence = LC_template.pursue_defence;
			A_right.CC = A_right_CC_number;
				var A_right_CC = new Unit()
					A_right_CC.number = A_right_CC_number;
					A_right_CC.morale = CC_template.morale;
					A_right_CC.maintenance = CC_template.maintenance;
					A_right_CC.skirmish_attack = CC_template.skirmish_attack;
					A_right_CC.melee_attack = CC_template.melee_attack;
					A_right_CC.pursue_attack = CC_template.pursue_attack;
					A_right_CC.skirmish_defence = CC_template.skirmish_defence;
					A_right_CC.melee_defence = CC_template.melee_defence;
					A_right_CC.pursue_defence = CC_template.pursue_defence;
			A_right.HA = A_right_HA_number;
				var A_right_HA = new Unit()
					A_right_HA.number = A_right_HA_number;
					A_right_HA.morale = HA_template.morale;
					A_right_HA.maintenance = HA_template.maintenance;
					A_right_HA.skirmish_attack = HA_template.skirmish_attack;
					A_right_HA.melee_attack = HA_template.melee_attack;
					A_right_HA.pursue_attack = HA_template.pursue_attack;
					A_right_HA.skirmish_defence = HA_template.skirmish_defence;
					A_right_HA.melee_defence = HA_template.melee_defence;
					A_right_HA.pursue_defence = HA_template.pursue_defence;
			A_right.WE = A_right_WE_number;
				var A_right_WE = new Unit()
					A_right_WE.number = A_right_WE_number;
					A_right_WE.morale = WE_template.morale;
					A_right_WE.maintenance = WE_template.maintenance;
					A_right_WE.skirmish_attack = WE_template.skirmish_attack;
					A_right_WE.melee_attack = WE_template.melee_attack;
					A_right_WE.pursue_attack = WE_template.pursue_attack;
					A_right_WE.skirmish_defence = WE_template.skirmish_defence;
					A_right_WE.melee_defence = WE_template.melee_defence;
					A_right_WE.pursue_defence = WE_template.pursue_defence;
			A_right.P = A_right_P_number;
				var A_right_P = new Unit()
					A_right_P.number = A_right_P_number;
					A_right_P.morale = P_template.morale;
					A_right_P.maintenance = P_template.maintenance;
					A_right_P.skirmish_attack = P_template.skirmish_attack;
					A_right_P.melee_attack = P_template.melee_attack;
					A_right_P.pursue_attack = P_template.pursue_attack;
					A_right_P.skirmish_defence = P_template.skirmish_defence;
					A_right_P.melee_defence = P_template.melee_defence;
					A_right_P.pursue_defence = P_template.pursue_defence;
			A_right.A = A_right_A_number;
				var A_right_A = new Unit()
					A_right_A.number = A_right_A_number;
					A_right_A.morale = A_template.morale;
					A_right_A.maintenance = A_template.maintenance;
					A_right_A.skirmish_attack = A_template.skirmish_attack;
					A_right_A.melee_attack = A_template.melee_attack;
					A_right_A.pursue_attack = A_template.pursue_attack;
					A_right_A.skirmish_defence = A_template.skirmish_defence;
					A_right_A.melee_defence = A_template.melee_defence;
					A_right_A.pursue_defence = A_template.pursue_defence;
		document.getElementById("battleout").innerHTML += "Right Flank loaded";
		htmlbreak();

		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////




		//Create the left flank
		var B_left_LI_number = parseInt(document.getElementById("Force_B_left_input_LI").value);
		var B_left_HI_number = parseInt(document.getElementById("Force_B_left_input_HI").value);
		var B_left_HC_number = parseInt(document.getElementById("Force_B_left_input_HC").value);
		var B_left_LC_number = parseInt(document.getElementById("Force_B_left_input_LC").value);
		var B_left_CC_number = parseInt(document.getElementById("Force_B_left_input_CC").value);
		var B_left_HA_number = parseInt(document.getElementById("Force_B_left_input_HA").value);
		var B_left_WE_number = parseInt(document.getElementById("Force_B_left_input_WE").value);
		var B_left_P_number = parseInt(document.getElementById("Force_B_left_input_P").value);
		var B_left_A_number = parseInt(document.getElementById("Force_B_left_input_A").value);
		//Create the center flank
		var B_center_LI_number = parseInt(document.getElementById("Force_B_center_input_LI").value);
		var B_center_HI_number = parseInt(document.getElementById("Force_B_center_input_HI").value);
		var B_center_HC_number = parseInt(document.getElementById("Force_B_center_input_HC").value);
		var B_center_LC_number = parseInt(document.getElementById("Force_B_center_input_LC").value);
		var B_center_CC_number = parseInt(document.getElementById("Force_B_center_input_CC").value);
		var B_center_HA_number = parseInt(document.getElementById("Force_B_center_input_HA").value);
		var B_center_WE_number = parseInt(document.getElementById("Force_B_center_input_WE").value);
		var B_center_P_number = parseInt(document.getElementById("Force_B_center_input_P").value);
		var B_center_A_number = parseInt(document.getElementById("Force_B_center_input_A").value);
		//Create the right flank
		var B_right_LI_number = parseInt(document.getElementById("Force_B_right_input_LI").value);
		var B_right_HI_number = parseInt(document.getElementById("Force_B_right_input_HI").value);
		var B_right_HC_number = parseInt(document.getElementById("Force_B_right_input_HC").value);
		var B_right_LC_number = parseInt(document.getElementById("Force_B_right_input_LC").value);
		var B_right_CC_number = parseInt(document.getElementById("Force_B_right_input_CC").value);
		var B_right_HA_number = parseInt(document.getElementById("Force_B_right_input_HA").value);
		var B_right_WE_number = parseInt(document.getElementById("Force_B_right_input_WE").value);
		var B_right_P_number = parseInt(document.getElementById("Force_B_right_input_P").value);
		var B_right_A_number = parseInt(document.getElementById("Force_B_right_input_A").value);
		document.getElementById("battleout").innerHTML += "Numbers imported";
		htmlbreak();
		var B_left = new Flank();
			B_left.commander_name = document.getElementById("Force_B_Commander_left_name"); //string name of commander
			B_left.commander = document.getElementById("Commander_Bonus_left_B"); //commander type
			B_left.phase = 1; //what phase is this flank in? i.e. has it retreated early //1 = skirmish 2 = melee 3 = pursue 4 = Retreat
			B_left.target = 1; //1 left, 2 center, 3 right
			B_left.LI = B_left_LI_number;
				var B_left_LI = new Unit();
					B_left_LI.number = B_left_LI_number;
					B_left_LI.morale = LI_template.morale;
					B_left_LI.maintenance = LI_template.maintenance;
					B_left_LI.skirmish_attack = LI_template.skirmish_attack;
					B_left_LI.melee_attack = LI_template.melee_attack;
					B_left_LI.pursue_attack = LI_template.pursue_attack;
					B_left_LI.skirmish_defence = LI_template.skirmish_defence;
					B_left_LI.melee_defence = LI_template.melee_defence;
					B_left_LI.pursue_defence = LI_template.pursue_defence;
			B_left.HI = B_left_HI_number;
				var B_left_HI = new Unit();
					B_left_HI.number = B_left_HI_number;
					B_left_HI.morale = HI_template.morale;
					B_left_HI.maintenance = HI_template.maintenance;
					B_left_HI.skirmish_attack = HI_template.skirmish_attack;
					B_left_HI.melee_attack = HI_template.melee_attack;
					B_left_HI.pursue_attack = HI_template.pursue_attack;
					B_left_HI.skirmish_defence = HI_template.skirmish_defence;
					B_left_HI.melee_defence = HI_template.melee_defence;
					B_left_HI.pursue_defence = HI_template.pursue_defence;
			B_left.HC = B_left_HC_number;
				var B_left_HC = new Unit();
					B_left_HC.number = B_left_HC_number;
					B_left_HC.morale = HC_template.morale;
					B_left_HC.maintenance = HC_template.maintenance;
					B_left_HC.skirmish_attack = HC_template.skirmish_attack;
					B_left_HC.melee_attack = HC_template.melee_attack;
					B_left_HC.pursue_attack = HC_template.pursue_attack;
					B_left_HC.skirmish_defence = HC_template.skirmish_defence;
					B_left_HC.melee_defence = HC_template.melee_defence;
					B_left_HC.pursue_defence = HC_template.pursue_defence;
			B_left.LC = B_left_LC_number;
				var B_left_LC = new Unit();
					B_left_LC.number = B_left_LC_number;
					B_left_LC.morale = LC_template.morale;
					B_left_LC.maintenance = LC_template.maintenance;
					B_left_LC.skirmish_attack = LC_template.skirmish_attack;
					B_left_LC.melee_attack = LC_template.melee_attack;
					B_left_LC.pursue_attack = LC_template.pursue_attack;
					B_left_LC.skirmish_defence = LC_template.skirmish_defence;
					B_left_LC.melee_defence = LC_template.melee_defence;
					B_left_LC.pursue_defence = LC_template.pursue_defence;
			B_left.CC = B_left_CC_number;
				var B_left_CC = new Unit();
					B_left_CC.number = B_left_CC_number;
					B_left_CC.morale = CC_template.morale;
					B_left_CC.maintenance = CC_template.maintenance;
					B_left_CC.skirmish_attack = CC_template.skirmish_attack;
					B_left_CC.melee_attack = CC_template.melee_attack;
					B_left_CC.pursue_attack = CC_template.pursue_attack;
					B_left_CC.skirmish_defence = CC_template.skirmish_defence;
					B_left_CC.melee_defence = CC_template.melee_defence;
					B_left_CC.pursue_defence = CC_template.pursue_defence;
			B_left.HA = B_left_HA_number;
				var B_left_HA = new Unit();
					B_left_HA.number = B_left_HA_number;
					B_left_HA.morale = HA_template.morale;
					B_left_HA.maintenance = HA_template.maintenance;
					B_left_HA.skirmish_attack = HA_template.skirmish_attack;
					B_left_HA.melee_attack = HA_template.melee_attack;
					B_left_HA.pursue_attack = HA_template.pursue_attack;
					B_left_HA.skirmish_defence = HA_template.skirmish_defence;
					B_left_HA.melee_defence = HA_template.melee_defence;
					B_left_HA.pursue_defence = HA_template.pursue_defence;
			B_left.WE = B_left_WE_number;
				var B_left_WE = new Unit();
					B_left_WE.number = B_left_WE_number;
					B_left_WE.morale = WE_template.morale;
					B_left_WE.maintenance = WE_template.maintenance;
					B_left_WE.skirmish_attack = WE_template.skirmish_attack;
					B_left_WE.melee_attack = WE_template.melee_attack;
					B_left_WE.pursue_attack = WE_template.pursue_attack;
					B_left_WE.skirmish_defence = WE_template.skirmish_defence;
					B_left_WE.melee_defence = WE_template.melee_defence;
					B_left_WE.pursue_defence = WE_template.pursue_defence;
			B_left.P = B_left_P_number;
				var B_left_P = new Unit();
					B_left_P.number = B_left_P_number;
					B_left_P.morale = P_template.morale;
					B_left_P.maintenance = P_template.maintenance;
					B_left_P.skirmish_attack = P_template.skirmish_attack;
					B_left_P.melee_attack = P_template.melee_attack;
					B_left_P.pursue_attack = P_template.pursue_attack;
					B_left_P.skirmish_defence = P_template.skirmish_defence;
					B_left_P.melee_defence = P_template.melee_defence;
					B_left_P.pursue_defence = P_template.pursue_defence;
			B_left.A = B_left_A_number;
				var B_left_A = new Unit();
					B_left_A.number = B_left_A_number;
					B_left_A.morale = A_template.morale;
					B_left_A.maintenance = A_template.maintenance;
					B_left_A.skirmish_attack = A_template.skirmish_attack;
					B_left_A.melee_attack = A_template.melee_attack;
					B_left_A.pursue_attack = A_template.pursue_attack;
					B_left_A.skirmish_defence = A_template.skirmish_defence;
					B_left_A.melee_defence = A_template.melee_defence;
					B_left_A.pursue_defence = A_template.pursue_defence;
		document.getElementById("battleout").innerHTML += "Left Flank loaded";
		htmlbreak();

		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////

		///Now let's do the center flank

		var B_center = new Flank();
			B_center.commander_name = document.getElementById("Force_B_Commander_center_name"); //string name of commander
			B_center.commander = document.getElementById("Commander_Bonus_center_B"); //commander type
			B_center.phase = 1; //what phase is this flank in? i.e. has it retreated early //1 = skirmish 2 = melee 3 = pursue 4 = Retreat
			B_center.target = 2; //1 left, 2 center, 3 right
			B_center.LI = B_center_LI_number;
				var B_center_LI = new Unit();
					B_center_LI.number = B_center_LI_number;
					B_center_LI.morale = LI_template.morale;
					B_center_LI.maintenance = LI_template.maintenance;
					B_center_LI.skirmish_attack = LI_template.skirmish_attack;
					B_center_LI.melee_attack = LI_template.melee_attack;
					B_center_LI.pursue_attack = LI_template.pursue_attack;
					B_center_LI.skirmish_defence = LI_template.skirmish_defence;
					B_center_LI.melee_defence = LI_template.melee_defence;
					B_center_LI.pursue_defence = LI_template.pursue_defence;
			B_center.HI = B_center_HI_number;
				var B_center_HI = new Unit();
					B_center_HI.number = B_center_HI_number;
					B_center_HI.morale = HI_template.morale;
					B_center_HI.maintenance = HI_template.maintenance;
					B_center_HI.skirmish_attack = HI_template.skirmish_attack;
					B_center_HI.melee_attack = HI_template.melee_attack;
					B_center_HI.pursue_attack = HI_template.pursue_attack;
					B_center_HI.skirmish_defence = HI_template.skirmish_defence;
					B_center_HI.melee_defence = HI_template.melee_defence;
					B_center_HI.pursue_defence = HI_template.pursue_defence;
			B_center.HC = B_center_HC_number;
				var B_center_HC = new Unit();
					B_center_HC.number = B_center_HC_number;
					B_center_HC.morale = HC_template.morale;
					B_center_HC.maintenance = HC_template.maintenance;
					B_center_HC.skirmish_attack = HC_template.skirmish_attack;
					B_center_HC.melee_attack = HC_template.melee_attack;
					B_center_HC.pursue_attack = HC_template.pursue_attack;
					B_center_HC.skirmish_defence = HC_template.skirmish_defence;
					B_center_HC.melee_defence = HC_template.melee_defence;
					B_center_HC.pursue_defence = HC_template.pursue_defence;
			B_center.LC = B_center_LC_number;
				var B_center_LC = new Unit();
					B_center_LC.number = B_center_LC_number;
					B_center_LC.morale = LC_template.morale;
					B_center_LC.maintenance = LC_template.maintenance;
					B_center_LC.skirmish_attack = LC_template.skirmish_attack;
					B_center_LC.melee_attack = LC_template.melee_attack;
					B_center_LC.pursue_attack = LC_template.pursue_attack;
					B_center_LC.skirmish_defence = LC_template.skirmish_defence;
					B_center_LC.melee_defence = LC_template.melee_defence;
					B_center_LC.pursue_defence = LC_template.pursue_defence;
			B_center.CC = B_center_CC_number;
				var B_center_CC = new Unit();
					B_center_CC.number = B_center_CC_number;
					B_center_CC.morale = CC_template.morale;
					B_center_CC.maintenance = CC_template.maintenance;
					B_center_CC.skirmish_attack = CC_template.skirmish_attack;
					B_center_CC.melee_attack = CC_template.melee_attack;
					B_center_CC.pursue_attack = CC_template.pursue_attack;
					B_center_CC.skirmish_defence = CC_template.skirmish_defence;
					B_center_CC.melee_defence = CC_template.melee_defence;
					B_center_CC.pursue_defence = CC_template.pursue_defence;
			B_center.HA = B_center_HA_number;
				var B_center_HA = new Unit();
					B_center_HA.number = B_center_HA_number;
					B_center_HA.morale = HA_template.morale;
					B_center_HA.maintenance = HA_template.maintenance;
					B_center_HA.skirmish_attack = HA_template.skirmish_attack;
					B_center_HA.melee_attack = HA_template.melee_attack;
					B_center_HA.pursue_attack = HA_template.pursue_attack;
					B_center_HA.skirmish_defence = HA_template.skirmish_defence;
					B_center_HA.melee_defence = HA_template.melee_defence;
					B_center_HA.pursue_defence = HA_template.pursue_defence;
			B_center.WE = B_center_WE_number;
				var B_center_WE = new Unit();
					B_center_WE.number = B_center_WE_number;
					B_center_WE.morale = WE_template.morale;
					B_center_WE.maintenance = WE_template.maintenance;
					B_center_WE.skirmish_attack = WE_template.skirmish_attack;
					B_center_WE.melee_attack = WE_template.melee_attack;
					B_center_WE.pursue_attack = WE_template.pursue_attack;
					B_center_WE.skirmish_defence = WE_template.skirmish_defence;
					B_center_WE.melee_defence = WE_template.melee_defence;
					B_center_WE.pursue_defence = WE_template.pursue_defence;
			B_center.P = B_center_P_number;
				var B_center_P = new Unit();
					B_center_P.number = B_center_P_number;
					B_center_P.morale = P_template.morale;
					B_center_P.maintenance = P_template.maintenance;
					B_center_P.skirmish_attack = P_template.skirmish_attack;
					B_center_P.melee_attack = P_template.melee_attack;
					B_center_P.pursue_attack = P_template.pursue_attack;
					B_center_P.skirmish_defence = P_template.skirmish_defence;
					B_center_P.melee_defence = P_template.melee_defence;
					B_center_P.pursue_defence = P_template.pursue_defence;
			B_center.A = B_center_A_number;
				var B_center_A = new Unit();
					B_center_A.number = B_center_A_number;
					B_center_A.morale = A_template.morale;
					B_center_A.maintenance = A_template.maintenance;
					B_center_A.skirmish_attack = A_template.skirmish_attack;
					B_center_A.melee_attack = A_template.melee_attack;
					B_center_A.pursue_attack = A_template.pursue_attack;
					B_center_A.skirmish_defence = A_template.skirmish_defence;
					B_center_A.melee_defence = A_template.melee_defence;
					B_center_A.pursue_defence = A_template.pursue_defence;
		document.getElementById("battleout").innerHTML += "Center Flank loaded";
		htmlbreak();

		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		//Now let's do the right flank, this is the last flank for Force A

		var B_right = new Flank();
			B_right.commander_name = document.getElementById("Force_B_Commander_right_name"); //string name of commander
			B_right.commander = document.getElementById("Commander_Bonus_right_B"); //commander type
			B_right.phase = 1; //what phase is this flank in? i.e. has it retreated early //1 = skirmish 2 = melee 3 = pursue 4 = Retreat
			B_right.target = 3; //1 left, 2 center, 3 right
			B_right.LI = B_right_LI_number;
				var B_right_LI = new Unit()
					B_right_LI.number = B_right_LI_number;
					B_right_LI.morale = LI_template.morale;
					B_right_LI.maintenance = LI_template.maintenance;
					B_right_LI.skirmish_attack = LI_template.skirmish_attack;
					B_right_LI.melee_attack = LI_template.melee_attack;
					B_right_LI.pursue_attack = LI_template.pursue_attack;
					B_right_LI.skirmish_defence = LI_template.skirmish_defence;
					B_right_LI.melee_defence = LI_template.melee_defence;
					B_right_LI.pursue_defence = LI_template.pursue_defence;
			B_right.HI = B_right_HI_number;
				var B_right_HI = new Unit()
					B_right_HI.number = B_right_HI_number;
					B_right_HI.morale = HI_template.morale;
					B_right_HI.maintenance = HI_template.maintenance;
					B_right_HI.skirmish_attack = HI_template.skirmish_attack;
					B_right_HI.melee_attack = HI_template.melee_attack;
					B_right_HI.pursue_attack = HI_template.pursue_attack;
					B_right_HI.skirmish_defence = HI_template.skirmish_defence;
					B_right_HI.melee_defence = HI_template.melee_defence;
					B_right_HI.pursue_defence = HI_template.pursue_defence;
			B_right.HC = B_right_HC_number;
				var B_right_HC = new Unit()
					B_right_HC.number = B_right_HC_number;
					B_right_HC.morale = HC_template.morale;
					B_right_HC.maintenance = HC_template.maintenance;
					B_right_HC.skirmish_attack = HC_template.skirmish_attack;
					B_right_HC.melee_attack = HC_template.melee_attack;
					B_right_HC.pursue_attack = HC_template.pursue_attack;
					B_right_HC.skirmish_defence = HC_template.skirmish_defence;
					B_right_HC.melee_defence = HC_template.melee_defence;
					B_right_HC.pursue_defence = HC_template.pursue_defence;
			B_right.LC = B_right_LC_number;
				var B_right_LC = new Unit()
					B_right_LC.number = B_right_LC_number;
					B_right_LC.morale = LC_template.morale;
					B_right_LC.maintenance = LC_template.maintenance;
					B_right_LC.skirmish_attack = LC_template.skirmish_attack;
					B_right_LC.melee_attack = LC_template.melee_attack;
					B_right_LC.pursue_attack = LC_template.pursue_attack;
					B_right_LC.skirmish_defence = LC_template.skirmish_defence;
					B_right_LC.melee_defence = LC_template.melee_defence;
					B_right_LC.pursue_defence = LC_template.pursue_defence;
			B_right.CC = B_right_CC_number;
				var B_right_CC = new Unit()
					B_right_CC.number = B_right_CC_number;
					B_right_CC.morale = CC_template.morale;
					B_right_CC.maintenance = CC_template.maintenance;
					B_right_CC.skirmish_attack = CC_template.skirmish_attack;
					B_right_CC.melee_attack = CC_template.melee_attack;
					B_right_CC.pursue_attack = CC_template.pursue_attack;
					B_right_CC.skirmish_defence = CC_template.skirmish_defence;
					B_right_CC.melee_defence = CC_template.melee_defence;
					B_right_CC.pursue_defence = CC_template.pursue_defence;
			B_right.HA = B_right_HA_number;
				var B_right_HA = new Unit()
					B_right_HA.number = B_right_HA_number;
					B_right_HA.morale = HA_template.morale;
					B_right_HA.maintenance = HA_template.maintenance;
					B_right_HA.skirmish_attack = HA_template.skirmish_attack;
					B_right_HA.melee_attack = HA_template.melee_attack;
					B_right_HA.pursue_attack = HA_template.pursue_attack;
					B_right_HA.skirmish_defence = HA_template.skirmish_defence;
					B_right_HA.melee_defence = HA_template.melee_defence;
					B_right_HA.pursue_defence = HA_template.pursue_defence;
			B_right.WE = B_right_WE_number;
				var B_right_WE = new Unit()
					B_right_WE.number = B_right_WE_number;
					B_right_WE.morale = WE_template.morale;
					B_right_WE.maintenance = WE_template.maintenance;
					B_right_WE.skirmish_attack = WE_template.skirmish_attack;
					B_right_WE.melee_attack = WE_template.melee_attack;
					B_right_WE.pursue_attack = WE_template.pursue_attack;
					B_right_WE.skirmish_defence = WE_template.skirmish_defence;
					B_right_WE.melee_defence = WE_template.melee_defence;
					B_right_WE.pursue_defence = WE_template.pursue_defence;
			B_right.P = B_right_P_number;
				var B_right_P = new Unit()
					B_right_P.number = B_right_P_number;
					B_right_P.morale = P_template.morale;
					B_right_P.maintenance = P_template.maintenance;
					B_right_P.skirmish_attack = P_template.skirmish_attack;
					B_right_P.melee_attack = P_template.melee_attack;
					B_right_P.pursue_attack = P_template.pursue_attack;
					B_right_P.skirmish_defence = P_template.skirmish_defence;
					B_right_P.melee_defence = P_template.melee_defence;
					B_right_P.pursue_defence = P_template.pursue_defence;
			B_right.A = B_right_A_number;
				var B_right_A = new Unit()
					B_right_A.number = B_right_A_number;
					B_right_A.morale = A_template.morale;
					B_right_A.maintenance = A_template.maintenance;
					B_right_A.skirmish_attack = A_template.skirmish_attack;
					B_right_A.melee_attack = A_template.melee_attack;
					B_right_A.pursue_attack = A_template.pursue_attack;
					B_right_A.skirmish_defence = A_template.skirmish_defence;
					B_right_A.melee_defence = A_template.melee_defence;
					B_right_A.pursue_defence = A_template.pursue_defence;
		document.getElementById("battleout").innerHTML += "Right Flank loaded";
		htmlbreak();

		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////
		/////////////////////////////////



	document.getElementById("battleout").innerHTML += "Transferring Flanks into Army A...";
	htmlbreak();

		Force_A.LI = A_left.LI + A_center.LI + A_right.LI; //Total Light Inf
		Force_A.HI = A_left.HI + A_center.HI + A_right.HI; //Total Heavy Inf
		Force_A.LC = A_left.LC + A_center.LC + A_right.LC; //Total Light Cav
		Force_A.HC = A_left.HC + A_center.HC + A_right.HC; //Total Heavy Cav
		Force_A.A = A_left.A + A_center.A + A_right.A; //Total Ranged Inf/Archers
		Force_A.P = A_left.P + A_center.P + A_right.P; //Total Pike
		Force_A.HA = A_left.HA + A_center.HA + A_right.HA; //Total Horse Archers
		Force_A.WE = A_left.WE + A_center.WE + A_right.WE; //Total War Elephants
		Force_A.CC = A_left.CC + A_center.CC + A_right.CC; //Total Camel Cav

	document.getElementById("battleout").innerHTML += "Force A unit stats prepped.";
	htmlbreak();


	document.getElementById("battleout").innerHTML += "Transferring Flanks into Army B...";
	htmlbreak();

		Force_B.LI = B_left.LI + B_center.LI + B_right.LI; //Total Light Inf
		Force_B.HI = B_left.HI + B_center.HI + B_right.HI; //Total Heavy Inf
		Force_B.LC = B_left.LC + B_center.LC + B_right.LC; //Total Light Cav
		Force_B.HC = B_left.HC + B_center.HC + B_right.HC; //Total Heavy Cav
		Force_B.A = B_left.A + B_center.A + B_right.A; //Total Ranged Inf/Archers
		Force_B.P = B_left.P + B_center.P + B_right.P; //Total Pike
		Force_B.HA = B_left.HA + B_center.HA + B_right.HA; //Total Horse Archers
		Force_B.WE = B_left.WE + B_center.WE + B_right.WE; //Total War Elephants
		Force_B.CC = B_left.CC + B_center.CC + B_right.CC; //Total Camel Cav

	document.getElementById("battleout").innerHTML += "Force B unit stats prepped.";
	htmlbreak();





	//COMBAT (FUCKING FINALLY)


		//SKIRMISH
			Phase = 1;

			//Left Flank
			//A_left_LI.current_attack = A_left_LI.skirmish_attack * (1 + A_TechBonus.LI + terrainbonus + culturalbonus + tacticbonus) * (1 + leadertraitbonus + tacticalaffinitybonus).
			A_left_LI.current_attack = A_left_LI.skirmish_attack * (1 + A_TechBonus.LI) * 1;
			A_left_A.current_attack = A_left_A.skirmish_attack * (1 + A_TechBonus.LI) * 1;
			A_left_HI.current_attack = A_left_HI.skirmish_attack * (1 + A_TechBonus.HI) * 1;
			A_left_P.current_attack = A_left_P.skirmish_attack * (1 + A_TechBonus.HI) * 1;
			A_left_LC.current_attack = A_left_LC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_left_HC.current_attack = A_left_HC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_left_CC.current_attack = A_left_CC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_left_HA.current_attack = A_left_HA.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_left_WE.current_attack = A_left_WE.skirmish_attack * (1 + A_TechBonus.CAV) * 1;

			A_left_LI.current_defence = A_left_LI.skirmish_defence * (1 + A_TechBonus.LI) * 1;
			A_left_A.current_defence = A_left_A.skirmish_defence * (1 + A_TechBonus.LI) * 1;
			A_left_HI.current_defence = A_left_HI.skirmish_defence * (1 + A_TechBonus.HI) * 1;
			A_left_P.current_defence = A_left_P.skirmish_defence * (1 + A_TechBonus.HI) * 1;
			A_left_LC.current_defence = A_left_LC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_left_HC.current_defence = A_left_HC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_left_CC.current_defence = A_left_CC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_left_HA.current_defence = A_left_HA.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_left_WE.current_defence = A_left_WE.skirmish_defence * (1 + A_TechBonus.CAV) * 1;

			//Center Flank
			A_center_LI.current_attack = A_center_LI.skirmish_attack * (1 + A_TechBonus.LI) * 1;
			A_center_A.current_attack = A_center_A.skirmish_attack * (1 + A_TechBonus.LI) * 1;
			A_center_HI.current_attack = A_center_HI.skirmish_attack * (1 + A_TechBonus.HI) * 1;
			A_center_P.current_attack = A_center_P.skirmish_attack * (1 + A_TechBonus.HI) * 1;
			A_center_LC.current_attack = A_center_LC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_center_HC.current_attack = A_center_HC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_center_CC.current_attack = A_center_CC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_center_HA.current_attack = A_center_HA.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_center_WE.current_attack = A_center_WE.skirmish_attack * (1 + A_TechBonus.CAV) * 1;

			A_center_LI.current_defence = A_center_LI.skirmish_defence * (1 + A_TechBonus.LI) * 1;
			A_center_A.current_defence = A_center_A.skirmish_defence * (1 + A_TechBonus.LI) * 1;
			A_center_HI.current_defence = A_center_HI.skirmish_defence * (1 + A_TechBonus.HI) * 1;
			A_center_P.current_defence = A_center_P.skirmish_defence * (1 + A_TechBonus.HI) * 1;
			A_center_LC.current_defence = A_center_LC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_center_HC.current_defence = A_center_HC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_center_CC.current_defence = A_center_CC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_center_HA.current_defence = A_center_HA.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_center_WE.current_defence = A_center_WE.skirmish_defence * (1 + A_TechBonus.CAV) * 1;

			//Right Flank
			A_right_LI.current_attack = A_right_LI.skirmish_attack * (1 + A_TechBonus.LI) * 1;
			A_right_A.current_attack = A_right_A.skirmish_attack * (1 + A_TechBonus.LI) * 1;
			A_right_HI.current_attack = A_right_HI.skirmish_attack * (1 + A_TechBonus.HI) * 1;
			A_right_P.current_attack = A_right_P.skirmish_attack * (1 + A_TechBonus.HI) * 1;
			A_right_LC.current_attack = A_right_LC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_right_HC.current_attack = A_right_HC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_right_CC.current_attack = A_right_CC.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_right_HA.current_attack = A_right_HA.skirmish_attack * (1 + A_TechBonus.CAV) * 1;
			A_right_WE.current_attack = A_right_WE.skirmish_attack * (1 + A_TechBonus.CAV) * 1;

			A_right_LI.current_defence = A_right_LI.skirmish_defence * (1 + A_TechBonus.LI) * 1;
			A_right_A.current_defence = A_right_A.skirmish_defence * (1 + A_TechBonus.LI) * 1;
			A_right_HI.current_defence = A_right_HI.skirmish_defence * (1 + A_TechBonus.HI) * 1;
			A_right_P.current_defence = A_right_P.skirmish_defence * (1 + A_TechBonus.HI) * 1;
			A_right_LC.current_defence = A_right_LC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_right_HC.current_defence = A_right_HC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_right_CC.current_defence = A_right_CC.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_right_HA.current_defence = A_right_HA.skirmish_defence * (1 + A_TechBonus.CAV) * 1;
			A_right_WE.current_defence = A_right_WE.skirmish_defence * (1 + A_TechBonus.CAV) * 1;


			document.getElementById("battleout").innerHTML += "Force A attack values loaded";
			htmlbreak();


			//Left Flank
			//B_left_LI.current_attack = B_left_LI.skirmish_attack * (1 + B_TechBonus.LI + terrainbonus + culturalbonus + tacticbonus) * (1 + leadertraitbonus + tacticalaffinitybonus).
			B_left_LI.current_attack = B_left_LI.skirmish_attack * (1 + B_TechBonus.LI) * 1;
			B_left_A.current_attack = B_left_A.skirmish_attack * (1 + B_TechBonus.LI) * 1;
			B_left_HI.current_attack = B_left_HI.skirmish_attack * (1 + B_TechBonus.HI) * 1;
			B_left_P.current_attack = B_left_P.skirmish_attack * (1 + B_TechBonus.HI) * 1;
			B_left_LC.current_attack = B_left_LC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_left_HC.current_attack = B_left_HC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_left_CC.current_attack = B_left_CC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_left_HA.current_attack = B_left_HA.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_left_WE.current_attack = B_left_WE.skirmish_attack * (1 + B_TechBonus.CAV) * 1;

			B_left_LI.current_defence = B_left_LI.skirmish_defence * (1 + B_TechBonus.LI) * 1;
			B_left_A.current_defence = B_left_A.skirmish_defence * (1 + B_TechBonus.LI) * 1;
			B_left_HI.current_defence = B_left_HI.skirmish_defence * (1 + B_TechBonus.HI) * 1;
			B_left_P.current_defence = B_left_P.skirmish_defence * (1 + B_TechBonus.HI) * 1;
			B_left_LC.current_defence = B_left_LC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_left_HC.current_defence = B_left_HC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_left_CC.current_defence = B_left_CC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_left_HA.current_defence = B_left_HA.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_left_WE.current_defence = B_left_WE.skirmish_defence * (1 + B_TechBonus.CAV) * 1;

			//Center Flank
			B_center_LI.current_attack = B_center_LI.skirmish_attack * (1 + B_TechBonus.LI) * 1;
			B_center_A.current_attack = B_center_A.skirmish_attack * (1 + B_TechBonus.LI) * 1;
			B_center_HI.current_attack = B_center_HI.skirmish_attack * (1 + B_TechBonus.HI) * 1;
			B_center_P.current_attack = B_center_P.skirmish_attack * (1 + B_TechBonus.HI) * 1;
			B_center_LC.current_attack = B_center_LC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_center_HC.current_attack = B_center_HC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_center_CC.current_attack = B_center_CC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_center_HA.current_attack = B_center_HA.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_center_WE.current_attack = B_center_WE.skirmish_attack * (1 + B_TechBonus.CAV) * 1;

			B_center_LI.current_defence = B_center_LI.skirmish_defence * (1 + B_TechBonus.LI) * 1;
			B_center_A.current_defence = B_center_A.skirmish_defence * (1 + B_TechBonus.LI) * 1;
			B_center_HI.current_defence = B_center_HI.skirmish_defence * (1 + B_TechBonus.HI) * 1;
			B_center_P.current_defence = B_center_P.skirmish_defence * (1 + B_TechBonus.HI) * 1;
			B_center_LC.current_defence = B_center_LC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_center_HC.current_defence = B_center_HC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_center_CC.current_defence = B_center_CC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_center_HA.current_defence = B_center_HA.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_center_WE.current_defence = B_center_WE.skirmish_defence * (1 + B_TechBonus.CAV) * 1;

			//Right Flank
			B_right_LI.current_attack = B_right_LI.skirmish_attack * (1 + B_TechBonus.LI) * 1;
			B_right_A.current_attack = B_right_A.skirmish_attack * (1 + B_TechBonus.LI) * 1;
			B_right_HI.current_attack = B_right_HI.skirmish_attack * (1 + B_TechBonus.HI) * 1;
			B_right_P.current_attack = B_right_P.skirmish_attack * (1 + B_TechBonus.HI) * 1;
			B_right_LC.current_attack = B_right_LC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_right_HC.current_attack = B_right_HC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_right_CC.current_attack = B_right_CC.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_right_HA.current_attack = B_right_HA.skirmish_attack * (1 + B_TechBonus.CAV) * 1;
			B_right_WE.current_attack = B_right_WE.skirmish_attack * (1 + B_TechBonus.CAV) * 1;

			B_right_LI.current_defence = B_right_LI.skirmish_defence * (1 + B_TechBonus.LI) * 1;
			B_right_A.current_defence = B_right_A.skirmish_defence * (1 + B_TechBonus.LI) * 1;
			B_right_HI.current_defence = B_right_HI.skirmish_defence * (1 + B_TechBonus.HI) * 1;
			B_right_P.current_defence = B_right_P.skirmish_defence * (1 + B_TechBonus.HI) * 1;
			B_right_LC.current_defence = B_right_LC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_right_HC.current_defence = B_right_HC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_right_CC.current_defence = B_right_CC.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_right_HA.current_defence = B_right_HA.skirmish_defence * (1 + B_TechBonus.CAV) * 1;
			B_right_WE.current_defence = B_right_WE.skirmish_defence * (1 + B_TechBonus.CAV) * 1;


			document.getElementById("battleout").innerHTML += "Force B attack values loaded";
			htmlbreak();


			//detect if flanks have soldiers, if they don't then their phase is set to 5 immediately so that an enemy flank doesn't get cheated out of combat by attacking empty flank
			if (A_left_LI.number == 0 && A_left_HI.number == 0 && A_left_LC.number == 0 && A_left_HC.number == 0 && A_left_A.number == 0 && A_left_P.number == 0 && A_left_HA.number == 0 && A_left_CC.number == 0 && A_left_WE.number == 0){
				//If A_left has empty soldiers on every slot, it's clearly empty so set it to phase 5
				A_left.phase = 5;
			}

			if (A_center_LI.number == 0 && A_center_HI.number == 0 && A_center_LC.number == 0 && A_center_HC.number == 0 && A_center_A.number == 0 && A_center_P.number == 0 && A_center_HA.number == 0 && A_center_CC.number == 0 && A_center_WE.number == 0){
				//If A_center has empty soldiers on every slot, it's clearly empty so set it to phase 5
				A_center.phase = 5;
			}

			if (A_right_LI.number == 0 && A_right_HI.number == 0 && A_right_LC.number == 0 && A_right_HC.number == 0 && A_right_A.number == 0 && A_right_P.number == 0 && A_right_HA.number == 0 && A_right_CC.number == 0 && A_right_WE.number == 0){
				//If A_right has empty soldiers on every slot, it's clearly empty so set it to phase 5
				A_right.phase = 5;
			}

			if (A_left.phase == 5 && A_center.phase == 5 && A_right.phase == 5){
				//combat is impossible, there is literally nobody to fight
				document.getElementById("battleout").innerHTML += "Combat ended. Force A has no soldiers left to fight!";
				end = 1; //end the loop
			}

			//detect if flanks have soldiers, if they don't then their phase is set to 5 immediately so that an enemy flank doesn't get cheated out of combat by attacking empty flank
			if (B_left_LI.number == 0 && B_left_HI.number == 0 && B_left_LC.number == 0 && B_left_HC.number == 0 && B_left_A.number == 0 && B_left_P.number == 0 && B_left_HA.number == 0 && B_left_CC.number == 0 && B_left_WE.number == 0){
				//If B_left has empty soldiers on every slot, it's clearly empty so set it to phase 5
				B_left.phase = 5;
			}

			if (B_center_LI.number == 0 && B_center_HI.number == 0 && B_center_LC.number == 0 && B_center_HC.number == 0 && B_center_A.number == 0 && B_center_P.number == 0 && B_center_HA.number == 0 && B_center_CC.number == 0 && B_center_WE.number == 0){
				//If B_center has empty soldiers on every slot, it's clearly empty so set it to phase 5
				B_center.phase = 5;
			}

			if (B_right_LI.number == 0 && B_right_HI.number == 0 && B_right_LC.number == 0 && B_right_HC.number == 0 && B_right_A.number == 0 && B_right_P.number == 0 && B_right_HA.number == 0 && B_right_CC.number == 0 && B_right_WE.number == 0){
				//If B_right has empty soldiers on every slot, it's clearly empty so set it to phase 5
				B_right.phase = 5;
			}

			if (B_left.phase == 5 && B_center.phase == 5 && B_right.phase == 5){
				//combat is impossible, there is literally nobody to fight
				document.getElementById("battleout").innerHTML += "Combat ended. Force B has no soldiers left to fight!";
				end = 1; //end the loop
			}



			if (A_left.phase !=5){
				//If left flank hasn't fled then process its combat
				document.getElementById("battleout").innerHTML += "A's Left flank hasn't fled, process combat";
				htmlbreak();
				
				coin = Math.ceil(Math.random() * 2);
				A_left.target = coin;
				if (A_left.target == 1 && B_left.phase == 5){
					A_left.target = 2;
				} else if (A_left.target == 2 && B_center.phase == 5){
					A_left.target = 1;
				} else if (B_left.phase == 5 && B_center.phase == 5){
					A_left.target = 3;
				}
				if (A_left.target == 1){
					document.getElementById("battleout").innerHTML += "A's Left flank targets B's left flank";
					htmlbreak();
				} else if (A_left.target == 2){
					document.getElementById("battleout").innerHTML += "A's Left flank targets B's center flank";
					htmlbreak();
				} else if (A_left.target == 3){
					document.getElementById("battleout").innerHTML += "A's Left flank targets B's right flank";
					htmlbreak();
				}
			}





			//Flanks choose which flank they will attack, starting with the left flank and moving to the right



		//END OF SKIRMISH



		document.getElementById("battleout").innerHTML += "Script Successful";
}