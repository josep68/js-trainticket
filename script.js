var age = parseInt(prompt("Quanti anni hai?"));
var distance = parseInt(prompt("Quanti Km è lungo il tuo viaggio?"));
var cost = 0.21 * distance;
if (age < 18) {
  document.writeln("Il costo del tuo biglietto è: € " + (cost - ((cost * 20) / 100)));
} else if (age > 65) {
  document.writeln("Il costo del tuo biglietto è: € " + (cost - ((cost * 40) / 100)));
} else {
  document.writeln("Il costo del tuo biglietto è: € " + cost);
}
