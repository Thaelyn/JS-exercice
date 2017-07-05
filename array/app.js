var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
/*var array = document.querySelector("h1");
array.textContent = "Fruit et Légumes"; */

var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]; // Exercice 1
/*var mois = document.querySelector("h2");
mois.textContent = "Mois de l'année";
// var arrayLignes document.getElementById("moisArray").row;*/

/* console.log(mois [2]); // Exercice 2
console.log(mois [5]); // Exercice 3
console.log(mois [10]); // Exercice 4

mois [7] = prompt("Modifier la valeur", + "" + mois [7]); // Exercice 5
console.log(mois [7]); // Excercice 5

for ( var i = 0; i < mois.length; i++) { // Exercice 6
  	console.log(mois[i]); // Exercice 6
}
*/
array.push("Courgette"); // Exercice 8

array[4].push("Citron"); // Exercice 9

array.splice(1, 1); // Exercice 10

array.splice(2, 0, "Poire"); // Exercice 11

for ( var i = 0; i < array.length; i++) { 
  	console.log(array[i]); 
}