// // // LES CLASSES façon JSON
// // let object = {
// //   rond: true,
// //   couleur: "red",
// // };
// // // class = creation d'une class
// // // voiture = nom de ma nouvelle class
// // class voiture {
// //   constructor(couleur, marque) {
// //     // sans recuperer l'attribut
// //     this.couleur = couleur;
// //     this.marque = marque;
// //     this.modele = "207";
// //     this.kilometrage = 0;
// //     this.reservoir = 0;
// //     this.reservoircapacite = 40;
// //   }
// //   // on ne met pas de virgule
// //   remplir(qte) {
// //     this.reservoir = qte;
// //     if (this.reservoir + qte > this.reservoircapacite) {
// //       console.log("trop grosse quantité");
// //     } else {
// //       this.reservoir += qte;
// //     }
// //   }
// // }

// // // Creation avec le constructeur de classe
// // let voitureRouge = new voiture("rouge", "fiat");
// // let voitureJaune = new voiture("jaune", "fiat");
// // voitureRouge.remplir(40);

// // console.log(voitureRouge);

// class voiture {

//   // constructor(modele, couleur= "grise") { si on veut donner une couleur par defaut
//   constructor(modele, couleur ='container',reservoir=10) {
//     // sans recuperer l'attribut
//     this.couleur = couleur;
//     this.modele = modele;
//     this.marque = 'peugeot';
//     this.kilometres = 0;
//   }

//   set peindre (couleur){

// this.couleur = couleur;
//   }

//   // pas de virgule
//   avancer() {
//     this.kilometres += this.kilometres;
//   }
// }

// let ma_207 = new voiture("rouge", '207');


// ma_207.avancer(49);
// ma_207.peindre = 'vert';
// console.log(ma_207);

// class peugeault extends voiture{

//   constructor(modele,couleur='container', reservoir){
//     // on appelle constructeur du parents
//     super(modele,couleur ="container",reservoir =10)
//     this.marque = 'peugeault';

//   }
//   // surcharge de methode
//   avancer(kilometres){
//     this.kilometre -= kilometres;
//   }
//   avancerParent(kilometres){
//     super.avancer(kilometres);
//   }

// }

// let ma_207_renault = new peugeault('clio 209');
// console.log(ma_207_renault);

// let ma_209_peugeault = new peugeault('clio 209');
// console.log(ma_209_peugeault);
// ma_209_peugeault.avancer(49);

//  carousel
//  content class carousel
class carousel(){

  constructor(container,nbslide,temps){
    
  }
}
