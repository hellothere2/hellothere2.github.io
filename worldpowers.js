//worldpowers.js by hello_there2

function clearblackopresults() {
	document.getElementById('blackopout').innerHTML = " ";
}

function clearSMPelectionresults() {
  document.getElementById('SMPelectionout').innerHTML = " ";
}

//extraction/exfiltration mission

function blackop(){

	var ActingCountry = document.getElementById("boActor").value;
	var TargetCountry = document.getElementById("boTarget").value;
	var Funding = document.getElementById("boFunding").value;

	if (document.getElementById('bo1').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will perform a Black Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";
		document.getElementById('blackopout').innerHTML += ActingCountry + " agents will disguise themselves as " + TargetCountry + " operatives and commit an act of war against our military. ";


	} else if (document.getElementById('bo2').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a clendestine strategic reconnaissance operation to gain intelligence on " + TargetCountry + ". <br>";
		document.getElementById('blackopout').innerHTML += "The operation will be collecting strategic intelligence for forming policy and military plans at national and international levels. "
		document.getElementById('blackopout').innerHTML += "The mission is to obtain, by visual observation and other detection methods, information about the activities and resources of " + TargetCountry + " and to secure data concerning the meteorological, hydrographic, or geographic characteristics of the area. ";
		document.getElementById('blackopout').innerHTML += "Several methods shall be used to obtain intel. First, the detection, identification, evaluation, and location of foreign electromagnetic radiations. "
		document.getElementById('blackopout').innerHTML += "Second, reconnaissance by visual observation from the air and through the use of airborne sensors such as radar. ";
		document.getElementById('blackopout').innerHTML += "Third, the interception and processing and analysis of foreign telemetry. ";
		document.getElementById('blackopout').innerHTML += "Fourth, the interception and processing and analysis of foreign communications (digital or radio). ";
		document.getElementById('blackopout').innerHTML += "And finally, intelligence will also be gained through the secret observation of " + TargetCountry + " by any covert agents available. <br>";

	} else if (document.getElementById('bo3').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out an Aerial interdiction operation against " + TargetCountry + ". <br>";

	} else if (document.getElementById('bo4').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out an assassination in " + TargetCountry + " to kill the leader of their nation. <br>";

	} else if (document.getElementById('bo5').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a covert operation in " + TargetCountry + " where our troops will enact deep-cover measures to ensure their presence in the event of enemy takeover. <br>";

	} else if (document.getElementById('bo6').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will perform a black operation to commit acts of arson against " + TargetCountry + ". <br>";

	} else if (document.getElementById('bo7').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a clandestine operation to facilitate the sale of arms to " + TargetCountry + ", bypassing any sanctions or embargoes and avoiding international condemnation. <br>";

	} else if (document.getElementById('bo8').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will conduct counter-intelligence operations to protect against espionage, sabotage, assassinations, and other intelligence activities from " + TargetCountry + ". <br>";

	} else if (document.getElementById('bo9').checked) {
	document.getElementById('blackopout').innerHTML += ActingCountry + " will perform a covert operation to establish a cell in " + TargetCountry + ". <br>";
	document.getElementById('blackopout').innerHTML += ActingCountry + " nationals living abroad in " + TargetCountry + " will be contacted for the purpose of creating an intelligence cell. ";
	document.getElementById('blackopout').innerHTML += "Our citizens abroad will be contacted through our ambassadors over social media and in person. ";
	document.getElementById('blackopout').innerHTML += "Recruiting agents will travel by any means possible to " + TargetCountry + " where they will also contact possible recruits. ";
	document.getElementById('blackopout').innerHTML += "Recruits will be chosen based on the information available through internet history - especially people who express strong anti-" + TargetCountry + " opinions. ";
	document.getElementById('blackopout').innerHTML += "The agents sent to " + TargetCountry + " will train these recruits in intelligence operations. ";
	document.getElementById('blackopout').innerHTML += "When training is complete, the recruits will infiltrate the military and intelligence bodies of " + TargetCountry + " by applying for various positions within. ";
	document.getElementById('blackopout').innerHTML += "Over the next few years they will remain dormant and gain trust until instructed. ";
	document.getElementById('blackopout').innerHTML += "The new recruits will be further instructed to make connections and build their own webs of like-minded people in other areas such as law enforcement and legislative bodies. <br>";
	
	} else if (document.getElementById('bo10').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will covertly fund insurgents inside " + TargetCountry + " to conduct military operations against " + TargetCountry + ". <br>";

	} else if (document.getElementById('bo11').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will conduct out a covert operation to supply " + TargetCountry + " without anyone noticing. <br>";
	}

	else {
		document.getElementById('blackopout').innerHTML += "Error. <br>"
	}


	document.getElementById('blackopout').innerHTML += "This operation has been given $" + Funding + " million in allocated funds. <br>"

}



