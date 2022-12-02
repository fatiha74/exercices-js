

// // ex distributeur automatique
let machinealaver = {
  estverouillee: false,
  contenu: [],

  laverlelinge: function () {
     this.estverouillee = false;

    setTimeout(() => {

      //  this.estpropre = true;
      for (const valeur of this.contenu) {
        valeur.estPropre=true;
      }
// this.estverouillee = false;
console.log('coucou');
    }, 15000);
  },
};

let caravane = {
  tiroir: [],
  penderie: [],
  etagere: [],
  panierlingesale: [],
  machinealaver: Object.create(machinealaver),
  rangerlelinge: function (tableau) {

    for (const valeur of tableau) {
      console.log("tableau" + valeur.nom);
      console.log("propre" + valeur.estPropre);

      if (valeur.estPropre) {

        switch (valeur.type) {
          case "chaussette":
            
            // this.tiroir.push(valeur.nom);
            this.tiroir.push(valeur);
            break;
          case "tee-shirt":
            // penderie
            this.penderie.push(valeur);
            break;
          default:
            // etagere pour les jeans
            this.etagere.push(valeur);
        }

      } else {
        this.panierlingesale.push(valeur);
      }
    }


  },

  lancerlamachine : function(){
    if(!this.machinealaver.estverouillee){
// console.log(this.panierlingesale)
      for (const valeur of this.panierlingesale) {
    
         this.machinealaver.contenu.push(valeur);
    
      }
      this.panierlingesale=[];
      // console.log(this.machinealaver.contenu)
        caravane.machinealaver.laverlelinge()
 
  }
},
viderlamachine : function(){
if(!this.machinealaver.estverouillee){
  console.log('hi')
  for (const valeur of this.machinealaver.contenu) {

    switch (valeur.type) {
      case "chaussette":
        
        // this.tiroir.push(valeur.nom);
        this.tiroir.push(valeur);
        break;
      case "tee-shirt":
        // penderie
        this.penderie.push(valeur);
        break;
      default:
        // etagere pour les jeans
        this.etagere.push(valeur);
        
    }

  }
 
    this.machinealaver.contenu=[];
 console.log('contenu' + this.machinealaver.contenu);
}
}
};




let linges = [
  {
    nom: "laitvis",
    estPropre: true,
    type: "jean",
  },
  {
    nom: "de nîmes",
    estPropre: false,
    type: "jean",
  },
  {
    nom: "kaparole",
    estPropre: true,
    type: "jean",
  },
  {
    nom: "saperdry",
    estPropre: false,
    type: "tee-shirt",
  },
  {
    nom: "nike-l",
    estPropre: false,
    type: "tee-shirt",
  },
  {
    nom: "hard rap cofee",
    estPropre: true,
    type: "tee-shirt",
  },
  {
    nom: "nazeA",
    estPropre: true,
    type: "tee-shirt",
  },
  {
    nom: "pumba",
    estPropre: true,
    type: "chaussette",
  },
  {
    nom: "nike-l",
    estPropre: false,
    type: "chaussette",
  },
  {
    nom: "ribok",
    estPropre: false,
    type: "chaussette",
  },
  {
    nom: "filo",
    estPropre: true,
    type: "chaussette",
  },
  {
    nom: "le poulet sportif",
    estPropre: true,
    type: "chaussette",
  },
];

// let distributeur = {
//   allumee: false,
//   elements: {
//     liquide: {
//       coca: { prix: 3, qte: 5, codeproduit: 0 },
//       fanta: { prix: 3, qte: 10, codeproduit: 0 },
//       badoit: { prix: 3, qte: 6, codeproduit: 0 },
//     },
//     solide: {
//       chips: { prix: 2.5, qte: 7, codeproduit: 0 },
//       mars: { prix: 3, qte: 20, codeproduit: 0 },
//       snickers: { prix: 3, qte: 20, codeproduit: 0 },
//     },
//   },

//   remplir: function (tableau) {
//     // rempli le distributeur de 10 elements
//     console.log(tableau);

//     // pour les elements liquide
//     for (const property in this.elements.liquide) {
//       console.log("property : " + property);
//       console.log("tableau longueur" + tableau.length);
//       console.log("tableau[]" + tableau[1].length);

