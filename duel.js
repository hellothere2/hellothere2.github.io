var random; //https://hellothere2.github.io/



function clearmeleeresults() {
  document.getElementById('meleeout').innerHTML = " ";
}

function clearduelresults() {
  document.getElementById('duelout').innerHTML = " ";
}

function clearjoustresults() {
  document.getElementById('joustout').innerHTML = " ";
}

function cleartable() {
  document.getElementById('inftable').innerHTML = " ";
  document.getElementById('hctable').innerHTML = " ";
  document.getElementById('lctable').innerHTML = " ";
  document.getElementById('cogtable').innerHTML = " ";
  document.getElementById('galleytable').innerHTML = " ";
  document.getElementById('IBLStable').innerHTML = " ";
}





function dickbutt() {


  var FighterA = document.getElementById("firstname").value;
  var FighterB = document.getElementById("secondname").value;

  var SkillA = parseInt(document.getElementById("SkillA").value);
  // fighter A's skill bonus
  var SkillB = parseInt(document.getElementById("SkillB").value);
  // fighter B's skill bonus
  var HPA = parseInt(document.getElementById("HPA").value);
  // fighter A's HP
  var HPB = parseInt(document.getElementById("HPB").value);
  // fighter B's HP
  var difference = 0;
  // the difference between two rolls, used to calculate damage
  var DuelStopsAt = parseInt(document.getElementById("Dueltype").value);
  // edit this value to determine when the duel will end. If you want people to auto-yeild at a certain value, set it here. If the value is 0, it will be a duel to the death.
  var WeaponStrength; // 50 for blunt weapons, 75 for normal.



  if (document.getElementById('bT').checked) {
    var WeaponStrength = parseInt(document.getElementById('bT').value);
  } else var WeaponStrength = parseInt(document.getElementById('bF').value); //check which radio button is selected.


  document.getElementById('duelout').innerHTML += "<br />"


  while (HPA > DuelStopsAt || HPB > DuelStopsAt) {

    AttackA = Math.ceil(Math.random() * WeaponStrength) + SkillA;
    document.getElementById('duelout').innerHTML += "They clash! <br />"
    document.getElementById('duelout').innerHTML += (FighterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * WeaponStrength) + SkillB;
    document.getElementById('duelout').innerHTML += (FighterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.


    if (AttackA > AttackB) {
      document.getElementById('duelout').innerHTML += (FighterA + " hits " + FighterB + "!" + " <br />");
      difference = AttackA - AttackB;
      HPB = HPB - difference;
      document.getElementById('duelout').innerHTML += (FighterB + " has " + HPB + " HP remaining." + " <br />");
      if (HPB <= DuelStopsAt) {
        document.getElementById('duelout').innerHTML += (FighterB + " has fallen. " + FighterA + " wins!" + " <br />");
        break;
      }
    } else if (AttackB > AttackA) {
      document.getElementById('duelout').innerHTML += (FighterB + " hits " + FighterA + "!" + " <br />");
      difference = AttackB - AttackA;
      HPA = HPA - difference;
      document.getElementById('duelout').innerHTML += (FighterA + " has " + HPA + " HP remaining." + " <br />")
      if (HPA <= DuelStopsAt) {
        document.getElementById('duelout').innerHTML += (FighterA + " has fallen. " + FighterB + " wins!" + " <br />");
        break;
      }
    } else if (AttackA = AttackB) {
      document.getElementById('duelout').innerHTML += ("The Duelists struggle in combat." + " <br />");
    }

  }


}







function joust() {


  var JousterA = document.getElementById("JousterA").value;
  var JousterB = document.getElementById("JousterB").value;

  var SkillA = parseInt(document.getElementById("JousterSkillA").value);
  // JousterA's skill bonus - This is the only editable value. Set to 0 for no bonus.
  var SkillB = parseInt(document.getElementById("JousterSkillB").value);
  // JousterB's skill bonus - This is the only editable value. Set to 0 for no bonus.
  var difference = 0;
  // the difference between two rolls, used to calculate things. Don't touch this.
  var tilt = 0;
  // current tilt. Don't touch this.
  var LancesBrokenA = 0;
  // Number of times JousterA has broken a lance against B.
  var LancesBrokenB = 0;
  // Number of times JousterB has broken a lance against A.
  var MalusDifference = 0;
  var deathnumber;
  var maluseslimit;


  document.getElementById('joustout').innerHTML += "<br />"

  if (document.getElementById('mal0').checked) {
    var maluseslimit = parseInt(document.getElementById('mal0').value);
  } else var maluseslimit = parseInt(document.getElementById('malneg').value); //check which radio button is selected.


  if (document.getElementById('ds19').checked) { //check which radio button is selected.
    var deathnumber = parseInt(document.getElementById('ds19').value);
  } else if (document.getElementById('ds18').checked) {
    var deathnumber = parseInt(document.getElementById('ds18').value);
  } else if (document.getElementById('ds17').checked) {
    var deathnumber = parseInt(document.getElementById('ds17').value);
  } else if (document.getElementById('ds16').checked) {
    var deathnumber = parseInt(document.getElementById('ds16').value);
  }


  if (document.getElementById('ds2').checked) { //check which radio button is selected.
    var deathsavedienumber = parseInt(document.getElementById('ds2').value);
  } else if (document.getElementById('ds3').checked) {
    var deathsavedienumber = parseInt(document.getElementById('ds3').value);
  } else if (document.getElementById('ds4').checked) {
    var deathsavedienumber = parseInt(document.getElementById('ds4').value);
  } else if (document.getElementById('ds5').checked) {
    var deathsavedienumber = parseInt(document.getElementById('ds5').value);
  }


  while (tilt < 7) {

    AttackA = Math.ceil(Math.random() * 20) + SkillA;
    // Get a random number between 1-20 and add Skill
    document.getElementById('joustout').innerHTML += ("They clash! <br />")
    document.getElementById('joustout').innerHTML += (JousterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * 20) + SkillB;
    document.getElementById('joustout').innerHTML += (JousterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.




    if (AttackA > AttackB) {
      var difference = AttackA - AttackB;
      if (difference >= deathnumber) {
        document.getElementById('joustout').innerHTML += (JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        document.getElementById('joustout').innerHTML += (JousterB + " makes a death save..." + " <br />")
        DeathSaveB = Math.ceil(Math.random() * 20) + SkillB;
        if (DeathSaveB >= 1 && DeathSaveB <= deathsavedienumber) {
          document.getElementById('joustout').innerHTML += (JousterB + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= (deathsavedienumber + 1) && DeathSaveB <= 7) {
          document.getElementById('joustout').innerHTML += (JousterB + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= 8 && DeathSaveB <= 10) {
          document.getElementById('joustout').innerHTML += (JousterB + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveB > 10) {
          document.getElementById('joustout').innerHTML += (JousterB + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.getElementById('joustout').innerHTML += (JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.getElementById('joustout').innerHTML += (JousterA + "'s lance has broken against " + JousterB + "." + " <br />");
        SkillB = SkillB - 3;
        if (SkillB < maluseslimit) {
          SkillB = maluseslimit;
        }
        document.getElementById('joustout').innerHTML += (JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        LancesBrokenA = LancesBrokenA + 1;
        if (LancesBrokenA >= 3) {
          document.getElementById('joustout').innerHTML += (JousterA + " has broken 3 or more lances. " + JousterA + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.getElementById('joustout').innerHTML += (JousterA + " has landed a strong hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 2;
        if (SkillB < maluseslimit) {
          SkillB = maluseslimit;
        }
        document.getElementById('joustout').innerHTML += (JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.getElementById('joustout').innerHTML += (JousterA + " has landed a hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 1;
        if (SkillB < maluseslimit) {
          SkillB = maluseslimit;
        }
        document.getElementById('joustout').innerHTML += (JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.getElementById('joustout').innerHTML += (JousterA + " has landed a glancing hit against " + JousterB + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }



    } else if (AttackB > AttackA) {
      var difference = AttackB - AttackA;
      if (difference >= deathnumber) {
        document.getElementById('joustout').innerHTML += (JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        document.getElementById('joustout').innerHTML += (JousterA + " makes a death save..." + " <br />")
        DeathSaveA = Math.ceil(Math.random() * 20) + SkillA;
        if (DeathSaveA >= 1 && DeathSaveA <= deathsavedienumber) {
          document.getElementById('joustout').innerHTML += (JousterA + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= (deathsavedienumber + 1) && DeathSaveA <= 7) {
          document.getElementById('joustout').innerHTML += (JousterA + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= 8 && DeathSaveA <= 10) {
          document.getElementById('joustout').innerHTML += (JousterA + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveA > 10) {
          document.getElementById('joustout').innerHTML += (JousterA + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.getElementById('joustout').innerHTML += (JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.getElementById('joustout').innerHTML += (JousterB + "'s lance has broken against " + JousterA + "." + " <br />");
        SkillA = SkillA - 3;
        if (SkillA < maluseslimit) {
          SkillA = maluseslimit;
        }
        document.getElementById('joustout').innerHTML += (JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        LancesBrokenB = LancesBrokenB + 1;
        if (LancesBrokenB >= 3) {
          document.getElementById('joustout').innerHTML += (JousterB + " has broken 3 or more lances. " + JousterB + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.getElementById('joustout').innerHTML += (JousterB + " has landed a strong hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 2;
        if (SkillA < maluseslimit) {
          SkillA = maluseslimit;
        }
        document.getElementById('joustout').innerHTML += (JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.getElementById('joustout').innerHTML += (JousterB + " has landed a hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 1;
        if (SkillA < maluseslimit) {
          SkillA = maluseslimit;
        }
        document.getElementById('joustout').innerHTML += (JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('joustout').innerHTML += (JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('joustout').innerHTML += ("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.getElementById('joustout').innerHTML += (JousterB + " has landed a glancing hit against " + JousterA + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }
    } else if (AttackA = AttackB) {
      document.getElementById('joustout').innerHTML += ("The Jousters ride past, neither hitting the other." + " <br />");
      tilt = tilt + 1;
    }

  }
  document.getElementById('joustout').innerHTML += ("Number of tilts run: " + tilt + ". " + JousterA + " broken lances: " + LancesBrokenA + ". " + JousterB + " broken lances: " + LancesBroken + " <br />");


}












function movement() {


  var ficost = 1;
  var hcost = 2;
  var forcost = 2;
  var tuncost = 2;
  var mocost = 3;
  var swacost = 3;
  var descost = 3;


  if (document.getElementById('m1').checked) {
    var travel = (document.getElementById('m1').value);
  } else var travel = (document.getElementById('m2').value); //check which radio button is selected.





  if (travel == "land") {

    var field = document.getElementById('iFieldTiles').value;
    var hill = document.getElementById('iTundraTiles').value;
    var forest = document.getElementById('iForestTiles').value;
    var tundra = document.getElementById('iTundraTiles').value;
    var mountain = document.getElementById('iFieldTiles').value;
    var swamp = document.getElementById('iSwampTiles').value;
    var desert = document.getElementById('iDesertTiles').value;
    var ocean = document.getElementById('iOceanTiles').value;


    ///This part calulates the speed of each type

    var infantry = document.getElementById('iinf').value;
    if (infantry < 21) {
      infantryspeed = 15;
    } else infantryspeed = 12;
    infttc = (field * ficost) + (hill * hcost) + (forest * forcost) + (tundra * tuncost) + (mountain * mocost) + (swamp * swacost) + (desert * descost);
    var inftime = (infttc / infantryspeed) * 24;
    document.getElementById('inftable').innerHTML += inftime;



    var heavycav = document.getElementById('ihcav').value;

    if (heavycav < 21) {
      heavycavspeed = 30;
    } else heavycavspeed = 18;
    heavycavttc = (field * ficost) + (hill * hcost) + (forest * forcost) + (tundra * tuncost) + (mountain * mocost) + (swamp * swacost) + (desert * descost);
    var hcavtime = (heavycavttc / heavycavspeed) * 24;
    document.getElementById('hctable').innerHTML += hcavtime;


    var lightcav = document.getElementById('ilcav').value;

    if (lightcav < 21) {
      lightcavspeed = 30;
    } else lightcavspeed = 24;
    lightcavttc = (field * ficost) + (hill * hcost) + (forest * forcost) + (tundra * tuncost) + (mountain * mocost) + (swamp * swacost) + (desert * descost);
    var lcavtime = (lightcavttc / lightcavspeed) * 24;
    document.getElementById('lctable').innerHTML += lcavtime;






  } else if (travel == "water") {


    var field = document.getElementById('iFieldTiles').value;
    var hill = document.getElementById('iTundraTiles').value;
    var forest = document.getElementById('iForestTiles').value;
    var tundra = document.getElementById('iTundraTiles').value;
    var mountain = document.getElementById('iFieldTiles').value;
    var swamp = document.getElementById('iSwampTiles').value;
    var desert = document.getElementById('iDesertTiles').value;
    var ocean = document.getElementById('iOceanTiles').value;


    ///This part calulates the speed of each type
    var cog = document.getElementById('icog').value;
    if (cog < 21) {
      var cs = 0;
    } else cs = (cog - 20) / 5;
    var cogspeed = Math.max(64 - cs, 16);
    var cttc = ocean * 1;
    var ctime = (cttc / cogspeed) * 24;
    document.getElementById('cogtable').innerHTML += ctime;

    var galley = document.getElementById('igalley').value;
    if (galley < 21) {
      var gs = 0;
    } else gs = (galley - 20) / 5;
    var galleyspeed = Math.max(48 - gs, 16);
    var gttc = ocean * 1;
    var gtime = (gttc / galleyspeed) * 24;
    document.getElementById('galleytable').innerHTML += gtime;

    var IBLS = document.getElementById('iIBlongship').value;
    if (IBLS < 21) {
      var iblss = 0;
    } else iblss = (IBlS - 20) / 5;
    var IBLSspeed = Math.max(48 - iblss, 16);
    var IBLSttc = ocean * 1;
    var IBLStime = (IBLSttc / IBLSspeed) * 24;
    document.getElementById('IBLStable').innerHTML += IBLStime;
  }
}







///function melee() is dependant on function addFields()


function melee() {

  var NumberOfContestants = parseInt(document.getElementById('member').value);
  var OriginalNumberOfContestants = parseInt(document.getElementById('member').value);
  var Threshold = parseInt(document.getElementById('iThreshold').value);
  var WeaponStrength = parseInt(document.getElementById('iWeaponStrength').value);

  document.getElementById('meleeout').innerHTML += "The following is a list of all the participants of the melee and their skill modifiers.<br>";


  for (i2 = 0; i2 < NumberOfContestants; i2++) {
    var bullshit = document.getElementById('member' + i2).value;
    var bullshit2 = parseInt(document.getElementById('member' + i2 + 'skill').value);
    document.getElementById('meleeout').innerHTML += "Name: " + bullshit + ". Skill: " + bullshit2 + "<br>";
  }

  document.getElementById('meleeout').innerHTML += "The melee will now begin. <br>";



  if (document.getElementById('EliminateViaThreshold').checked) {
document.getElementById('meleeout').innerHTML += "Eliminate by Threshold <br>";

    if (document.getElementById('SingleRound').checked) {

      var Attack = new Array(OriginalNumberOfContestants);
      var FUCKINGENDTHEMELEEALREADY = false;

      while (NumberOfContestants > 1) {
        for (i3 = 0; i3 < OriginalNumberOfContestants; i3++) {
          var Participant = document.getElementById('member' + i3).value;
          var MeleeSkill = parseInt(document.getElementsByName('ContestantSkillValues')[i3].value);
          if (Participant != "Contestant Disqualified") {
            Attack[i3] = Math.ceil(Math.random() * WeaponStrength) + MeleeSkill;
            document.getElementById('meleeout').innerHTML += Participant + " got " + Attack[i3] + "<br>";
            if (Attack[i3] < Threshold) {
              document.getElementById('meleeout').innerHTML += Participant + " rolled lower than the Threshold and is removed from the melee.<br>";
              document.getElementById('member' + i3).value = "Contestant Disqualified";
              NumberOfContestants -= 1;
            } else document.getElementById('meleeout').innerHTML += Participant + " remains in the melee and moves on to the next round.<br>";
          }
          if (MeleeSkill >= Threshold) {
            document.getElementById('meleeout').innerHTML += "Skill value of " + Participant + " will make them always roll higher than Threshold, causing a never-ending Melee. Closing Program.<br>";
            FUCKINGENDTHEMELEEALREADY = true;
            break;
          }
        }
        if (FUCKINGENDTHEMELEEALREADY == true) {
          break;
        }
        break;
      }

    } else if (document.getElementById('MultipleRounds').checked) {
      var round = 1;
      var Attack = new Array(OriginalNumberOfContestants);
      var FUCKINGENDTHEMELEEALREADY = false;

      while (NumberOfContestants > 1) {
        document.getElementById('meleeout').innerHTML += "Round " + round + "<br>";
        round = round + 1;
        for (i3 = 0; i3 < OriginalNumberOfContestants; i3++) {
          var Participant = document.getElementById('member' + i3).value;
          var MeleeSkill = parseInt(document.getElementsByName('ContestantSkillValues')[i3].value);

          if (Participant != "Contestant Disqualified") {
            Attack[i3] = Math.ceil(Math.random() * WeaponStrength) + MeleeSkill;
            document.getElementById('meleeout').innerHTML += Participant + " got " + Attack[i3] + "<br>";
            if (Attack[i3] < Threshold) {
              document.getElementById('meleeout').innerHTML += Participant + " rolled lower than the Threshold and is removed from the melee.<br>";
              document.getElementById('member' + i3).value = "Contestant Disqualified";
              NumberOfContestants -= 1;
            } else document.getElementById('meleeout').innerHTML += Participant + " remains in the melee and moves on to the next round.<br>";
          }
          if (MeleeSkill >= Threshold) {
            document.getElementById('meleeout').innerHTML += "Skill value of " + Participant + " will make them always roll higher than Threshold, causing a never-ending Melee. Closing Program.<br>";
            FUCKINGENDTHEMELEEALREADY = true;
            break;
          }
        }
        if (FUCKINGENDTHEMELEEALREADY == true) {
          break;
        }

      }

      for (i4 = 0; i4 < OriginalNumberOfContestants; i4++) {
        var NameCheck = document.getElementsByName('ContestantNamesList')[i4].value;
        if (NameCheck != "Contestant Disqualified") {
          document.getElementById('meleeout').innerHTML += "The winner is " + NameCheck;
          break;
        }
      }
    }

  } else if (document.getElementById('EliminateViaOther').checked) {

  document.getElementById('meleeout').innerHTML += "Eliminate by other <br>";

    if (document.getElementById('SingleRound').checked) {
      var round = 1;
      var Attack = new Array(OriginalNumberOfContestants);

      while (NumberOfContestants > 1) {
        document.getElementById('meleeout').innerHTML += "Round " + round + "<br>";
        round = round + 1;
        for (i3 = 0; i3 < OriginalNumberOfContestants; i3++) {
          var Participant = document.getElementById('member' + i3).value;
          var MeleeSkill = parseInt(document.getElementsByName('ContestantSkillValues')[i3].value);

          if (Participant != "Contestant Disqualified") {
            Attack[i3] = Math.ceil(Math.random() * WeaponStrength) + MeleeSkill;
            document.getElementById('meleeout').innerHTML += Participant + " got " + Attack[i3] + "<br>";
          } 
        }
        Attack.sort(function(a, b){return a-b});
        if(Attack[0]<Attack[1]){
            document.getElementById('meleeout').innerHTML += "Lowest roll is " + Attack[0] + "<br>";
          } else document.getElementById('meleeout').innerHTML += "Error<br>";
        break;
      }

    } else if (document.getElementById('MultipleRounds').checked) {

      var round = 1;
      var Attack = new Array(OriginalNumberOfContestants);

      while (NumberOfContestants > 1) {
        document.getElementById('meleeout').innerHTML += "Round " + round + "<br>";
        round = round + 1;
        for (i3 = 0; i3 < OriginalNumberOfContestants; i3++) {
          var Participant = document.getElementById('member' + i3).value;
          var MeleeSkill = parseInt(document.getElementsByName('ContestantSkillValues')[i3].value);

          if (Participant != "Contestant Disqualified") {
            Attack[i3] = Math.ceil(Math.random() * WeaponStrength) + MeleeSkill;
            document.getElementById('meleeout').innerHTML += Participant + " got " + Attack[i3] + "<br>";
          } 
        }
        Attack.sort(function(a, b){return a-b});
        if(Attack[0]<Attack[1]){
            document.getElementById('meleeout').innerHTML += "Lowest roll is " + Attack[0] + "<br>";
          } else document.getElementById('meleeout').innerHTML += "Error<br>";
          break;
      }
    }
  }
}





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
    container.appendChild(document.createTextNode("Unit " + (i + 1) + "'s name followed by Unit's type:"));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.id = "unit_A" + i; ///member0, member1, member2, member3, etc.
    input.name = "Force_A_UnitNamesList"
    var dickbuttcreampie = i + 1
    input.value = "Contestant" + dickbuttcreampie;
    container.appendChild(input);
    // Create an <input> element, set its type and name attributes
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "member" + im + "skill"; ///member1skill, member2skill, member3skill, etc.
    input2.name = "ContestantSkillValues"
    input2.value = 0;
    container.appendChild(input2);
    // Append a line break 
    container.appendChild(document.createElement("br"));
  }
}