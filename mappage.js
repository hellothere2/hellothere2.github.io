function followCursor(event) {
	//Get Cursor-following div
	var d = document.getElementById("demo");
	//Retrieve relative cursor position
	var x = event.screenX+document.documentElement.scrollLeft-8;
	var y = event.screenY+document.documentElement.scrollTop-79;
	//Offset position
	var mxpos = x + 25;
	var mypos = y + 25;
	//Make div follow cursor
	d.style.top = mypos +"px";
	d.style.left = mxpos+"px";
}

// Color Variables
var BGCblk = "black";
var BGCsea = "cornflowerblue";
var BGCfld = "seagreen";
var BGCmtn = "saddlebrown";
var BGChil = "orange";
var BGCice = "snow";
var BGCfst = "darkolivegreen";
var BGCdst = "palegoldenrod";
var BGCswp = "lightgreen";
var purpleRGB = "rgb(128, 0, 128)";
var Terrain = "placeholder";
var HexCoordinates = "000.000";
var type ="placeholder";
var HexCoorStorage = []; //empty array
var HexTerrainStorage = []; //empty array
var TerrainTypes = ["Error", "Ocean", "Field", "Mountain", "Hill", "Ice", "Forest", "Desert", "Swamp"]; //Used for comparison


$(document).ready(function(){
	//Do this when the document loads
	$(".hex").mouseover(function() { //Literally the function itself is causing the leak
		HexCoordinates = $(this).attr('id');
		type = $(this).attr('class');
		if (type=="hex blk"){
			Terrain = "Error"; //is settlement, leave space
		} else if (type=="hex sea"){
			Terrain = "Ocean";
		} else if (type=="hex fld"){
			Terrain = "Field";
		} else if (type=="hex mtn"){
			Terrain = "Mountain";
		} else if (type=="hex hil"){
			Terrain = "Hill";
		} else if (type=="hex ice"){
			Terrain = "Ice";
		} else if (type=="hex fst"){
			Terrain = "Forest";
		} else if (type=="hex dst"){
			Terrain = "Desert";
		} else if (type=="hex swp"){
			Terrain = "Swamp";
		}
		$("#demo").html(HexCoordinates+"<br>"+Terrain); //Line clear+optimized
	});
		// CLEAR OF LEAKS ABOVE THIS LINE //
	$(".blk").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCblk);
		}
	});
	$(".sea").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCsea);
		}
	});
	$(".fld").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			///
		} else{
			$(this).css("color", BGCfld);
		}
	});
	$(".mtn").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCmtn);
		}
	});
	$(".hil").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGChil);
		}
	});
	$(".ice").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCice);
		}
	});
	$(".fst").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCfst);
		}
	});
	$(".dst").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCdst);
		}
	});
	$(".swp").hover(function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			//
			$(this).css("color", "red");
		}
	}, function(){
		if( ($(this).css("color")) == purpleRGB){
			//do nothing
			$(this).css("color", "purple");
		} else{
			$(this).css("color", BGCswp);
		}
	});
});

var rHexCoordinates = "placeholder";
var rtype = "placeholder";
var rTerrain = "placeholder";
var seaC = 0;
var fldC = 0;
var mtnC = 0;
var hilC = 0;
var iceC = 0;
var fstC = 0;
var dstC = 0;
var swpC = 0;


