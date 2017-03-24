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







}