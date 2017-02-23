var random;  //https://hellothere2.github.io/


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




  while (HPA > DuelStopsAt || HPB > DuelStopsAt) {

    AttackA = Math.ceil(Math.random() * WeaponStrength) + SkillA;
    document.writeln("They clash! <br />")
    document.writeln(FighterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * WeaponStrength) + SkillB;
    document.writeln(FighterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.


    if (AttackA > AttackB) {
      document.writeln(FighterA + " hits " + FighterB + "!" + " <br />");
      difference = AttackA - AttackB;
      HPB = HPB - difference;
      document.writeln(FighterB + " has " + HPB + " HP remaining." + " <br />");
      if (HPB <= DuelStopsAt) {
        document.writeln(FighterB + " has fallen. " + FighterA + " wins!" + " <br />");
        break;
      }
    } else if (AttackB > AttackA) {
      document.writeln(FighterB + " hits " + FighterA + "!" + " <br />");
      difference = AttackB - AttackA;
      HPA = HPA - difference;
      document.writeln(FighterA + " has " + HPA + " HP remaining." + " <br />")
      if (HPA <= DuelStopsAt) {
        document.writeln(FighterA + " has fallen. " + FighterB + " wins!" + " <br />");
        break;
      }
    } else if (AttackA = AttackB) {
      document.writeln("The Duelists struggle in combat." + " <br />");
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
  var deathnumber = 17;




  while (tilt < 7) {

    AttackA = Math.ceil(Math.random() * 20) + SkillA;
    // Get a random number between 1-20 and add Skill
    document.writeln("They clash! <br />")
    document.writeln(JousterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * 20) + SkillB;
    document.writeln(JousterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.




    if (AttackA > AttackB) {
      var difference = AttackA - AttackB;
      if (difference >= deathnumber) {
        document.writeln(JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        document.writeln(JousterB + " makes a death save..." + " <br />")
        DeathSaveB = Math.ceil(Math.random() * 20) + SkillB;
        if (DeathSaveB >= 1 && DeathSaveB <= 4) {
          document.writeln(JousterB + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= 5 && DeathSaveB <= 7) {
          document.writeln(JousterB + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= 8 && DeathSaveB <= 10) {
          document.writeln(JousterB + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveB > 10) {
          document.writeln(JousterB + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.writeln(JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.writeln(JousterA + "'s lance has broken against " + JousterB + "." + " <br />");
        SkillB = SkillB - 3;
        if (SkillB < 0) {
          SkillB = 0;
        }
        document.writeln(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        LancesBrokenA = LancesBrokenA + 1;
        if (LancesBrokenA >= 3) {
          document.writeln(JousterA + " has broken 3 or more lances. " + JousterA + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.writeln(JousterA + " has landed a strong hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 2;
        if (SkillB < 0) {
          SkillB = 0;
        }
        document.writeln(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.writeln(JousterA + " has landed a hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 1;
        if (SkillB < 0) {
          SkillB = 0;
        }
        document.writeln(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.writeln(JousterA + " has landed a glancing hit against " + JousterB + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }



    } else if (AttackB > AttackA) {
      var difference = AttackB - AttackA;
      if (difference >= deathnumber) {
        document.writeln(JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        document.writeln(JousterA + " makes a death save..." + " <br />")
        DeathSaveA = Math.ceil(Math.random() * 20) + SkillA;
        if (DeathSaveA >= 1 && DeathSaveA <= 4) {
          document.writeln(JousterA + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= 5 && DeathSaveA <= 7) {
          document.writeln(JousterA + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= 8 && DeathSaveA <= 10) {
          document.writeln(JousterA + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveA > 10) {
          document.writeln(JousterA + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.writeln(JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.writeln(JousterB + "'s lance has broken against " + JousterA + "." + " <br />");
        SkillA = SkillA - 3;
        if (SkillA < 0) {
          SkillA = 0;
        }
        document.writeln(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        LancesBrokenB = LancesBrokenB + 1;
        if (LancesBrokenB >= 3) {
          document.writeln(JousterB + " has broken 3 or more lances. " + JousterB + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.writeln(JousterB + " has landed a strong hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 2;
        if (SkillA < 0) {
          SkillA = 0;
        }
        document.writeln(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.writeln(JousterB + " has landed a hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 1;
        if (SkillA < 0) {
          SkillA = 0;
        }
        document.writeln(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.writeln(JousterB + " has landed a glancing hit against " + JousterA + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }
    } else if (AttackA = AttackB) {
      document.writeln("The Jousters ride past, neither hitting the other." + " <br />");
      tilt = tilt + 1;
    }

  }
  document.writeln("Number of tilts run: " + tilt + ". " + JousterA + " broken lances: " + LancesBrokenA + ". " + JousterB + " broken lances: " + LancesBrokenB);


}


















function joust2() {


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
  var deathnumber = 18;




  while (tilt < 7) {

    AttackA = Math.ceil(Math.random() * 20) + SkillA;
    // Get a random number between 1-20 and add Skill
    document.writeln("They clash! <br />")
    document.writeln(JousterA + " got: " + AttackA + " <br />");
    AttackB = Math.ceil(Math.random() * 20) + SkillB;
    document.writeln(JousterB + " got: " + AttackB + " <br />");
    // Dice are rolled, now let's see what their effect is.




    if (AttackA > AttackB) {
      var difference = AttackA - AttackB;
      if (difference >= deathnumber) {
        document.writeln(JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        document.writeln(JousterB + " makes a death save..." + " <br />")
        DeathSaveB = Math.ceil(Math.random() * 20) + SkillB;
        if (DeathSaveB >= 1 && DeathSaveB <= 3) {
          document.writeln(JousterB + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= 4 && DeathSaveB <= 7) {
          document.writeln(JousterB + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveB >= 8 && DeathSaveB <= 10) {
          document.writeln(JousterB + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveB > 10) {
          document.writeln(JousterB + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.writeln(JousterA + " has unhorsed " + JousterB + ". " + JousterA + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.writeln(JousterA + "'s lance has broken against " + JousterB + "." + " <br />");
        SkillB = SkillB - 3;
        document.writeln(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        LancesBrokenA = LancesBrokenA + 1;
        if (LancesBrokenA >= 3) {
          document.writeln(JousterA + " has broken 3 or more lances. " + JousterA + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.writeln(JousterA + " has landed a strong hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 2;
        document.writeln(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.writeln(JousterA + " has landed a hit against " + JousterB + "." + " <br />");
        SkillB = SkillB - 1;
        document.writeln(JousterB + "'s rolls are now modified by " + SkillB + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.writeln(JousterA + " has landed a glancing hit against " + JousterB + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }



    } else if (AttackB > AttackA) {
      var difference = AttackB - AttackA;
      if (difference >= deathnumber) {
        document.writeln(JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        document.writeln(JousterA + " makes a death save..." + " <br />")
        DeathSaveA = Math.ceil(Math.random() * 20) + SkillA;
        if (DeathSaveA >= 1 && DeathSaveA <= 4) {
          document.writeln(JousterA + " has been killed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= 5 && DeathSaveA <= 7) {
          document.writeln(JousterA + " has been maimed in the joust!" + " <br />")
          break;
        } else if (DeathSaveA >= 8 && DeathSaveA <= 10) {
          document.writeln(JousterA + " has been severely injured in the joust!" + " <br />")
          break;
        } else if (DeathSaveA > 10) {
          document.writeln(JousterA + " has been injured in the joust, but remains alive!" + " <br />")
          break;
        }
        ///end of death saves
      } else if (difference >= 15 && difference <= 17) {
        document.writeln(JousterB + " has unhorsed " + JousterA + ". " + JousterB + " wins the joust!" + " <br />")
        break;
      } else if (difference >= 11 && difference <= 14) {
        document.writeln(JousterB + "'s lance has broken against " + JousterA + "." + " <br />");
        SkillA = SkillA - 3;
        document.writeln(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        LancesBrokenB = LancesBrokenB + 1;
        if (LancesBrokenB >= 3) {
          document.writeln(JousterB + " has broken 3 or more lances. " + JousterB + " wins the joust!" + " <br />")
          break;
        }
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 7 && difference <= 10) {
        document.writeln(JousterB + " has landed a strong hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 2;
        document.writeln(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference >= 3 && difference <= 6) {
        document.writeln(JousterB + " has landed a hit against " + JousterA + "." + " <br />");
        SkillA = SkillA - 1;
        document.writeln(JousterA + "'s rolls are now modified by " + SkillA + " <br />");
        tilt = tilt + 1;
        if (SkillA > SkillB) {
          MalusDifference = SkillA - SkillB;
          if (MalusDifference >= 10) {
            document.writeln(JousterA + "'s Malus is 10+ above the Malus of " + JousterB + ". " + JousterA + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        } else if (SkillA < SkillB) {
          MalusDifference = SkillB - SkillA;
          if (MalusDifference >= 10) {
            document.writeln(JousterB + "'s Malus is 10+ above the Malus of " + JousterA + ". " + JousterB + " wins!" + " <br />")
            break;
          } else if (MalusDifference < 10) {
            document.writeln("Malus difference is under 10." + " <br />")
          }
        }
      } else if (difference <= 2) {
        document.writeln(JousterB + " has landed a glancing hit against " + JousterA + " OR has missed." + " <br />");
        tilt = tilt + 1;
      }
    } else if (AttackA = AttackB) {
      document.writeln("The Jousters ride past, neither hitting the other." + " <br />");
      tilt = tilt + 1;
    }

  }
  document.writeln("Number of tilts run: " + tilt + ". " + JousterA + " broken lances: " + LancesBrokenA + ". " + JousterB + " broken lances: " + LancesBrokenB);


}

