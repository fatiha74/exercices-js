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
//   laverlelinge: function () {},
// };
let distributeur = {
  allumee: false,
  articlechoisi : 0,
  elements: {
    liquide: {
      coca: { prix: 3, qte: 2, codeproduit: 0 },
      fanta: { prix: 3, qte: 8, codeproduit: 0 },
      badoit: { prix: 3, qte: 6, codeproduit: 0 },
    },
    solide: {
      chips: { prix: 2.5, qte: 7, codeproduit: 0 },
      mars: { prix: 3, qte: 1, codeproduit: 0 },
      snickers: { prix: 3, qte: 5, codeproduit: 0 },
    },
  },

  remplir: function (tableau) {
    // rempli le distributeur de 10 elements
    console.log(tableau);

    // pour les elements liquide
    for (const property in this.elements.liquide) {
      console.log("property : " + property);
      console.log("tableau longueur" + tableau.length);
      console.log("tableau[]" + tableau[1].length);

      for (let index = 0; index < tableau.length; index++) {
        for (let index2 = 0; index2 < tableau[index].length; index2++) {
          if (tableau[index][index2].includes(property)) {
            console.log("dans le 1ER if");

            this.elements.liquide[property].qte += 10;
          }
        }
      }
    }
    // pour les elements solide
    for (const property in this.elements.solide) {
      // pour chaque objet
      console.log(property);

      // index pour pour savoir 0 ou 1
      for (let index = 0; index < tableau.length; index++) {
        // l'interieur du tableau
        for (let index2 = 0; index2 < tableau[index].length; index2++) {
          if (tableau[index][index2].includes(property)) {
            console.log("dans le 2eme if");

            this.elements.solide[property].qte += 10;
          }
        }
      }
    }
  },
  allumerledistributeur: function () {
    let tabrand = [];

    // je parcours tous les objets liquide
    for (const property in this.elements.liquide) {
      // console.log(property);

      do {
        random = Math.round(Math.random() * (150 - 100) + 100);
      } while (tabrand.includes(random));

      tabrand.push(random);
      this.elements.liquide[property].codeproduit = random;
    }

    // je parcours tous les objets solide
    for (const property in this.elements.solide) {
      do {
        random = Math.round(Math.random() * (150 - 100) + 100);
      } while (tabrand.includes(random));

      tabrand.push(random);
      this.elements.solide[property].codeproduit = random;
    }

    this.allumee = true;
  },



  // get pour afficher tous les produits avec leur code
  get afficherlesproduits() {
    // version 1
    // for (const valliquide in this.elements.liquide) {
    //   console.log(
    //     `article n° ${this.elements.liquide[valliquide].codeproduit} : ${valliquide}`
    //   );
    // }

    // for (const valsolide in this.elements.solide) {
    //   console.log(
    //     `article n° ${this.elements.solide[valsolide].codeproduit} : ${valsolide}`
    //   );
    // }

    // version 2
    for (const value in this.elements) {
      for (const val in this.elements[value]) {
        console.log(
          `article n° ${this.elements[value][val].codeproduit}  : ${val}`
        );
      }
    }
  },

  commander: function (lecode) {
    for (const value in this.elements) {
      for (const val in this.elements[value]) {
        if (this.elements[value][val].codeproduit == lecode)
          console.log(
            `article n° ${this.elements[value][val].codeproduit}  : ${val} ${this.elements[value][val].prix}`

          
          );
            this.articlechoisi = lecode;
        // return `article n° ${this.elements[value][val].codeproduit}  : ${val} ${this.elements[value][val].prix}`
       
      }
    }


  },
  ajouterunepiece: function (piece, mycallback) {
    // le code choisi
    this.articlechoisi

    console.log(`article n° ${this.elements[value][val].prix}  : ${val}`);
    console.log(
      `article n° ${this.elements[value][val].codeproduit}  : ${val} ${this.elements[value][val].prix}`
    );
    if(this.prix == piece){
      console.log('ok')
    }else if(this.prix > piece)
    {
    }else{
      this.prix -= piece;
      ''
    }
  },

  
  preparercommande: function () {
    // qd prix ok 

  },
  seservir: function () {

  },
  deverouiller: function () {

  },
  eteindredistributeur: function () {
    // remet à zero les codes produits
    setTimeout(() => {
      console.log('distributeur eteint')
    }, 3000);
  },
  check: function () {

  }

};
