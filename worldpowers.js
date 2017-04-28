//worldpowers.js by hello_there2

function clearblackopresults() {
	document.getElementById('blackopout').innerHTML = " ";
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
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo4').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo5').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo6').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will perform a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo7').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo8').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo9').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo10').checked) {
	document.getElementById('blackopout').innerHTML += ActingCountry + " will perform a covert operation to establish a cell in " + TargetCountry + ". <br>";
	document.getElementById('blackopout').innerHTML += ActingCountry + " nationals living abroad in " + TargetCountry + " will be contacted for the purpose of creating an intelligence cell. ";
	document.getElementById('blackopout').innerHTML += "Our citizens abroad will be contacted through our ambassadors over social media and in person. ";
	document.getElementById('blackopout').innerHTML += "Recruiting agents will travel by any means possible to " + TargetCountry + " where they will also contact possible recruits. ";
	document.getElementById('blackopout').innerHTML += "Recruits will be chosen based on the information available through internet history - especially people who express strong anti-" + TargetCountry + " opinions. ";
	document.getElementById('blackopout').innerHTML += "The agents sent to " + TargetCountry + " will train these recruits in intelligence operations. ";
	document.getElementById('blackopout').innerHTML += "When training is complete, the recruits will infiltrate the military and intelligence bodies of " + TargetCountry + " by applying for various positions within. ";
	document.getElementById('blackopout').innerHTML += "Over the next few years they will remain dormant and gain trust until instructed. ";
	document.getElementById('blackopout').innerHTML += "The new recruits will be further instructed to make connections and build their own webs of like-minded people in other areas such as law enforcement and legislative bodies. <br>";
	} else if (document.getElementById('bo11').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will carry out a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else if (document.getElementById('bo12').checked){
		document.getElementById('blackopout').innerHTML += ActingCountry + " will perform a False Flag black operation to paint " + TargetCountry + " as militarily aggressive against our nation. <br>";

	} else {
		document.getElementById('blackopout').innerHTML += "Error. <br>"
	}


	document.getElementById('blackopout').innerHTML += "This operation has been given $" + Funding + " million in allocated funds. <br>"

}