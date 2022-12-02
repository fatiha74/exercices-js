// let url = 'https://randomuser.me/api';

//  let url = 'https://randomuser.me/api/?results=100';
let url = "https://api.open-meteo.com/v1/forecast?latitude=46.19&longitude=6.24";

//on envoie une requete à l'url, on fait une requete
fetch(url)
  // nous retourne une promesse soit resolve soit reject

  // si la reponse est resolve si tout c'est bien passé

  // on met la reponse sous forme d'un objet
  .then((response) => response.json())

  // .then(function(data){
  //   console.log(data);
  //   console.log(data)

  //   // for(i=0; i<100;i++){
  //   //      console.log(data.results[i].name.first + " " + data.results[i].name.last)

  //   // }
  //   for( const value of data.results){

  //     console.log(value.name.first + " " + value.name.last)

  //   }

  // })

  .then(function (data) {
    console.log(data.precipitation);
    console.log(data);

    // for(i=0; i<100;i++){
    //      console.log(data.results[i].name.first + " " + data.results[i].name.last)

    // }
    // for (const value of data.results) {
    // document.body.innerHTML +=
    //   '  <div class="card"><img src=' +
    //   value.picture.large +
    //   ' alt="Avatar" style="width:100%"><div class="container"><h4><b>' +
    //   value.name.first +
    //   " " +
    //   value.name.last +
    //   "</b></h4><p>" +
    //   value.registered.age +
    //   "</p></div></div> <br>";

    // console.log(value.name.first + " " + value.name.last);

    // }


    // for (const value of data.results) {

    //   let card = document.querySelector("#card_temp").content.querySelector(".card").cloneNode(true);

    //   card.querySelector('h4').textContent = value.name.last;

    //   // card.querySelector('img src').textContent= value.name.last;

    //   card.querySelector("img").setAttribute("src", user.picture.large);

    //   //name
    //   let fullName = `${user.name.first} ${user.name.last}`;
    //   card.querySelector(".card_name").textContent = fullName;

    //   //age
    //   card.querySelector(".card_age").textContent = `Age: ${user.dob.age}`;

    //   document.body.append(card);




    // }



    // on creer un clone de la card
    // let clone = card.cloneNode(true);

    // let cards = document.querySelectorAll('.card');
    // **********************************************************************
    // let voitures = document.querySelectorAll('.voiture');
    // // on recupere la premiere voiture pour la dupliquer
    // let voiture = document.querySelector('.voiture:nth-child(1)');
    // // on creer un clone de la voiture
    // let clone = voiture.cloneNode(true);
    // // on selectionne le parking afin d'y ajouter les noveaux elements
    // let parking = document.querySelector('.parking');
    // // this.couleur = lacouleur;

    // // on selectionne tous les elements de notre copie
    // let elements = clone.querySelectorAll('.element');
    // ******************************************************************************


  }
  )




  // card html
  // .then(function name(response){
  // console.log(response)
  // console.log(response.ok)
  // console.log(response.json())

  // })
  //  si la reponse est reject , si ya un probleme ça c'est pas bien passé
  .catch(function (error) {
    console.log(error);
    console.log("url mauvaise");
    // peut etre l'u
  });

// let barbecue = {

// etatmerguez : "crue",
// sorti : false,

// cuiremerguez : function(){

//     setTimeout(() => {
//         this.etatmerguez = "cuite";
//         alert("utiliser la methode ' sortirmerguez()' ");
//     }, 10000);

//     // setTimeout(() => {

//     //     if(this.sorti){
//     //         alert("bon ap");
//     //     }else{
//     //         this.etatmerguez = "cramé";
//     //     alert("cramé!!!! ");
//     //     }
//     // }, 15000);

//     setTimeout(() => {

//         if(this.etatmerguez == ""){
//             alert("bon ap");
//         }else{
//             this.etatmerguez = "cramé";
//         alert("cramé!!!! ");
//         }
//     }, 15000);

