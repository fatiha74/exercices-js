



// let voiture = {
//     // on initialise les feux à l'étape 1
//     couleur: 'rouge',
    
// // Étape 1 : créer une méthode qui change la couleur de la voiture en changeant également la couleur dans l'objet

//     set changecouleur(couleur){

//         // this.couleur = couleur;
//         //  document.querySelector('.element').style.background = couleur;
//          let morceaux = document.querySelectorAll('.element')
        
//          morceaux.forEach(morceau => {
//             morceau.style.background = couleur;

//          });
        
//     },
//     // Étape 2 : Créer une méthode qui permet de dupliquer la voiture

//     set clone (num){
//     // clone : function {



//     let idCarte = 3;

// //  onajoute un ecouteur d'event au click sur la classe create
//  document.querySelector('.create').addEventListener('click', function(e){

//     // on recupere la premiere carte
//     let lavoiture = document.querySelector('.voiture');

//     console.log(lavoiture);

//     // on clone cette carte
//     let dolly = lavoiture.cloneNode(true);

//     // on change la source de l'image du clone en fonction de la variable idCarte
//     // dolly.querySelector('img').src = `https://picsum.photos/id/${idCarte}/300/300`;
    
//     // on insert le clone dans l'élément cards juste avant l'élément create
//      document.querySelector('.cards').insertBefore(dolly,document.querySelector('.create'));
    
//     // on incrémente idCarte afin de ne pas avoir deux fois la même image
//     // idCarte++;
//  })
// }
    //  leclone : function(){

    //      voiture.assign(, ...sources)

    //  }

// }

// voiture.changecouleur = 'blue';

// voiture.clone();



// console.log(voiture);



// correction  kevin
 let usine = {

    // on defini la couleur par defaut de notre voiture
couleur: 'blue',

// on creer une jmethode qui changera notre couleur
// changerCouleur : function(newcolor){

//     // on change la valeur de l'attribut couleur de notre voiture
//     this.couleur= newcolor;

// // on recupere tous les elements de notre voiture
// let elements = document.querySelectorAll('.voiture:nth-child(1) .element');
// // let elements = document.querySelectorAll('.voiture:first-child .element');
// // let childNode = node.firstChild;

// // pour chaque element on change la couleur de background en fonction de l'attribut couleur
// elements.forEach(element => {

//     element.style.backgroundColor = this.couleur;
//     console.log(this.couleur);

//  });
// },
// on creer une jmethode qui changera notre couleur
// Étape 5 : On ajoute la possibilité de changer la couleur de la voiture X
changerCouleurFatiha : function(newcolor, numvoiture = 1){

    // on change la valeur de l'attribut couleur de notre voiture
    this.couleur = newcolor;

    let voitures = document.querySelectorAll('.voiture');
    // dans le tableau index commence à 0
     voiture = voitures[numvoiture - 1]

// on recupere tous les elements de notre voiture
  
     let elements = document.querySelectorAll('.element');
    // let childNode = node.firstChild;

    // pour chaque element on change la couleur de background en fonction de l'attribut couleur
    elements.forEach(element => {

        element.style.backgroundColor = this.couleur;
        console.log(this.couleur);

    });
    },
    changerCouleur : function(newColor, posVoiture = 0){
        this.couleur = newColor;

        let elements ;
        // on récupère tous les élements de notre voiture
        if (posVoiture <= 0) {
            elements = document.querySelectorAll('.voiture:nth-child(1) .element');
        }else {
            elements = document.querySelectorAll(`.voiture:nth-child(${posVoiture}) .element`);
        }

     // pour chaque élement on change la couleur de background en
        // fonction de l'attribut couleur
        elements.forEach(element => {
            element.style.backgroundColor = this.couleur;
        });
    },



    




// changerCouleur : function(newcolor, posVoiture = ){

//         // on change la valeur de l'attribut couleur de notre voiture
//         this.couleur= newcolor;
    
//     // on recupere tous les elements de notre voiture
//     let elements = document.querySelectorAll(`è`.voiture:nth-child(1) .element');
//     // let elements = document.querySelectorAll('.voiture:first-child .element');
//     // let childNode = node.firstChild;
    
//     // pour chaque element on change la couleur de background en fonction de l'attribut couleur
//     elements.forEach(element => {
    
//         element.style.backgroundColor = this.couleur;
//         console.log(this.couleur);
    
//      });
//     },

    //
    //  Étape 6 :  onajoute une voiture à la position X du parking avec la couleur désirée (création dune nouvelle méthode)
 
    createCar : function(carColor, carPos){

//    on selectionne toutes les voitures afin de connaitre le nombre de voitures existantes
        let voitures = document.querySelectorAll('.voiture');
        // on recupere la premiere voiture pour la dupliquer
        let voiture = document.querySelector('.voiture:nth-child(1)');
        // on creer un clone de la voiture
        let clone = voiture.cloneNode(true);
        // on selectionne le parking afin d'y ajouter les noveaux elements
        let parking = document.querySelector('.parking');
        // this.couleur = lacouleur;

        // on selectionne tous les elements de notre copie
        let elements = clone.querySelectorAll('.element');

 // pour chaque élement on change la couleur de background en
    // fonction de l'attribut couleur
    elements.forEach(element => {
        element.style.backgroundColor = carColor;
    });

// si la position n'est pas disponible on l'ajoute à la fin de l'element parking
    if(voitures.length < carPos){
        parking.append(clone);
        // sinon on l'ajoute à la position 
    }else{
        parking.insertBefore(clone, document.querySelector(`.voiture:nth-child(${carPos})`));
    }
        // on insert juste avant element laposition+1
        //puis on l'insert après le dernier enfant de l'element parking
        //  document.querySelector('.parking').insertBefore(clone);
        //  document.querySelector('.parking').insertBefore(clone,document.querySelector(`.voiture:nth-child(${laposition}));
 

            //   on selectionne le premier element qui possede la classe

            
// puis on l'insert après le dernier enfant de l'element parking
        // document.querySelector('.parking').append(clone);
        // changer couleur
            // this.changerCouleur(lacouleur);
        // inserer

        

    },

// ******************************************************
// correction kevin

// dupliquer : function(){
    // on selectionne le premier element qui possede la classe
    //  let lavoiture = document.querySelector('.voiture');
        // console.log(lavoiture);
    
        // on creer un clone de la voiture
        // let clone = lavoiture.cloneNode(true);
        
// puis on l'insert après le dernier enfant de l'element parking
        // document.querySelector('.parking').append(clone);
    // 
// }
// ********************************************************


// Étape 2 : Créer une méthode qui permet de dupliquer la voiture
// on definit une valeur d'attribut par defaut en ajoutant = 

 dupliquer : function(posvoiture = 0){

let voiture='';

    if(posvoiture == 0){
        // on selectionne le premier element qui possede la classe voiture

        voiture = document.querySelector('.voiture');
    }else{
        let voitures = document.querySelectorAll('.voiture');
        // dans le tableau index commence à 0
         voiture = voitures[posvoiture - 1]
    }
        // on creer un clone de la voiture
        let clone = voiture.cloneNode(true);

        //puis on l'insert après le dernier enfant de l'element parking
         document.querySelector('.parking').append(clone);
},

// Étape 6 : On ajoute une voiture à la position X du parking avec la couleur désirée (création d'une nouvelle méthode)

 }



