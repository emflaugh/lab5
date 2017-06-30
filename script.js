window.alert("Hi! Welcome to Elyse's Temperature Converter. Click OK to begin.");

var tempF=prompt ("Please input temperature in Degrees Farenheight. (ex: 73)");

var celsius= ((tempF - 32) / 1.8).toFixed(0);
console.log (tempF + " Degrees Farenheight is equal to " + celsius + " Degrees Celsius");

if (celsius <=10) {
  console.log ("Brrrrr...It's Cold in Here.");
} else if (celsius >=18 && celsius <= 24) {
  console.log ("Not too hot, Not too cold. All you really need is a light jacket!");
} else {
  console.log ("It's gettin' hottttt in here!");
}

var tempC=prompt ("Please input temperature in Degrees Celsius. (ex: 32)");
var farenheight= ((tempC * 1.8) + 32).toFixed(0);
console.log (tempC + " Degrees Celsius is equal to " + farenheight + " Degrees Farenheight");

if (farenheight <=32) {
  console.log ("Brrrrr...It's Cold in Here.");
} else if (farenheight >=65 && farenheight <= 75) {
  console.log ("Not too hot, Not too cold. All you really need is a light jacket!");
} else {
  console.log ("It's gettin' hottttt in here!");
}
