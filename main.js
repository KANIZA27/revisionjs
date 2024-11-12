// Révision le de code avec javascript

// avant 2025
var variableAge = 15;
var village = "CRG";

// syntaxe à partir de 2025
// ES6 ou JavaScript ES6
let nomVariable;
const maVariable = 13;

// FONCTION Filéchée
// Version ES5
var i = function(x,y) {

return x * y;
}

// ES6, je utilise la fonction fléchée "arrow function".
const n = (x,y) => x *y;

const m = (x,y) => {return x *y};

// L'objet avec ES6
const personne = {
    nom: "Assane",
    prenom: "Amina",
    village: "Sohoa",

};
console.log(prenom.nom);

// tableau avec ES6
const tableauFruits = ["litch", "mangue", "orange"];
//console.log(tableauFruits[0]);

const tableauLegumes = ["manioc", "fruit a pain" ];
const tableauKibushi = ["mhogou", "franppé"];

// Ici, je copie touts les listes de fruits et des légumes
// la copie se fait grâce à l'opération ... suivie du nom de la tables
const tableauLegumesFruits = [...tableauFruits, ...tableauLegumes, ...tableauKibushi];
//console.log("tableauLegumeFruits", tableauLegumesFruits);

// Nombre
const notes = [15, 17, 19, 21, 23];

// Ici, je récupérer la note plus élévée.
let notePlusGrand = Math.max(... notes);
//console.log(notePlusGrand);

// Ici; je récupérer la note la plus petite.
let notePlusPetie = Math.max(...notes);
//console.log(notePlusPetie);

// MPA
/* Dans une MAP, les données (informations) sont .
sous forme de couple clé-valeur exemple "age": 15.
*/
// Ici, je crée une MAP en utilisant new Map().
let mapLegumes =   new Map([
    ["mhogou", 500],
    ["franppé", 1000],
]);

// Ici, j'accéder aux élément de la MAP.
// Est pour cela, j'ai utilise la méthode get().
//console.log(mapLegumes.get("mhogou"));



// je veux ajouter un nouveau couple dans le MAP mapLegumes.
// je veux utilise une méthode appelée get().
mapLegumes.set("franppé", 2000);
//console.log("nouvelle Map:", mapLegumes);