function SMPelection(){

	//Variables defined in worldpowers.html
	var NumberOfConstituencies = parseInt(document.getElementById("NumberOfConstituencies").value);
	var OriginalNumber = parseInt(document.getElementById('member').value);
	var Threshold = parseInt(document.getElementById('ElectionThreshold').value);
	var Poll = new Array(OriginalNumber); //Array to store dice rolls in


	//for loop to parse a dice roll value for each participant. ie Poll[0] stores the dice roll for member0;
	for (i3 = 0; i3 < OriginalNumber; i3++) {
		var Participant = document.getElementById('member' + i3).value;
		var Skill = parseInt(document.getElementsByName('PartySkillValues')[i3].value);
		Poll[i3] = Math.ceil(Math.random() * 100) + Skill; //Dice rolls
		document.getElementById('SMPelectionout').innerHTML += Participant + " got " + Poll[i3] + "<br>"; 
	}

	//setting up more variables for the second for loop
	var highest = Math.max.apply(Math, Poll); //get highest value in the array
	
	var bonus = Math.round(NumberOfConstituencies/10);
	var plurality = Math.ceil(Math.random() * NumberOfConstituencies) + bonus;
	if (plurality >= NumberOfConstituencies){
		var plurality = plurality - bonus;
	}
	var plurality = plurality * 0.01;
	var thing = Math.round(NumberOfConstituencies * plurality);

	for (i = 0; i < OriginalNumber; i++){ 
		var Participant = document.getElementById('member' + i).value; //ex: Participant = member0 
		var Leader = document.getElementById('member' + i + "leader").value; //ex: Leader = member0leader
		if (Poll[i] != highest){ //if current array value is equal to the highest value, that guy won
			//dud
		} else document.getElementById('SMPelectionout').innerHTML += Participant + " achieved a plurality at " + (plurality*100)  + "% of the votes and has won the election with " + thing + " constituencies. The leader of the party, " + Leader  + ", has become the Prime Minister of the country by commanding confidence of the legislature. <br>";
	}
}


function addFields() {
  // Number of inputs to create
  var number = parseInt(document.getElementById("member").value);
  // Container <div> where dynamic content will be placed
  var container = document.getElementById("PartyInputs");
  // Clear previous contents of the container
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (im = 0; im < number; im++) {
    // Append a node with a random text
    container.appendChild(document.createTextNode("Election Party " + (im + 1) + "'s name, Party's Leader, and vote modifier: "));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.id = "member" + im; ///member1, member2, member3, etc.
    input.name = "PartyNamesList";
    var dickbuttcreampie = im + 1;
    input.value = "Party" + dickbuttcreampie;
    container.appendChild(input);
    // Create an <input> element, set its type and name attributes
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "member" + im + "leader"; ///member1leader, member2leader, member3leader, etc.
    input2.name = "PartyLeadersList";
    var dickbuttcreampie = im + 1;
    input2.value = "Party" + dickbuttcreampie + " leader";
    container.appendChild(input2);
    // Append a line break 
    // Create an <input> element, set its type and name attributes
    var input3 = document.createElement("input");
    input3.type = "number";
    input3.id = "member" + im + "skill"; ///member1skill, member2skill, member3skill, etc.
    input3.name = "PartySkillValues";
    input3.value = 0;
    container.appendChild(input3);
    // Append a line break 
    container.appendChild(document.createElement("br"));
  }
}