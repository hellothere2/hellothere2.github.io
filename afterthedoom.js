var random; //https://hellothere2.github.io/



function clearresults() {
  document.getElementById('out').innerHTML = " ";
}



function battlemechanics() {

  var ForceA = document.getElementById('Force_A_Name').value;
  var ForceB = document.getElementById('Force_B_Name').value;

  var Force_A_Strength = parseInt(document.getElementById('Force_A_Strength').value);
  var Force_B_Strength = parseInt(document.getElementById('Force_B_Strength').value);


document.getElementById('out').innerHTML += "Loading Troop Composition Database... <br />";

  //Troop Composition Database

  //Braavos
  var troopcompositiondatabase_Braavos00 = 55; //INF Percentage
  var troopcompositiondatabase_Braavos01 = 4; //INF CV
  var troopcompositiondatabase_Braavos02 = 4; //INF ACV
  var troopcompositiondatabase_Braavos10 = 35; //Ranged inf Percentage
  var troopcompositiondatabase_Braavos11 = 5; //Ranged inf CV
  var troopcompositiondatabase_Braavos12 = 9; //ranged inf ACV
  var troopcompositiondatabase_Braavos20 = 10; //cav Percentage
  var troopcompositiondatabase_Braavos21 = 5; //cav CV
  var troopcompositiondatabase_Braavos22 = 9; //cav ACV

  //Pentos
  var troopcompositiondatabase_Pentos00 = 50; //INF Percentage
  var troopcompositiondatabase_Pentos01 = 4; //INF CV
  var troopcompositiondatabase_Pentos02 = 5; //INF ACV
  var troopcompositiondatabase_Pentos10 = 30; //Ranged inf Percentage
  var troopcompositiondatabase_Pentos11 = 4; //Ranged inf CV
  var troopcompositiondatabase_Pentos12 = 8; //ranged inf ACV
  var troopcompositiondatabase_Pentos20 = 20; //cav Percentage
  var troopcompositiondatabase_Pentos21 = 5; //cav CV
  var troopcompositiondatabase_Pentos22 = 5; //cav ACV

  //Lorath
  var troopcompositiondatabase_Lorath00 = 55; //INF Percentage
  var troopcompositiondatabase_Lorath01 = 4; //INF CV
  var troopcompositiondatabase_Lorath02 = 5; //INF ACV
  var troopcompositiondatabase_Lorath10 = 35; //Ranged inf Percentage
  var troopcompositiondatabase_Lorath11 = 4; //Ranged inf CV
  var troopcompositiondatabase_Lorath12 = 7; //ranged inf ACV
  var troopcompositiondatabase_Lorath20 = 10; //cav Percentage
  var troopcompositiondatabase_Lorath21 = 5; //cav CV
  var troopcompositiondatabase_Lorath22 = 6; //cav ACV

  //Qohor
  var troopcompositiondatabase_Qohor00 = 50; //INF Percentage
  var troopcompositiondatabase_Qohor01 = 3; //INF CV
  var troopcompositiondatabase_Qohor02 = 4; //INF ACV
  var troopcompositiondatabase_Qohor10 = 30; //Ranged inf Percentage
  var troopcompositiondatabase_Qohor11 = 5; //Ranged inf CV
  var troopcompositiondatabase_Qohor12 = 9; //ranged inf ACV
  var troopcompositiondatabase_Qohor20 = 20; //cav Percentage
  var troopcompositiondatabase_Qohor21 = 5; //cav CV
  var troopcompositiondatabase_Qohor22 = 6; //cav ACV

  //Norvos
  var troopcompositiondatabase_Norvos00 = 50; //INF Percentage
  var troopcompositiondatabase_Norvos01 = 3; //INF CV
  var troopcompositiondatabase_Norvos02 = 4; //INF ACV
  var troopcompositiondatabase_Norvos10 = 30; //Ranged inf Percentage
  var troopcompositiondatabase_Norvos11 = 5; //Ranged inf CV
  var troopcompositiondatabase_Norvos12 = 10; //ranged inf ACV
  var troopcompositiondatabase_Norvos20 = 20; //cav Percentage
  var troopcompositiondatabase_Norvos21 = 5; //cav CV
  var troopcompositiondatabase_Norvos22 = 4; //cav ACV

  //Volantis
  var troopcompositiondatabase_Volantis00 = 60; //INF Percentage
  var troopcompositiondatabase_Volantis01 = 4; //INF CV
  var troopcompositiondatabase_Volantis02 = 6; //INF ACV
  var troopcompositiondatabase_Volantis10 = 20; //Ranged inf Percentage
  var troopcompositiondatabase_Volantis11 = 4; //Ranged inf CV
  var troopcompositiondatabase_Volantis12 = 8; //ranged inf ACV
  var troopcompositiondatabase_Volantis20 = 20; //cav Percentage
  var troopcompositiondatabase_Volantis21 = 7; //cav CV
  var troopcompositiondatabase_Volantis22 = 4; //cav ACV


  //Myr
  var troopcompositiondatabase_Myr00 = 50; //INF Percentage
  var troopcompositiondatabase_Myr01 = 4; //INF CV
  var troopcompositiondatabase_Myr02 = 4; //INF ACV
  var troopcompositiondatabase_Myr10 = 30; //Ranged inf Percentage
  var troopcompositiondatabase_Myr11 = 5; //Ranged inf CV
  var troopcompositiondatabase_Myr12 = 10; //ranged inf ACV
  var troopcompositiondatabase_Myr20 = 20; //cav Percentage
  var troopcompositiondatabase_Myr21 = 5; //cav CV
  var troopcompositiondatabase_Myr22 = 4; //cav ACV

  //Lys
  var troopcompositiondatabase_Lys00 = 50; //INF Percentage
  var troopcompositiondatabase_Lys01 = 4; //INF CV
  var troopcompositiondatabase_Lys02 = 5; //INF ACV
  var troopcompositiondatabase_Lys10 = 35; //Ranged inf Percentage
  var troopcompositiondatabase_Lys11 = 5; //Ranged inf CV
  var troopcompositiondatabase_Lys12 = 7; //ranged inf ACV
  var troopcompositiondatabase_Lys20 = 15; //cav Percentage
  var troopcompositiondatabase_Lys21 = 5; //cav CV
  var troopcompositiondatabase_Lys22 = 6; //cav ACV

  //Tyrosh
  var troopcompositiondatabase_Tyrosh00 = 60; //INF Percentage
  var troopcompositiondatabase_Tyrosh01 = 5; //INF CV
  var troopcompositiondatabase_Tyrosh02 = 6; //INF ACV
  var troopcompositiondatabase_Tyrosh10 = 25; //Ranged inf Percentage
  var troopcompositiondatabase_Tyrosh11 = 4; //Ranged inf CV
  var troopcompositiondatabase_Tyrosh12 = 6; //ranged inf ACV
  var troopcompositiondatabase_Tyrosh20 = 15; //cav Percentage
  var troopcompositiondatabase_Tyrosh21 = 4; //cav CV
  var troopcompositiondatabase_Tyrosh22 = 5; //cav ACV

  //above this is fine

document.getElementById('out').innerHTML += "Database Loaded. Determining faction of forces...<br />";

  //End of Database


  // Determine the troop composition of Force A
  if (document.getElementById('Afaction_type_Braavos').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Braavos. <br />"
    var Force_A_Faction = "Braavos";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Braavos00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Braavos01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Braavos02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Braavos10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Braavos11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Braavos12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Braavos20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Braavos21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Braavos22; //cav ACV
  } else if (document.getElementById('Afaction_type_Pentos').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Pentos. <br />"
    var Force_A_Faction = "Pentos";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Pentos00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Pentos01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Pentos02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Pentos10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Pentos11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Pentos12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Pentos20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Pentos21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Pentos22; //cav ACV
  } else if (document.getElementById('Afaction_type_Lorath').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Lorath. <br />"
    var Force_A_Faction = "Lorath";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Lorath00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Lorath01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Lorath02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Lorath10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Lorath11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Lorath12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Lorath20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Lorath21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Lorath22; //cav ACV
  } else if (document.getElementById('Afaction_type_Qohor').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Qohor. <br />"
    var Force_A_Faction = "Qohor";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Qohor00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Qohor01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Qohor02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Qohor10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Qohor11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Qohor12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Qohor20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Qohor21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Qohor22; //cav ACV
  } else if (document.getElementById('Afaction_type_Norvos').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Norvos. <br />"
    var Force_A_Faction = "Norvos";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Norvos00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Norvos01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Norvos02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Norvos10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Norvos11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Norvos12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Norvos20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Norvos21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Norvos22; //cav ACV
  } else if (document.getElementById('Afaction_type_Volantis').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Volantis. <br />"
    var Force_A_Faction = "Volantis";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Volantis00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Volantis01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Volantis02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Volantis10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Volantis11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Volantis12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Volantis20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Volantis21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Volantis22; //cav ACV
  } else if (document.getElementById('Afaction_type_Myr').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Myr. <br />"
    var Force_A_Faction = "Myr";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Myr00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Myr01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Myr02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Myr10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Myr11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Myr12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Myr20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Myr21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Myr22; //cav ACV
  } else if (document.getElementById('Afaction_type_Lys').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Lys. <br />"
    var Force_A_Faction = "Lys";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Lys00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Lys01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Lys02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Lys10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Lys11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Lys12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Lys20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Lys21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Lys22; //cav ACV
  } else if (document.getElementById('Afaction_type_Tyrosh').checked) {
    document.getElementById('out').innerHTML += ForceA + " is faction type Tyrosh. <br />"
    var Force_A_Faction = "Tyrosh";
    var troopcompositiondatabase_ForceA00 = troopcompositiondatabase_Tyrosh00; //INF Percentage
    var troopcompositiondatabase_ForceA01 = troopcompositiondatabase_Tyrosh01; //INF CV
    var troopcompositiondatabase_ForceA02 = troopcompositiondatabase_Tyrosh02; //INF ACV
    var troopcompositiondatabase_ForceA10 = troopcompositiondatabase_Tyrosh10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceA11 = troopcompositiondatabase_Tyrosh11; //Ranged inf CV
    var troopcompositiondatabase_ForceA12 = troopcompositiondatabase_Tyrosh12; //ranged inf ACV
    var troopcompositiondatabase_ForceA20 = troopcompositiondatabase_Tyrosh20; //cav Percentage
    var troopcompositiondatabase_ForceA21 = troopcompositiondatabase_Tyrosh21; //cav CV
    var troopcompositiondatabase_ForceA22 = troopcompositiondatabase_Tyrosh22; //cav ACV
  }

  ///Determine the troop composition of Force b
  if (document.getElementById('Bfaction_type_Braavos').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Braavos. <br />"
    var Force_B_Faction = "Braavos";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Braavos00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Braavos01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Braavos02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Braavos10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Braavos11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Braavos12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Braavos20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Braavos21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Braavos22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Pentos').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Pentos. <br />"
    var Force_B_Faction = "Pentos";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Pentos00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Pentos01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Pentos02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Pentos10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Pentos11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Pentos12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Pentos20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Pentos21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Pentos22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Lorath').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Lorath. <br />"
    var Force_B_Faction = "Lorath";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Lorath00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Lorath01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Lorath02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Lorath10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Lorath11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Lorath12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Lorath20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Lorath21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Lorath22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Qohor').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Qohor. <br />"
    var Force_B_Faction = "Qohor";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Qohor00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Qohor01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Qohor02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Qohor10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Qohor11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Qohor12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Qohor20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Qohor21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Qohor22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Norvos').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Norvos. <br />"
    var Force_B_Faction = "Norvos";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Norvos00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Norvos01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Norvos02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Norvos10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Norvos11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Norvos12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Norvos20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Norvos21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Norvos22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Volantis').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Volantis. <br />"
    var Force_B_Faction = "Volantis";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Volantis00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Volantis01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Volantis02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Volantis10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Volantis11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Volantis12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Volantis20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Volantis21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Volantis22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Myr').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Myr. <br />"
    var Force_B_Faction = "Myr";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Myr00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Myr01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Myr02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Myr10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Myr11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Myr12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Myr20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Myr21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Myr22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Lys').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Lys. <br />"
    var Force_B_Faction = "Lys";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Lys00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Lys01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Lys02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Lys10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Lys11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Lys12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Lys20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Lys21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Lys22; //cav ACV
  } else if (document.getElementById('Bfaction_type_Tyrosh').checked) {
    document.getElementById('out').innerHTML += ForceB + " is faction type Tyrosh. <br />"
    var Force_B_Faction = "Tyrosh";
    var troopcompositiondatabase_ForceB00 = troopcompositiondatabase_Tyrosh00; //INF Percentage
    var troopcompositiondatabase_ForceB01 = troopcompositiondatabase_Tyrosh01; //INF CV
    var troopcompositiondatabase_ForceB02 = troopcompositiondatabase_Tyrosh02; //INF ACV
    var troopcompositiondatabase_ForceB10 = troopcompositiondatabase_Tyrosh10; //Ranged inf Percentage
    var troopcompositiondatabase_ForceB11 = troopcompositiondatabase_Tyrosh11; //Ranged inf CV
    var troopcompositiondatabase_ForceB12 = troopcompositiondatabase_Tyrosh12; //ranged inf ACV
    var troopcompositiondatabase_ForceB20 = troopcompositiondatabase_Tyrosh20; //cav Percentage
    var troopcompositiondatabase_ForceB21 = troopcompositiondatabase_Tyrosh21; //cav CV
    var troopcompositiondatabase_ForceB22 = troopcompositiondatabase_Tyrosh22; //cav ACV
  }


document.getElementById('out').innerHTML += "Applied Troop Composition to forces. <br /> <br />";

  //Force A CV

document.getElementById('out').innerHTML += "The total manpower of " + ForceA + " is " + Force_A_Strength + "<br />";
  var Force_A_Number_Of_Infantry = Force_A_Strength * (troopcompositiondatabase_ForceA00 * 0.01);
  var Force_A_Number_Of_Infantry = Math.round(Force_A_Number_Of_Infantry);
  document.getElementById('out').innerHTML += "The number of infantry in " + ForceA + " is " + Force_A_Number_Of_Infantry + "<br />";
  var Force_A_Number_Of_RangedInfantry = Force_A_Strength * (troopcompositiondatabase_ForceA10 * 0.01);
  var Force_A_Number_Of_RangedInfantry = Math.round(Force_A_Number_Of_RangedInfantry);
  document.getElementById('out').innerHTML += "The number of ranged infantry in " + ForceA + " is " + Force_A_Number_Of_RangedInfantry + "<br />";
  var Force_A_Number_Of_Cavalry = Force_A_Strength * (troopcompositiondatabase_ForceA20 * 0.01);
  var Force_A_Number_Of_Cavalry = Math.round(Force_A_Number_Of_Cavalry);
  document.getElementById('out').innerHTML += "The number of cavalry in " + ForceA + " is " + Force_A_Number_Of_Cavalry + " <br />";
  var Force_A_CV_Numerical = (Force_A_Number_Of_Infantry * troopcompositiondatabase_ForceA01) + (Force_A_Number_Of_RangedInfantry * troopcompositiondatabase_ForceA11) + (Force_A_Number_Of_Cavalry * troopcompositiondatabase_ForceA21);
  document.getElementById('out').innerHTML += "The total CV of " + ForceA + " is " + Force_A_CV_Numerical + "<br />";

document.getElementById('out').innerHTML += "<br />";

  //Force B CV
  var Force_B_Number_Of_Infantry = Force_B_Strength * (troopcompositiondatabase_ForceB00 * 0.01);
  var Force_B_Number_Of_Infantry = Math.round(Force_B_Number_Of_Infantry);
  var Force_B_Number_Of_RangedInfantry = Force_B_Strength * (troopcompositiondatabase_ForceB10 * 0.01);
  var Force_B_Number_Of_RangedInfantry = Math.round(Force_B_Number_Of_RangedInfantry);
  var Force_B_Number_Of_Cavalry = Force_B_Strength * (troopcompositiondatabase_ForceB20 * 0.01);
  var Force_B_Number_Of_Cavalry = Math.round(Force_B_Number_Of_Cavalry);
  var Force_B_CV_Numerical = (Force_B_Number_Of_Infantry * troopcompositiondatabase_ForceB01) + (Force_B_Number_Of_RangedInfantry * troopcompositiondatabase_ForceB11) + (Force_B_Number_Of_Cavalry * troopcompositiondatabase_ForceB21);
  document.getElementById('out').innerHTML += "The total manpower of " + ForceB + " is " + Force_B_Strength + "<br />";
  document.getElementById('out').innerHTML += "The number of infantry in " + ForceB + " is " + Force_B_Number_Of_Infantry + "<br />";
  document.getElementById('out').innerHTML += "The number of ranged infantry in " + ForceB + " is " + Force_B_Number_Of_RangedInfantry + "<br />";
  document.getElementById('out').innerHTML += "The number of cavalry in " + ForceB + " is " + Force_B_Number_Of_Cavalry + " <br />";
  document.getElementById('out').innerHTML += "The total CV of " + ForceB + " is " + Force_B_CV_Numerical + "<br />";

document.getElementById('out').innerHTML += "<br />";

  //Force CV Percentile
  var Total_CV = Force_A_CV_Numerical + Force_B_CV_Numerical;
  var cv_a = (Force_A_CV_Numerical / Total_CV) * 100;
  var cv_b = (Force_B_CV_Numerical / Total_CV) * 100;

  document.getElementById('out').innerHTML += "The Total CV present on the battlefield is " + Total_CV + "<br />";
  document.getElementById('out').innerHTML += ForceA + " represents " + cv_a + "% of that number. <br />";
  document.getElementById('out').innerHTML += ForceB + " represents " + cv_b + "% of that number. <br />";

document.getElementById('out').innerHTML += "<br />";


document.getElementById('out').innerHTML += "Both forces make a roll based on CV <br />";

  //Force A Make a roll based on CV

  document.getElementById('out').innerHTML += ForceA + " makes a roll based on their CV. <br />";

  if (cv_a < 7.5) {
    document.getElementById('out').innerHTML += "Error: CV less than 7.5. <br />"
  } else if (cv_a < 12.5 && cv_a > 7.5) {
    roll = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    document.getElementById('out').innerHTML += "1d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 17.5 && cv_a > 12.6) {
    roll = Math.floor(Math.random() * (15 - 2 + 1) + 2);
    document.getElementById('out').innerHTML += "1d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 22.5 && cv_a > 17.6) {
    roll = Math.floor(Math.random() * (20 - 2 + 1) + 2);
    document.getElementById('out').innerHTML += "2d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 27.5 && cv_a > 22.6) {
    roll = Math.floor(Math.random() * (25 - 3 + 1) + 3);
    document.getElementById('out').innerHTML += "2d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 32.5 && cv_a > 27.6) {
    roll = Math.floor(Math.random() * (30 - 3 + 1) + 3);
    document.getElementById('out').innerHTML += "3d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 37.5 && cv_a > 32.6) {
    roll = Math.floor(Math.random() * (35 - 4 + 1) + 4);
    document.getElementById('out').innerHTML += "3d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 42.5 && cv_a > 37.6) {
    roll = Math.floor(Math.random() * (40 - 4 + 1) + 4);
    document.getElementById('out').innerHTML += "4d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 47.5 && cv_a > 42.6) {
    roll = Math.floor(Math.random() * (45 - 5 + 1) + 5);
    document.getElementById('out').innerHTML += "4d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 52.5 && cv_a > 47.6) {
    roll = Math.floor(Math.random() * (50 - 5 + 1) + 5);
    document.getElementById('out').innerHTML += "5d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 57.5 && cv_a > 52.6) {
    roll = Math.floor(Math.random() * (55 - 6 + 1) + 6);
    document.getElementById('out').innerHTML += "5d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 62.5 && cv_a > 57.6) {
    roll = Math.floor(Math.random() * (60 - 6 + 1) + 6);
    document.getElementById('out').innerHTML += "6d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 67.5 && cv_a > 62.6) {
    roll = Math.floor(Math.random() * (65 - 7 + 1) + 7);
    document.getElementById('out').innerHTML += "6d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 72.5 && cv_a > 67.6) {
    roll = Math.floor(Math.random() * (70 - 7 + 1) + 7);
    document.getElementById('out').innerHTML += "7d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 77.5 && cv_a > 72.6) {
    roll = Math.floor(Math.random() * (75 - 8 + 1) + 8);
    document.getElementById('out').innerHTML += "7d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 82.5 && cv_a > 77.6) {
    roll = Math.floor(Math.random() * (80 - 8 + 1) + 8);
    document.getElementById('out').innerHTML += "8d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 87.5 && cv_a > 82.6) {
    roll = Math.floor(Math.random() * (85 - 9 + 1) + 9);
    document.getElementById('out').innerHTML += "8d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a < 92.5 && cv_a > 87.6) {
    roll = Math.floor(Math.random() * (90 - 9 + 1) + 9);
    document.getElementById('out').innerHTML += "9d10 <br />"
    document.getElementById('out').innerHTML += "result = " + roll + " <br />"
  } else if (cv_a > 92.5) {
    document.getElementById('out').innerHTML += "Error: CV is higher than 92.5. <br />"
  }


  //Force B Make a roll based on CV
  document.getElementById('out').innerHTML += ForceB + " makes a roll based on their CV. <br />";

  if (cv_b < 7.5) {
    document.getElementById('out').innerHTML += "Error: CV less than 7.5. <br />"
  } else if (cv_b < 12.5 && cv_b > 7.5) {
    rollb = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    document.getElementById('out').innerHTML += "1d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 17.5 && cv_b > 12.6) {
    rollb = Math.floor(Math.random() * (15 - 2 + 1) + 2);
    document.getElementById('out').innerHTML += "1d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 22.5 && cv_b > 17.6) {
    rollb = Math.floor(Math.random() * (20 - 2 + 1) + 2);
    document.getElementById('out').innerHTML += "2d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 27.5 && cv_b > 22.6) {
    rollb = Math.floor(Math.random() * (25 - 3 + 1) + 3);
    document.getElementById('out').innerHTML += "2d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 32.5 && cv_b > 27.6) {
    rollb = Math.floor(Math.random() * (30 - 3 + 1) + 3);
    document.getElementById('out').innerHTML += "3d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 37.5 && cv_b > 32.6) {
    rollb = Math.floor(Math.random() * (35 - 4 + 1) + 4);
    document.getElementById('out').innerHTML += "3d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 42.5 && cv_b > 37.6) {
    rollb = Math.floor(Math.random() * (40 - 4 + 1) + 4);
    document.getElementById('out').innerHTML += "4d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 47.5 && cv_b > 42.6) {
    rollb = Math.floor(Math.random() * (45 - 5 + 1) + 5);
    document.getElementById('out').innerHTML += "4d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 52.5 && cv_b > 47.6) {
    rollb = Math.floor(Math.random() * (50 - 5 + 1) + 5);
    document.getElementById('out').innerHTML += "5d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 57.5 && cv_b > 52.6) {
    rollb = Math.floor(Math.random() * (55 - 6 + 1) + 6);
    document.getElementById('out').innerHTML += "5d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 62.5 && cv_b > 57.6) {
    rollb = Math.floor(Math.random() * (60 - 6 + 1) + 6);
    document.getElementById('out').innerHTML += "6d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 67.5 && cv_b > 62.6) {
    rollb = Math.floor(Math.random() * (65 - 7 + 1) + 7);
    document.getElementById('out').innerHTML += "6d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 72.5 && cv_b > 67.6) {
    rollb = Math.floor(Math.random() * (70 - 7 + 1) + 7);
    document.getElementById('out').innerHTML += "7d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 77.5 && cv_b > 72.6) {
    rollb = Math.floor(Math.random() * (75 - 8 + 1) + 8);
    document.getElementById('out').innerHTML += "7d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 82.5 && cv_b > 77.6) {
    rollb = Math.floor(Math.random() * (80 - 8 + 1) + 8);
    document.getElementById('out').innerHTML += "8d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 87.5 && cv_b > 82.6) {
    rollb = Math.floor(Math.random() * (85 - 9 + 1) + 9);
    document.getElementById('out').innerHTML += "8d10 + 1d5 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b < 92.5 && cv_b > 87.6) {
    rollb = Math.floor(Math.random() * (90 - 9 + 1) + 9);
    document.getElementById('out').innerHTML += "9d10 <br />"
    document.getElementById('out').innerHTML += "result = " + rollb + " <br />"
  } else if (cv_b > 92.5) {
    document.getElementById('out').innerHTML += "Error: CV is higher than 92.5. <br />"
  }



//Casualties

document.getElementById('out').innerHTML += "Determining casualties...<br />";


var Force_A_Casualties = (rollb * 0.01) * Force_A_Strength;
var Force_B_Casualties = (roll * 0.01) * Force_B_Strength;

document.getElementById('out').innerHTML += ForceA + " suffered " + Force_A_Casualties + " casualties. <br />";
document.getElementById('out').innerHTML += ForceB + " suffered " + Force_B_Casualties + " casualties. <br />";

if (roll > rollb){
  document.getElementById('out').innerHTML += ForceA + " rolled higher than " + ForceB + " and has therefore won the battle. <br />";
} else if (roll < rollb){
  document.getElementById('out').innerHTML += ForceB + " rolled higher than " + ForceA + " and has therefore won the battle. <br />";
} else if (roll == rollb){
  document.getElementById('out').innerHTML += ForceA + " and " + ForceB + " have landed the same roll, ending the battle in a stalemate. <br />";
} else document.getElementById('out').innerHTML += "I don't know how you did it, but you did. You found an error in my code. Please let me know, thanks! <br />";

}



