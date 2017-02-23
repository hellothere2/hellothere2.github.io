var random;  //https://hellothere2.github.io/



function clearresults(){

document.getElementById('out').innerHTML = " "

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


document.getElementById('out').innerHTML += "<br />"


  while (HPA > DuelStopsAt || HPB > DuelStopsAt) {

    AttackA = Math.ceil(Math.random() * WeaponStrength) + SkillA;
    document.getElementById('out').innerHTML += "They clash! <br />"
    document.getElementById('out').innerHTML += (FighterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * WeaponStrength) + SkillB;
    document.getElementById('out').innerHTML += (FighterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.


    if (AttackA > AttackB) {
      document.getElementById('out').innerHTML +=(FighterA + " hits " + FighterB + "!" + " <br />");
      difference = AttackA - AttackB;
      HPB = HPB - difference;
      document.getElementById('out').innerHTML +=(FighterB + " has " + HPB + " HP remaining." + " <br />");
      if (HPB <= DuelStopsAt) {
        document.getElementById('out').innerHTML +=(FighterB + " has fallen. " + FighterA + " wins!" + " <br />");
        break;
      }
    } else if (AttackB > AttackA) {
      document.getElementById('out').innerHTML +=(FighterB + " hits " + FighterA + "!" + " <br />");
      difference = AttackB - AttackA;
      HPA = HPA - difference;
      document.getElementById('out').innerHTML +=(FighterA + " has " + HPA + " HP remaining." + " <br />")
      if (HPA <= DuelStopsAt) {
        document.getElementById('out').innerHTML +=(FighterA + " has fallen. " + FighterB + " wins!" + " <br />");
        break;
      }
    } else if (AttackA = AttackB) {
      document.getElementById('out').innerHTML +=("The Duelists struggle in combat." + " <br />");
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


  document.getElementById('out').innerHTML += "<br />"

    if (document.getElementById('mal0').checked) {
    var maluseslimit = parseInt(document.getElementById('mal0').value);
  } else var maluseslimit = parseInt(document.getElementById('malneg').value); //check which radio button is selected.


    if (document.getElementById('ds19').checked) { //check which radio button is selected.
    var deathnumber = parseInt(document.getElementById('ds19').value);
  } else if (document.getElementById('ds18').checked) {
    var deathnumber = parseInt(document.getElementById('ds18').value); 
  }  else if (document.getElementById('ds17').checked) {
    var deathnumber = parseInt(document.getElementById('ds17').value); 
  }  else if (document.getElementById('ds16').checked) {
    var deathnumber = parseInt(document.getElementById('ds16').value); }


    if (document.getElementById('ds2').checked) { //check which radio button is selected.
    var deathsavedienumber = parseInt(document.getElementById('ds2').value);
  } else if (document.getElementById('ds3').checked) {
    var deathsavedienumber = parseInt(document.getElementById('ds3').value); 
  }  else if (document.getElementById('ds4').checked) {
    var deathsavedienumber = parseInt(document.getElementById('ds4').value); 
  }  else if (document.getElementById('ds5').checked) {
    var deathsavedienumber = parseInt(document.getElementById('ds5').value); }


  while (tilt < 7) {

    AttackA = Math.ceil(Math.random() * 20) + SkillA;
    // Get a random number between 1-20 and add Skill
    document.getElementById('out').innerHTML +=("They clash! <br />")
    document.getElementById('out').innerHTML +=(JousterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * 20) + SkillB;
    document.getElementById('out').innerHTML +=(JousterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.




    if (AttackA > AttackB) {
      var difference = AttackA - AttackB;
      if (difference >= deathnumber) {
        document.getElementById('out').innerHTML +=(JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        document.getElementById('out').innerHTML +=(JousterB + " makes a death save..." + " <br />")
        DeathSaveB = Math.ceil(Math.random() * 20) + SkillB;
        if (DeathSaveB >= 1 && DeathSaveB <= deathsavedienumber) {
          document.getElementById('out').innerHTML +=(JousterB + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= (deathsavedienumber + 1) && DeathSaveB <= 7) {
          document.getElementById('out').innerHTML +=(JousterB + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= 8 && DeathSaveB <= 10) {
          document.getElementById('out').innerHTML +=(JousterB + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveB > 10) {
          document.getElementById('out').innerHTML +=(JousterB + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.getElementById('out').innerHTML +=(JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.getElementById('out').innerHTML +=(JousterA + "'s lance has broken against " + JousterB + "." + " <br />");
        SkillB = SkillB - 3;
        if (SkillB < maluseslimit) {
          SkillB = maluseslimit;
        }
        document.getElementById('out').innerHTML +=(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        LancesBrokenA = LancesBrokenA + 1;
        if (LancesBrokenA >= 3) {
          document.getElementById('out').innerHTML +=(JousterA + " has broken 3 or more lances. " + JousterA + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.getElementById('out').innerHTML +=(JousterA + " has landed a strong hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 2;
        if (SkillB < maluseslimit) {
          SkillB = maluseslimit;
        }
        document.getElementById('out').innerHTML +=(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.getElementById('out').innerHTML +=(JousterA + " has landed a hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 1;
        if (SkillB < maluseslimit) {
          SkillB = maluseslimit;
        }
        document.getElementById('out').innerHTML +=(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.getElementById('out').innerHTML +=(JousterA + " has landed a glancing hit against " + JousterB + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }



    } else if (AttackB > AttackA) {
      var difference = AttackB - AttackA;
      if (difference >= deathnumber) {
        document.getElementById('out').innerHTML +=(JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        document.getElementById('out').innerHTML +=(JousterA + " makes a death save..." + " <br />")
        DeathSaveA = Math.ceil(Math.random() * 20) + SkillA;
        if (DeathSaveA >= 1 && DeathSaveA <= deathsavedienumber) {
          document.getElementById('out').innerHTML +=(JousterA + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= (deathsavedienumber + 1) && DeathSaveA <= 7) {
          document.getElementById('out').innerHTML +=(JousterA + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= 8 && DeathSaveA <= 10) {
          document.getElementById('out').innerHTML +=(JousterA + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveA > 10) {
          document.getElementById('out').innerHTML +=(JousterA + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.getElementById('out').innerHTML +=(JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.getElementById('out').innerHTML +=(JousterB + "'s lance has broken against " + JousterA + "." + " <br />");
        SkillA = SkillA - 3;
        if (SkillA < maluseslimit) {
          SkillA = maluseslimit;
        }
        document.getElementById('out').innerHTML +=(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        LancesBrokenB = LancesBrokenB + 1;
        if (LancesBrokenB >= 3) {
          document.getElementById('out').innerHTML +=(JousterB + " has broken 3 or more lances. " + JousterB + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.getElementById('out').innerHTML +=(JousterB + " has landed a strong hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 2;
        if (SkillA < maluseslimit) {
          SkillA = maluseslimit;
        }
        document.getElementById('out').innerHTML +=(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.getElementById('out').innerHTML +=(JousterB + " has landed a hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 1;
        if (SkillA < maluseslimit) {
          SkillA = maluseslimit;
        }
        document.getElementById('out').innerHTML +=(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.getElementById('out').innerHTML +=(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.getElementById('out').innerHTML +=("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.getElementById('out').innerHTML +=(JousterB + " has landed a glancing hit against " + JousterA + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }
    } else if (AttackA = AttackB) {
      document.getElementById('out').innerHTML +=("The Jousters ride past, neither hitting the other." + " <br />");
      tilt = tilt + 1;
    }

  }
  document.getElementById('out').innerHTML +=("Number of tilts run: " + tilt + ". " + JousterA + " broken lances: " + LancesBrokenA + ". " + JousterB + " broken lances: " + LancesBroken + " <br />");


}
