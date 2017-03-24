var random; //https://hellothere2.github.io/



function clearresults() {
  document.getElementById('out').innerHTML = " ";
}

function cleartable() {
  document.getElementById('inftable').innerHTML = " ";
  document.getElementById('hctable').innerHTML = " ";
  document.getElementById('lctable').innerHTML = " ";
  document.getElementById('cogtable').innerHTML = " ";
  document.getElementById('galleytable').innerHTML = " ";
  document.getElementById('IBLStable').innerHTML = " ";
}





function battlemechanics() {

var ForceA = document.getElementById('Force_A_Name').value;
var ForceB = document.getElementById('Force_B_Name').value;
var cv = parseInt(document.getElementById('CV').value);

if (cv < 7.5){
  document.getElementById('out').innerHTML += "Error: CV less than 7.5. <br />"
} else if (cv <12.5 && cv>7.5){
  roll1 = Math.ceil(Math.random() * 10);
  roll = roll1;
  document.getElementById('out').innerHTML += "1d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 17.5 && cv > 12.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2;
  document.getElementById('out').innerHTML += "1d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 22.5 && cv > 17.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2;
  document.getElementById('out').innerHTML += "2d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 27.5 && cv > 22.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3;
  document.getElementById('out').innerHTML += "2d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 32.5 && cv > 27.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3;
  document.getElementById('out').innerHTML += "3d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 37.5 && cv > 32.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3 + roll4;
  document.getElementById('out').innerHTML += "3d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 42.5 && cv > 37.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3 + roll4;
  document.getElementById('out').innerHTML += "4d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 47.5 && cv > 42.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3 + roll4 + roll5;
  document.getElementById('out').innerHTML += "4d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 52.5 && cv > 47.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3 + roll4 + roll5;
  document.getElementById('out').innerHTML += "5d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 57.5 && cv > 52.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6;
  document.getElementById('out').innerHTML += "5d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 62.5 && cv > 57.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6;
  document.getElementById('out').innerHTML += "6d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 67.5 && cv > 62.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll7 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7;
  document.getElementById('out').innerHTML += "6d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 72.5 && cv > 67.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll7 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7;
  document.getElementById('out').innerHTML += "7d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 77.5 && cv > 72.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll7 = Math.ceil(Math.random() * 10);
  roll8 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8;
  document.getElementById('out').innerHTML += "7d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 82.5 && cv > 77.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll7 = Math.ceil(Math.random() * 10);
  roll8 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8;
  document.getElementById('out').innerHTML += "8d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 87.5 && cv > 82.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll7 = Math.ceil(Math.random() * 10);
  roll8 = Math.ceil(Math.random() * 10);
  roll9 = Math.ceil(Math.random() * 5);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8 + roll9;
  document.getElementById('out').innerHTML += "8d10 + 1d5 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv < 92.5 && cv > 87.6){
  roll1 = Math.ceil(Math.random() * 10);
  roll2 = Math.ceil(Math.random() * 10);
  roll3 = Math.ceil(Math.random() * 10);
  roll4 = Math.ceil(Math.random() * 10);
  roll5 = Math.ceil(Math.random() * 10);
  roll6 = Math.ceil(Math.random() * 10);
  roll7 = Math.ceil(Math.random() * 10);
  roll8 = Math.ceil(Math.random() * 10);
  roll9 = Math.ceil(Math.random() * 10);
  roll = roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8 + roll9;
  document.getElementById('out').innerHTML += "9d10 <br />"
  document.getElementById('out').innerHTML += "result = " + roll + " <br />"
} else if (cv > 92.5){
  document.getElementById('out').innerHTML += "Error: CV is higher than 92.5. <br />"
}





//Troop Composition Database

//Braavos
int troopcompositiondatabase_Braavos [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Braavos[0][0] = 55; //INF Percentage
troopcompositiondatabase_Braavos[0][1] = 4; //INF CV
troopcompositiondatabase_Braavos[0][2] = 4; //INF ACV
troopcompositiondatabase_Braavos[1][0] = 35; //Ranged inf Percentage
troopcompositiondatabase_Braavos[1][1] = 5; //Ranged inf CV
troopcompositiondatabase_Braavos[1][2] = 9; //ranged inf ACV
troopcompositiondatabase_Braavos[2][0] = 35; //cav Percentage
troopcompositiondatabase_Braavos[2][1] = 5; //cav CV
troopcompositiondatabase_Braavos[2][2] = 9; //cav ACV

//Pentos
int troopcompositiondatabase_Pentos [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Pentos[0][0] = 50; //INF Percentage
troopcompositiondatabase_Pentos[0][1] = 4; //INF CV
troopcompositiondatabase_Pentos[0][2] = 5; //INF ACV
troopcompositiondatabase_Pentos[1][0] = 30; //Ranged inf Percentage
troopcompositiondatabase_Pentos[1][1] = 4; //Ranged inf CV
troopcompositiondatabase_Pentos[1][2] = 8; //ranged inf ACV
troopcompositiondatabase_Pentos[2][0] = 20; //cav Percentage
troopcompositiondatabase_Pentos[2][1] = 5; //cav CV
troopcompositiondatabase_Pentos[2][2] = 5; //cav ACV

//Lorath
int troopcompositiondatabase_Lorath [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Lorath[0][0] = 55; //INF Percentage
troopcompositiondatabase_Lorath[0][1] = 4; //INF CV
troopcompositiondatabase_Lorath[0][2] = 5; //INF ACV
troopcompositiondatabase_Lorath[1][0] = 35; //Ranged inf Percentage
troopcompositiondatabase_Lorath[1][1] = 4; //Ranged inf CV
troopcompositiondatabase_Lorath[1][2] = 7; //ranged inf ACV
troopcompositiondatabase_Lorath[2][0] = 10; //cav Percentage
troopcompositiondatabase_Lorath[2][1] = 5; //cav CV
troopcompositiondatabase_Lorath[2][2] = 6; //cav ACV

//Qohor
int troopcompositiondatabase_Qohor [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Qohor[0][0] = 50; //INF Percentage
troopcompositiondatabase_Qohor[0][1] = 3; //INF CV
troopcompositiondatabase_Qohor[0][2] = 4; //INF ACV
troopcompositiondatabase_Qohor[1][0] = 30; //Ranged inf Percentage
troopcompositiondatabase_Qohor[1][1] = 5; //Ranged inf CV
troopcompositiondatabase_Qohor[1][2] = 9; //ranged inf ACV
troopcompositiondatabase_Qohor[2][0] = 20; //cav Percentage
troopcompositiondatabase_Qohor[2][1] = 5; //cav CV
troopcompositiondatabase_Qohor[2][2] = 6; //cav ACV

//Norvos
int troopcompositiondatabase_Norvos [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Norvos[0][0] = 50; //INF Percentage
troopcompositiondatabase_Norvos[0][1] = 3; //INF CV
troopcompositiondatabase_Norvos[0][2] = 4; //INF ACV
troopcompositiondatabase_Norvos[1][0] = 30; //Ranged inf Percentage
troopcompositiondatabase_Norvos[1][1] = 5; //Ranged inf CV
troopcompositiondatabase_Norvos[1][2] = 10; //ranged inf ACV
troopcompositiondatabase_Norvos[2][0] = 20; //cav Percentage
troopcompositiondatabase_Norvos[2][1] = 5; //cav CV
troopcompositiondatabase_Norvos[2][2] = 4; //cav ACV

//Volantis
int troopcompositiondatabase_Volantis [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Volantis[0][0] = 60; //INF Percentage
troopcompositiondatabase_Volantis[0][1] = 4; //INF CV
troopcompositiondatabase_Volantis[0][2] = 6; //INF ACV
troopcompositiondatabase_Volantis[1][0] = 20; //Ranged inf Percentage
troopcompositiondatabase_Volantis[1][1] = 4; //Ranged inf CV
troopcompositiondatabase_Volantis[1][2] = 8; //ranged inf ACV
troopcompositiondatabase_Volantis[2][0] = 20; //cav Percentage
troopcompositiondatabase_Volantis[2][1] = 7; //cav CV
troopcompositiondatabase_Volantis[2][2] = 4; //cav ACV


//Myr
int troopcompositiondatabase_Myr [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Myr[0][0] = 50; //INF Percentage
troopcompositiondatabase_Myr[0][1] = 4; //INF CV
troopcompositiondatabase_Myr[0][2] = 4; //INF ACV
troopcompositiondatabase_Myr[1][0] = 30; //Ranged inf Percentage
troopcompositiondatabase_Myr[1][1] = 5; //Ranged inf CV
troopcompositiondatabase_Myr[1][2] = 10; //ranged inf ACV
troopcompositiondatabase_Myr[2][0] = 20; //cav Percentage
troopcompositiondatabase_Myr[2][1] = 5; //cav CV
troopcompositiondatabase_Myr[2][2] = 4; //cav ACV

//Lys
int troopcompositiondatabase_Lys [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Lys[0][0] = 50; //INF Percentage
troopcompositiondatabase_Lys[0][1] = 4; //INF CV
troopcompositiondatabase_Lys[0][2] = 5; //INF ACV
troopcompositiondatabase_Lys[1][0] = 35; //Ranged inf Percentage
troopcompositiondatabase_Lys[1][1] = 5; //Ranged inf CV
troopcompositiondatabase_Lys[1][2] = 7; //ranged inf ACV
troopcompositiondatabase_Lys[2][0] = 15; //cav Percentage
troopcompositiondatabase_Lys[2][1] = 5; //cav CV
troopcompositiondatabase_Lys[2][2] = 6; //cav ACV

//Tyrosh
int troopcompositiondatabase_Tyrosh [][] = new int[4][3]; //4 rows by 3 columns.
troopcompositiondatabase_Tyrosh[0][0] = 60; //INF Percentage
troopcompositiondatabase_Tyrosh[0][1] = 5; //INF CV
troopcompositiondatabase_Tyrosh[0][2] = 6; //INF ACV
troopcompositiondatabase_Tyrosh[1][0] = 25; //Ranged inf Percentage
troopcompositiondatabase_Tyrosh[1][1] = 4; //Ranged inf CV
troopcompositiondatabase_Tyrosh[1][2] = 6; //ranged inf ACV
troopcompositiondatabase_Tyrosh[2][0] = 15; //cav Percentage
troopcompositiondatabase_Tyrosh[2][1] = 4; //cav CV
troopcompositiondatabase_Tyrosh[2][2] = 5; //cav ACV

//End of Database


if (document.getElementById('Afaction_type_Braavos').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Braavos. <br />"
  var Force_A_Faction = "Braavos";
} else if (document.getElementById('Afaction_type_Pentos').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Pentos. <br />"
  var Force_A_Faction = "Pentos";
} else if (document.getElementById('Afaction_type_Lorath').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Lorath. <br />"
  var Force_A_Faction = "Lorath";
} else if (document.getElementById('Afaction_type_Qohor').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Qohor. <br />"
  var Force_A_Faction = "Qohor";
} else if (document.getElementById('Afaction_type_Norvos').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Norvos. <br />"
  var Force_A_Faction = "Norvos";
} else if (document.getElementById('Afaction_type_Volantis').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Volantis. <br />"
  var Force_A_Faction = "Volantis";
} else if (document.getElementById('Afaction_type_Myr').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Myr. <br />"
  var Force_A_Faction = "Myr";
} else if (document.getElementById('Afaction_type_Lys').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Lys. <br />"
  var Force_A_Faction = "Lys";
} else if (document.getElementById('Afaction_type_Tyrosh').checked){
  document.getElementById('out').innerHTML += ForceA + " is faction type Tyrosh. <br />"
  var Force_A_Faction = "Tyrosh";
}

}