// },

// sortirmerguez : function(){
//     this.etatmerguez = "";
//     // this.sorti = true;
// },

// ajoutermerguez : function(){

//     this.etatmerguez = "crue";

//     this.cuiremerguez();
// }

// }

// // ex distributeur automatique
// let machinealaver = {
//   estverouillee: false,
//   contenu: [],

//   laverlelinge: function () {
//      this.estverouillee = false;

//     setTimeout(() => {

//       //  this.estpropre = true;
//       for (const valeur of this.contenu) {
//         valeur.estPropre=true;
//       }
// // this.estverouillee = false;
// console.log('coucou');
//     }, 15000);
//   },
// };

// let caravane = {
//   tiroir: [],
//   penderie: [],
//   etagere: [],
//   panierlingesale: [],
//   machinealaver: Object.create(machinealaver),
//   rangerlelinge: function (tableau) {

//     for (const valeur of tableau) {
//       console.log("tableau" + valeur.nom);
//       console.log("propre" + valeur.estPropre);

//       if (valeur.estPropre) {

//         switch (valeur.type) {
//           case "chaussette":

//             // this.tiroir.push(valeur.nom);
//             this.tiroir.push(valeur);
//             break;
//           case "tee-shirt":
//             // penderie
//             this.penderie.push(valeur);
//             break;
//           default:
//             // etagere pour les jeans
//             this.etagere.push(valeur);
//         }

//       } else {
//         this.panierlingesale.push(valeur);
//       }
//     }

//   },

//   lancerlamachine : function(){
//     if(!this.machinealaver.estverouillee){
// // console.log(this.panierlingesale)
//       for (const valeur of this.panierlingesale) {

//          this.machinealaver.contenu.push(valeur);

//       }
//       this.panierlingesale=[];
//       // console.log(this.machinealaver.contenu)
//         caravane.machinealaver.laverlelinge()

//   }
// },
// viderlamachine : function(){
// if(!this.machinealaver.estverouillee){
//   console.log('hi')
//   for (const valeur of this.machinealaver.contenu) {

//     switch (valeur.type) {
//       case "chaussette":

//         // this.tiroir.push(valeur.nom);
//         this.tiroir.push(valeur);
//         break;
//       case "tee-shirt":
//         // penderie
//         this.penderie.push(valeur);
//         break;
//       default:
//         // etagere pour les jeans
//         this.etagere.push(valeur);

//     }

//   }

//     this.machinealaver.contenu=[];
//  console.log('contenu' + this.machinealaver.contenu);
// }
// }
// };

// let linges = [
//   {
//     nom: "laitvis",
//     estPropre: true,
//     type: "jean",
//   },
//   {
//     nom: "de nîmes",
//     estPropre: false,
//     type: "jean",
//   },
//   {
//     nom: "kaparole",
//     estPropre: true,
//     type: "jean",
//   },
//   {
//     nom: "saperdry",
//     estPropre: false,
//     type: "tee-shirt",
//   },
//   {
//     nom: "nike-l",
//     estPropre: false,
//     type: "tee-shirt",
//   },
//   {
//     nom: "hard rap cofee",
//     estPropre: true,
//     type: "tee-shirt",
//   },
//   {
//     nom: "nazeA",
//     estPropre: true,
//     type: "tee-shirt",
//   },
//   {
//     nom: "pumba",
//     estPropre: true,
//     type: "chaussette",
//   },
//   {
//     nom: "nike-l",
//     estPropre: false,
//     type: "chaussette",
//   },
//   {
//     nom: "ribok",
//     estPropre: false,
//     type: "chaussette",
//   },
//   {
//     nom: "filo",
//     estPropre: true,
//     type: "chaussette",
//   },
//   {
//     nom: "le poulet sportif",
//     estPropre: true,
//     type: "chaussette",
//   },
// ];

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