function purpify(event){
	$('.hex').click(function(e){
		//change hex color to purple on click
		$(this).css("color", "purple");
		//Hex visually marked
		//Re-initialize HexCoordinates and Type
		rHexCoordinates = $(this).attr('id');
		rtype = $(this).attr('class');
		//Now check them
		if (rtype=="hex blk"){
			rTerrain = "Error"; //is settlement, leave space
		} else if (rtype=="hex sea"){
			rTerrain = "Ocean";
		} else if (rtype=="hex fld"){
			rTerrain = "Field";
		} else if (rtype=="hex mtn"){
			rTerrain = "Mountain";
		} else if (rtype=="hex hil"){
			rTerrain = "Hill";
		} else if (rtype=="hex ice"){
			rTerrain = "Ice";
		} else if (rtype=="hex fst"){
			rTerrain = "Forest";
		} else if (rtype=="hex dst"){
			rTerrain = "Desert";
		} else if (rtype=="hex swp"){
			rTerrain = "Swamp";
		}
	});
	if (rHexCoordinates == "placeholder"){
		//Do nothing
	} else {
		HexCoorStorage.push(rHexCoordinates);
		HexTerrainStorage.push(rTerrain);
		//Check terrain again since doing it within
		//the click function will cause duplication issues
		if (rtype=="hex blk"){
			//Do nothing
		} else if (rtype=="hex sea"){
			seaC += 1;
		} else if (rtype=="hex fld"){
			fldC += 1;
		} else if (rtype=="hex mtn"){
			mtnC += 1;
		} else if (rtype=="hex hil"){
			hilC += 1;
		} else if (rtype=="hex ice"){
			iceC += 1;
		} else if (rtype=="hex fst"){
			fstC += 1;
		} else if (rtype=="hex dst"){
			dstC += 1;
		} else if (rtype=="hex swp"){
			swpC += 1;
		}
		document.getElementById("tOutputSea").innerHTML = seaC;
		document.getElementById("tOutputFld").innerHTML = fldC;
		document.getElementById("tOutputMtn").innerHTML = mtnC;
		document.getElementById("tOutputHil").innerHTML = hilC;
		document.getElementById("tOutputIce").innerHTML = iceC;
		document.getElementById("tOutputFst").innerHTML = fstC;
		document.getElementById("tOutputDst").innerHTML = dstC;
		document.getElementById("tOutputSwp").innerHTML = swpC;
		document.getElementById("cOutput").innerHTML += rHexCoordinates + ", ";
	}
}


function copyText(){
	//Create a dummy textfield to hold the shit
	var dummy = document.createElement("textarea");
	//Use textarea for copy function
	document.body.appendChild(dummy);
	dummy.value = HexCoorStorage;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
}

function loadText(){
	var hInput = document.getElementById("loadArea").value; //Load textfield content
	var hInput2 = hInput.split(','); //Convert it back into an array
	for (var i = 0; i < hInput2.length; i++) {
		//Use a for loop that iterates for each item in the array
		//Select the hexes on the map
		var currentHex = hInput2[i];
		//Re-initialize HexCoordinates and Type
		lHexCoordinates = currentHex.trim();//Trim it just in case
		HexCoorStorage.push(lHexCoordinates); //Put it in storage so you can copy again
		ltype = $(document.getElementById(lHexCoordinates)).attr('class');//Use full form to avoid undefined
		$(document.getElementById(lHexCoordinates)).css('color', 'purple'); //Turn the hex purple
		//Check terrain again
		if (ltype=="hex blk"){
			alert("Movement invalid: Impassable Hex detected.");
		} else if (ltype=="hex sea"){
			seaC += 1;
		} else if (ltype=="hex fld"){
			fldC += 1;
		} else if (ltype=="hex mtn"){
			mtnC += 1;
		} else if (ltype=="hex hil"){
			hilC += 1;
		} else if (ltype=="hex ice"){
			iceC += 1;
		} else if (ltype=="hex fst"){
			fstC += 1;
		} else if (ltype=="hex dst"){
			dstC += 1;
		} else if (ltype=="hex swp"){
			swpC += 1;
		}
		document.getElementById("tOutputSea").innerHTML = seaC;
		document.getElementById("tOutputFld").innerHTML = fldC;
		document.getElementById("tOutputMtn").innerHTML = mtnC;
		document.getElementById("tOutputHil").innerHTML = hilC;
		document.getElementById("tOutputIce").innerHTML = iceC;
		document.getElementById("tOutputFst").innerHTML = fstC;
		document.getElementById("tOutputDst").innerHTML = dstC;
		document.getElementById("tOutputSwp").innerHTML = swpC;
		document.getElementById("cOutput").innerHTML += lHexCoordinates + ", ";
	}
}


// function generateCSS(){
// 	var columns = 125;
// 	var out = document.getElementById("out");
// 	out.innerHTML = ""; //clear contents
// 	var n = 70; //even
// 	var m = 105; //odd
// 	for (var i=4; i <= columns; i++) {
// 		//for loop
// 		out.innerHTML += ".hex-column-"+i+"{";
// 		out.innerHTML += "<br>";
// 		out.innerHTML += "    margin-left: ";
// 		if(i%2==0) {
// 			//if it is divisable as an integer by two 
// 			//is even
// 			meg = n+70;
// 			n = meg;
// 			out.innerHTML += meg + "px;<br>";
// 			out.innerHTML += "    margin-top: -8060px;}<br>";
// 		} else {
// 			//it isn't divisable as an integer by two 
// 			//is odd
// 			mog = m+70;
// 			m = mog
// 			out.innerHTML += mog + "px;<br>    margin-top: -8020px;}<br>";
// 		}
// 	}
// }

// window.onload=generateCSS;