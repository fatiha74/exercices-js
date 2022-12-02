// burger

class burger {
  constructor(lesingredient,prix,lesburgers){
this.listeingredient = [];
this.prix = 0;
this.listeburger =  [
  {
    prix: 5,
    ingredients: ["tomate", "ail", "pain", "steack"],
    nom: "le black a nd white",
  },
  {
    prix: 7,
    ingredients: ["tomate", "oignon", "pain", "steack"],
    nom: "le white",
  },
  {
    prix: 5,
    ingredients: ["tomate", "persil", "pain", "steack"],
    nom: "le black",
  },
]
  }

  composerburger(leburger){

    if (Array.isArray(argument)) {
      // on rempli le tableau ingredients
      this.lesingredients = argument;

      // on fait un cumul pour ajouter à 5 +1EURO pour chaque ingredient en plus
      // let i= 0;
      // for (y of argument){
      //     i++;
      // }

      // nbingredient = argument.ingredients.length;
      //  console.log("avec length" +this.lesingredients.length )
      this.prix = this.lesingredients.length + 5;
    } else {
      for (valeur of this.lesburgers) {
        // on cherche le nom du burger dans le tableau
        if (argument == valeur.nom) {
          // une assignation
          this.lesingredients = [valeur.ingredients];

          this.prix = valeur.prix;
        }
      }
    }

    console.log(this.lesingredients);
    console.log(this.prix);
  
  }

  ajouterburger(objetburger){

  }

}

// LES CLASSES façon JSON
let object = {
  rond: true,
 couleur: "red",
};


// class = creation d'une class
// voiture = nom de ma nouvelle class
class voiture {
 constructor(couleur, marque) {
   // sans recuperer l'attribut
   this.couleur = couleur;
   this.marque = marque;
   this.modele = "207";
   this.kilometrage = 0;
   this.reservoir = 0;
   this.reservoircapacite = 40;
 }
// on ne met pas de virgule
 remplir(qte){
   this.reservoir = qte;
if((this.reservoir + qte )> this.reservoircapacite){
 console.log('trop gross quantité')
}else{
 this.reservoir += qte;
}

 }
 avancer(){
  this.kilometrage += 10;
  this.reservoir -=1;
 }
}
console.log(voiture);


// Creation avec le constructeur de classe
let voitureRouge = new voiture("rouge", "fiat");
let voitureJaune = new voiture("jaune", "fiat");
voitureRouge.remplir(40);

console.log(voitureRouge);
