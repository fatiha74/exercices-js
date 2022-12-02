// // objet burger

// let burger = {
//     prix : 5,
//     ingredients : ['tomate', 'oignon','pain','steack'],
//     nom : "le black and white"
// }

// // un tableau avec trois objet {}
// let tbburger = [{prix : 5,ingredients : ['tomate', 'ail','pain','steack'],nom : "le black and white"},{prix : 5,ingredients : ['tomate', 'oignon','pain','steack'],nom : "le white"},{prix : 5,ingredients : ['tomate', 'persil','pain','steack'],nom : "le black"}]

// // afficher le nom du deuxieme objet
// // console.log(tbburger[1].nom);

// // // afficher tous les noms des burgers
//  let i = 0;
// // tbburger.forEach(burger => {
// // //     console.log(tbburger[i].nom);
// // //     i++;
// // // });

// // for (nom of tbburger){

// //     console.log(tbburger[i].nom);
// //     i++;
// // }

// for (valeur of tbburger){
//     console.log(valeur.ingredients[1]);
// }

let burger = {
  lesingredients: [],
  prix: 0,
  lesburgers: [
    {
      prix: 5,
      ingredients: ["tomate", "ail", "pain", "steack"],
      nom: "le black and white",
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
  ],

  composerBurger: function (argument) {
    // on verifie si c'est un tableau
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
  },

  // on ajourte un burger
  addburger: function (argument) {
    this.lesburgers.push(argument);
    console.log(this.lesburgers);
  },
};

// for (nom in tbburger){
//     console.log(nom);
// }

//  api renvoi du json, on se balade dans des tableaux d'objet

// objet burger