//       for (let index = 0; index < tableau.length; index++) {
//         for (let index2 = 0; index2 < tableau[index].length; index2++) {
//           if (tableau[index][index2].includes(property)) {
//             console.log("dans le 1ER if");

//             this.elements.liquide[property].qte += 10;
//           }
//         }
//       }
//     }
//     // pour les elements solide
//     for (const property in this.elements.solide) {
//       // pour chaque objet
//       console.log(property);

//       // index pour pour savoir 0 ou 1
//       for (let index = 0; index < tableau.length; index++) {
//         // l'interieur du tableau
//         for (let index2 = 0; index2 < tableau[index].length; index2++) {
//           if (tableau[index][index2].includes(property)) {
//             console.log("dans le 2eme if");

//             this.elements.solide[property].qte += 10;
//           }
//         }
//       }
//     }
//   },
//   allumerledistributeur: function () {
//     let tabrand = [];

//     for (const property in this.elements.liquide) {
//       console.log(property);

//       do {
//          random = Math.round(Math.random() * (150 - 100) + 100);

//       } while (tabrand.includes(random));

//       tabrand.push(random);
//       this.elements.liquide[property].codeproduit = random;

//     }

//     for (const property in this.elements.solide) {

//       do {
//         random = Math.round(Math.random() * (151 - 100) + 100);

//      } while (tabrand.includes(random));

//      tabrand.push(random);
//      this.elements.solide[property].codeproduit = random;

//   }

//   this.allumee = true;
// },

// afficherlesproduits : function(){

// }
// }

// // objet burger

// // let burger = {
// //     prix : 5,
// //     ingredients : ['tomate', 'oignon','pain','steack'],
// //     nom : "le black and white"
// // }

// // // un tableau avec trois objet {}
// // let tbburger = [{prix : 5,ingredients : ['tomate', 'ail','pain','steack'],nom : "le black and white"},{prix : 5,ingredients : ['tomate', 'oignon','pain','steack'],nom : "le white"},{prix : 5,ingredients : ['tomate', 'persil','pain','steack'],nom : "le black"}]

// // // afficher le nom du deuxieme objet
// // // console.log(tbburger[1].nom);

// // // // afficher tous les noms des burgers
// //  let i = 0;
// // // tbburger.forEach(burger => {
// // // //     console.log(tbburger[i].nom);
// // // //     i++;
// // // // });

// // // for (nom of tbburger){

// // //     console.log(tbburger[i].nom);
// // //     i++;
// // // }

// // for (valeur of tbburger){
// //     console.log(valeur.ingredients[1]);
// // }

// // let burger = {
// //     lesingredients : [],
// //     prix : 0,
// //     lesburgers : [{prix : 5,ingredients : ['tomate', 'ail','pain','steack'],nom : "le black and white"},{prix : 7,ingredients : ['tomate', 'oignon','pain','steack'],nom : "le white"},{prix : 5,ingredients : ['tomate', 'persil','pain','steack'],nom : "le black"}],

// //     composerBurger : function(argument){

// //         // on verifie si c'est un tableau
// //         if(Array.isArray(argument) ){

// //             // on rempli le tableau ingredients
// //             this.lesingredients = argument;

// //             // on fait un cumul pour ajouter à 5 +1EURO pour chaque ingredient en plus
// //             let i= 0;
// //             for (y of argument){
// //                 i++;
// //             }
// //             // nbingredient = argument.ingredients.length;
// //             this.prix =i + 5;

// //         }else{
// //             for (valeur of this.lesburgers){
// //                 // on cherche le nom du burger dans le tableau
// //                 if (argument == valeur.nom){

// //                     // une assignation
// //                this.lesingredients=[valeur.ingredients];

// //                this.prix = valeur.prix;

// //                 }
// //             }
// //         }

// // console.log(this.lesingredients);
// // console.log(this.prix);

// // },

// // // on ajourte un burger
// // addburger : function(argument){
// //     this.lesburgers.push(argument);
// //     console.log(this.lesburgers);
// // }
// // }

// // for (nom in tbburger){
// //     console.log(nom);
// // }

// // //  api renvoi du json, on se balade dans des tableaux d'objet

// // // objet burger
