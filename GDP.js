//https://hellothere2.github.io/

function cleartable(){
document.getElementById('GovernmentSpending').innerHTML = " ";
document.getElementById('GDPtable').innerHTML = " ";
document.getElementById('ConsumptionTable').innerHTML = " ";
document.getElementById('InvestmentTable').innerHTML = " ";
document.getElementById('ExportsTable').innerHTML = " ";
document.getElementById('ImportsTable').innerHTML = " ";
}


function calculateGDP(){

  var GDP = parseInt(document.getElementById("iGDP").value);
  var Con = parseInt(document.getElementById('iConsumption').value);
  var Inv = parseInt(document.getElementById('iInvestment').value);
  var Exp = parseInt(document.getElementById('iExports').value);
  var Imp =parseInt(document.getElementById('iImports').value);
  var GOS = parseInt(document.getElementById('iGovernmentSpending').value);
  



  if (document.getElementById('m1').checked) {
    var CaluclatedGDP = Con + Inv + GOS + Exp - Imp;
    document.getElementById('GDPtable').innerHTML = CaluclatedGDP;
    document.getElementById('ConsumptionTable').innerHTML = Con;
    document.getElementById('GovernmentSpending').innerHTML = GOS; 
    document.getElementById('ImportsTable').innerHTML = Imp;
    document.getElementById('ExportsTable').innerHTML = Exp;
    document.getElementById('InvestmentTable').innerHTML = Inv;
    } else if(document.getElementById('m2').checked){
    var CalculatedGOS = GDP - Con - Inv - Exp + Imp;
    document.getElementById('GDPtable').innerHTML = GDP;
    document.getElementById('ConsumptionTable').innerHTML = Con;
    document.getElementById('GovernmentSpending').innerHTML = CalculatedGOS; 
    document.getElementById('ImportsTable').innerHTML = Imp;
    document.getElementById('ExportsTable').innerHTML = Exp;
    document.getElementById('InvestmentTable').innerHTML = Inv;
    } else if(document.getElementById('m3').checked){
    var CalculatedConsumption = GDP - Inv - GOS - Exp + Imp;
    document.getElementById('GDPtable').innerHTML = GDP;
    document.getElementById('ConsumptionTable').innerHTML = CalculatedConsumption;
    document.getElementById('GovernmentSpending').innerHTML = GOS; 
    document.getElementById('ImportsTable').innerHTML = Imp;
    document.getElementById('ExportsTable').innerHTML = Exp;
    document.getElementById('InvestmentTable').innerHTML = Inv;
    } else if(document.getElementById('m4').checked){
    var CalculatedInvestment = GDP - Con - GOS - Exp + Imp;
    document.getElementById('GDPtable').innerHTML = GDP;
    document.getElementById('ConsumptionTable').innerHTML = Con;
    document.getElementById('GovernmentSpending').innerHTML = GOS; 
    document.getElementById('ImportsTable').innerHTML = Imp;
    document.getElementById('ExportsTable').innerHTML = Exp;
    document.getElementById('InvestmentTable').innerHTML = CalculatedInvestment;
    } else if(document.getElementById('m5').checked){
    var CalculatedExports = GDP - Con - GOS - Inv + Imp;
    document.getElementById('GDPtable').innerHTML = GDP;
    document.getElementById('ConsumptionTable').innerHTML = Con;
    document.getElementById('GovernmentSpending').innerHTML = GOS; 
    document.getElementById('ImportsTable').innerHTML = Imp;
    document.getElementById('ExportsTable').innerHTML = CalculatedExports;
    document.getElementById('InvestmentTable').innerHTML = Inv;
    } else if(document.getElementById('m6').checked){
    var CalculatedImports = Con + Inv + Exp + GOS - GDP;
    document.getElementById('GDPtable').innerHTML = GDP;
    document.getElementById('ConsumptionTable').innerHTML = Con;
    document.getElementById('GovernmentSpending').innerHTML = GOS; 
    document.getElementById('ImportsTable').innerHTML = CalculatedImports;
    document.getElementById('ExportsTable').innerHTML = Exp;
    document.getElementById('InvestmentTable').innerHTML = Inv;
    } else document.getElementById('GDPtable').innerHTML = "Error";

}