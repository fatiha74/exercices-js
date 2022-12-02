// let content = document.querySelector('.container .content');

// let paragraphe = content.querySelector('p');
// console.log(paragraphe);
// paragraphe.innerText ="nouveau texte"

// // avoir que le texte sans la balise
// console.log(paragraphe.innerText);
// // remplacement
// content.innerHTML = "<button>nouveau texte";

// content.append('<div> coucou </di>')



// let content = document.querySelector('.container .content');
// let paragraphe = content.getElementById('p');



// // query selector All
// let elements =document.querySelectorAll('.content')
// console.log(element);


// // elements[1] => premier element
// elements.forEach(element => {
//     // on recupere le html qui a deja
//     currentContent =element.innerHTML;
//     element.innerHTML ='<p> salut tarek</p>';
//     element.append(currentContent);
// });

// objet
// let eleves = [ 
//     {nom : 'lenom', prenom:'fatiha'},
//     {nom : 'lenom', prenom:'steph'},
//     {nom : 'lenom', prenom:'sarah'},
//     {nom : 'lenom', prenom:'audrey'},
//     {nom : 'lenom', prenom:'imane'}
// ]

// eleves.forEach(eleve => {
    
//     console.log(eleve.prenom);
// });


// EXERCICE 1
// version 1
//  let feu_tricolore = {

//     feu1 : 'rouge',
//     feu2 : 'vert',
//     feu3 : 'rouge',
//     feu4 : 'vert',

//     // on commence à l'etape 1
//     etape: 0,
//     etapeSuivante : function(){
//         this.etape ++;
//         if (this.etape == 1) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'vert';
//             this.feu3 = 'rouge';
//             this.feu4 = 'vert'
          
//         }
//         if (this.etape == 2) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'orange';
//             this.feu3 = 'rouge';
//             this.feu4 = 'vert'
          
//         }
//         if (this.etape == 3) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'rouge';
//             this.feu3 = 'rouge';
//             this.feu4 = 'orange'
          
//         }
//         if (this.etape == 4) {
//             this.feu1 = 'vert';
//             this.feu2 = 'rouge';
//             this.feu3 = 'vert';
//             this.feu4 = 'rouge'
          
//         }
//         if (this.etape == 5) {
//             this.feu1 = 'orange';
//             this.feu2 = 'rouge';
//             this.feu3 = 'vert';
//             this.feu4 = 'rouge'
          
//         }
//         if (this.etape == 1) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'rouge';
//             this.feu3 = 'orange';
//             this.feu4 = 'rouge'
          
//         }
//         return`feu 1 ${this.feu1}, feu 2 ${this.feu2}, feu 3 ${this.feu3}, feu 4 ${this.feu4}`;


//     }
// }

// EXERCICE 1
// VERSION 2



    //  "feux1 : ['rouge','rouge','rouge','rouge','vert','orange'],
    // feux2 : ['rouge','rouge','rouge','rouge','vert','orange'],
    // feux3 : ['rouge','rouge','rouge','rouge','vert','orange'],
    // feux4 : ['rouge','rouge','rouge','rouge','vert','orange'],

    // feux : [feux1,feux2,feux3,feux4],


    // etape1 : []
    // feux1 : ''


// // VERSION LA MIENNE
//       let feu_tricolore = {

//     array1 : ['rouge','vert','rouge','vert'],
//     array2 : ['rouge','orange','rouge','vert'],
//     array3 : ['rouge','rouge','rouge','orange'],
//     array4 : ['vert','rouge','vert','rouge'],
//     array5 : ['orange','rouge','vert','rouge'],
//     array6 : ['rouge','rouge','orange','rouge'],
    
 

//       i : 1,

// etapeSuivante : function(){

//      if( this.i == 7 ){
//         this.i=1;
//      }
// let numero = this.i;

//  console.log(`feu 1 ${eval(`this.array${numero}[0]`)},feu 1 ${eval(`this.array${numero}[1]`)}, feu 1 ${eval(`this.array${numero}[2]`)}, feu 1 ${eval(`this.array${numero}[3]`)}`);
// //  feux2 ${this.array[1]}, feux3 ${this.array[2]}, feux4 ${this.array[3]}

//  this.i ++;
//      }
    
// }

// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();
// feu_tricolore.etapeSuivante();

// VERSION KEVIN
// let feu_tricolor = {
//     // on initialise les feux à l'étape 1
//     feu1: 'rouge',
//     feu2: 'vert',
//     feu3: 'rouge',
//     feu4: 'vert',
//     // on commence à l'étape 1
//     etapeActuel: 0,
//     // on défini un tableau contenant toutes les étapes
//     etapes: [
//         ['rouge','rouge','rouge','vert','orange','rouge'],
//         ['vert','orange','rouge','rouge','rouge','rouge'],
//         ['rouge','rouge','rouge','vert','vert','orange'],
//         ['vert','vert','orange','rouge','rouge','rouge'],
//     ],
    
//     etapeSuivante: function () {
//         // si nous avons dépassé la dernière étape on reviens à la première
//         if (this.etapeActuel == 6) {
//             this.etapeActuel = 0;
//         } 

//         // on met à jours les feu en fonction de l'étape actuelle
//         this.feu1 = this.etapes[0][this.etapeActuel];
//         this.feu2 = this.etapes[1][this.etapeActuel];
//         this.feu3 = this.etapes[2][this.etapeActuel];
//         this.feu4 = this.etapes[3][this.etapeActuel];

//         //on passe à l'étape suivante 
//         this.etapeActuel++;

//         return `feu 1 : ${this.feu1} feu 2 : ${this.feu2} feu 3 : ${this.feu3} feu 4 : ${this.feu4}`;

//     },
//     // on créer la méthode pour passer à l'étape suivante (version simple)
//     etapeSuivante1: function () {

//         this.etapeActuel++;

//         // si nous sommes à l'étape 1 
//         if (this.etapeActuel == 1) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'vert';
//             this.feu3 = 'rouge';
//             this.feu4 = 'vert';
//         }

//         // si nous sommes à l'étape 1 
//         if (this.etapeActuel == 2) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'orange';
//             this.feu3 = 'rouge';
//             this.feu4 = 'vert';
//         }

//         // si nous sommes à l'étape 1 
//         if (this.etapeActuel == 3) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'rouge';
//             this.feu3 = 'rouge';
//             this.feu4 = 'orange';
//         }

//         // si nous sommes à l'étape 1 
//         if (this.etapeActuel == 4) {
//             this.feu1 = 'vert';
//             this.feu2 = 'rouge';
//             this.feu3 = 'vert';
//             this.feu4 = 'rouge';
//         }

//         // si nous sommes à l'étape 1 
//         if (this.etapeActuel == 5) {
//             this.feu1 = 'orange';
//             this.feu2 = 'rouge';
//             this.feu3 = 'vert';
//             this.feu4 = 'rouge';
//         }

//         if (this.etapeActuel == 6) {
//             this.feu1 = 'rouge';
//             this.feu2 = 'rouge';
//             this.feu3 = 'orange';
//             this.feu4 = 'rouge';
//             this.etapeActuel = 0;
//         }



//         return `feu 1 : ${this.feu1} feu 2 : ${this.feu2} feu 3 : ${this.feu3} feu 4 : ${this.feu4}`;

//     }
// }

// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());

let burger = {
    prix : 5,
    ingredients : ['tomate', 'oignon','pain','steack'],
    nom : "le black and white"
}

// exercice 2 
// solution
// chevre, berger tout seul, le loup, chevre, chou, berger, chevre
let enigme = {
    riveGauche : ['berger','loup','chevre','chou'],
    riveDroite : [],

    // permet de deplacer un/deux elements d'un tableau à un autre
    traverser : function(matelot = 0){

        // on check si le berger est dans le tableau riveGauche
        let bergerIsLeft = this.riveGauche.includes('berger');
        
        // on check si le matelot est dans le tableau riveGauche
        let matelotIsLeft = this.riveGauche.includes(matelot);

        // console.log(this.riveGauche.includes('berger'));
        // console.log(this.riveGauche.includes(matelot));

// si rive gauche il vont a droite et qu'il y a un matelot
// si un parametre à ete donné dans la methode et si le berger  est à gauche et que le matelot aussi

        if (bergerIsLeft && matelotIsLeft && matelot!= 0){
            
        //   d'abord supprimer
        // pb avec index bien rechercher le berger puis le supprimer, puis chercher le matelot et le supprimer

     let indexMatelot = this.riveGauche.indexOf(matelot);
     this.riveGauche.splice(indexMatelot,1)


            let indexBerger = this.riveGauche.indexOf('berger');
            // puis on supprime le berger dans ce tableau
             this.riveGauche.splice(indexBerger,1)
           

            // on supprime dans tab rive gauche
            // on supprime avec l'index qu'on a recuperer
            // splice on donne l'(index, combien d'element a suprimer)
        
           

            // on met dans le tableau rive droite
            // on leur fais traverser la rive (ajout des element dans le tableau rive droite)
            this.riveDroite.push('berger', matelot);


            // console.log(indexBerger);
            // console.log(indexMatelot);
        // console.log(` gauche --> droite, Tableau gauche : ${this.riveGauche}`);
        // console.log(` gauche --> droite, Tableau droite : ${this.riveDroite}`);
        // sinon ils sont à droite il passe à gauche et il y a un matelot
        }else if (!bergerIsLeft && !matelotIsLeft && matelot != null ){
            
            let indexMatelot = this.riveDroite.indexOf(matelot);
            this.riveDroite.splice(indexMatelot,1)
          
            let indexBerger = this.riveDroite.indexOf('berger');
           this.riveDroite.splice(indexBerger,1);
            // on supprime dans tab rive gauche
            // on supprime avec l'index qu'on a recuperer
            // splice on donne l'(index, combien d'element a suprimer)
            
            

            // on met dans le tableau rive droite
            this.riveGauche.push('berger', matelot);


            // console.log(indexBerger);
            // console.log(indexMatelot);

            // console.log(`droite --> gauche,  Tableau gauche : ${this.riveGauche}`);
            // console.log(`droite --> gauche,  droiteTableau droite : ${this.riveDroite}`);
        // si il est a gauche et il n'y a pas de matelot
        }else if(bergerIsLeft && matelot == 0 ){

            // si aucun argument n'est donné et que le berger est à gauche

            // on recupere l'emplacement
            let indexBerger = this.riveGauche.indexOf('berger');

            // puis on supprime le berger dans ce tableau 
            this.riveGauche.splice(indexBerger,1);

            // on fais traverser le berger
            this.riveDroite.push('berger');
            // console.log(`berger tout seul, gauche --> droite, Tableau gauche : ${this.riveGauche}`);
            // console.log(` berger tout seul, gauche --> droite, Tableau droite : ${this.riveDroite}`);
        }
        // si il est a droite et il n'y a pas de matelot
        else if(!bergerIsLeft && matelot == 0){

            // meme chose que le if précédent mais pour la rive droite
                let indexBerger = this.riveDroite.indexOf('berger');
                this.riveDroite.splice(indexBerger,1)
                this.riveGauche.push('berger');
                // console.log(`berger tout seul, droite --> gauche,  Tableau gauche : ${this.riveGauche}`);
                // console.log(`berger tout seulj, droite --> gauche,  droiteTableau droite : ${this.riveDroite}`);

        }
        // this.animalOuLegume = animalOuLegume;
        // this.riveDroite.push(animalOuLegume);
        // this.riveDroite.push(animalOuLegume);
        // console.log(this.riveDroitel);
        // return this.riveDroite;


        //  on appelle la methode dans l'objet 
        this.verifierRive()
        },
    // initialisation remet les protagoniste à gauche et on les enleve de droite
   reinit : function() {
    
    this.riveGauche = ['berger','loup','chevre','chou'],
    this.riveDroite = []
   },

   get afficher(){

    // 
    return `rive Gauche ${this.riveGauche}  et rive Droite ${this.riveDroite}`;

   },
   verifierRive : function(){

//  on verifie si tous le monde est à gauche
    let isrgchevre = this.riveGauche.includes('chevre');
    let isrgloup = this.riveGauche.includes('loup');
    let isrgchou = this.riveGauche.includes('chou');
    let isrgberger = this.riveGauche.includes('berger');

//   si pas rive droite 

    // le loup et la chevre
    // si chevre loup et pas le berger a gauche

// on verifie si le loup la chevre sont seul sans le berger
if((isrgchevre && isrgloup && !isrgberger) || (!isrgchevre && !isrgloup && isrgberger)){
    alert('Attention le loup a mangé la chèvre ')
    // on reinitialise le jeu
    this.reinit();
}

// si chevre chou et pas berger a gauche
// on verifie si le chou la chevre sont seul sans le berger
if((isrgchevre && isrgchou && !isrgberger) || ( !isrgchevre && !isrgchou && isrgberger)){
    alert('Attention la chèvre à mangé le chou')
    // on reinitialise le jeu
    this.reinit();
}

// on verifie si tout le monde est à droite
if(!isrgchevre && !isrgchou && !isrgloup && !isrgberger){
    alert("c'est gagné")
}
// //    si chevre et loup a gauche et berger à gauche
//     if(!isrgchevre && !isrgloup && isrgberger){
//         console.log('Attention loup a mangé la chèvre ')
//         // on reinitialise le jeu
//     this.reinit();
//     }
    
//     //    si chevre et chou a gauche et berger à gauche
//     if(!isrgchevre && !isrgchou && isrgberger){
//         console.log('Attention chèvre à mangé le  chou')
//         // on reinitialise le jeu
//     this.reinit();
//     }

    // la chevre et le chou
    
   }

}

// console.log(enigme.afficher);






    // verifierRives : function () {
       
    //     if(this.riveDroite.includes('chevre') && this.riveDroite.includes('loup')){


    //         console.log(' Perdu , on initialise ')
    //     }
        

     

    //  if(this.riveDroite.includes('chevre') && this.riveDroite.includes('chou')){

    //     console.log(' Perdu , on initialise ')
    //  }
        

    // }



   
//         let leMatelot = this.riveDroite.includes(matelot);

//         if(loup && chevre){
//             console.log('loup et chevre ensemble !!!!!!');
//         }
//     else{
//         console.log('ok');

//     }

//     if(chevre && chou){
//         console.log('loup et chevre ensemble !!!!!!')
//     }else{
//         console.log('ok');
//     }
// }

// }

// enigme.traverser ='chevre';

// console.log(enigme.traverser);









// let voiture = {
//     carburant :'hydrogene',
//     couleur:'rouge',
//     modele : 'BMW',
//     reservoir : 40,
//     kilometrage :0,
//     avancer:function(){
//         this.kilometrage +=2;
//         this.reservoir--;
//     },
//     faireLePlein:function(){
//         this.reservoir = 40;
//     },

//     // setter => set definir une valeur
//     set peindre(couleur){
//         this.couleur = couleur;
//     },
//     // getter => Get récuperer une valeur
//     get carteGrise (){
//         return `votre voiture est une ${this.modele} ${this.couleur} qui utilise de ${this.carburant}
//     }
// }


// // on ne fait jamais ça
// // voiture.reservoir = 80;
// // on passe toujours par des fonctions

// // console.log(voiture);
// voiture.avancer();

// console.log(voiture);

// voiture.peindre ='jaune';
// console.log(voiture);


// console.log(voiture.carteGrise);

//  console.log(Object.keys(voiture));



// console.dir(voiture);
// // 

// // heritage meme objet plus une valeur en plus toit ouvrant , il herite de toutes les propieté de voiture plus une fonctionnalité à elle, option differente

// let titine = Object.create(voiture,{
//     toitOuvrant : {
//         value : true
//     },
    
//         couleur :{
//             value : 'jaune'

//         }
  
// });

// let siri = Object.create(voiture,{
//     optionSport : {
//         value:true
//     }
// })

// console.log(titine.couleur);

// console.log(titine);

// titine.avancer();
// titine.avancer();
// titine.avancer();
// titine.avancer();

// siri.avancer();
// siri.avancer();

// console.log(titine);
// console.log(siri);
























// // constructeur

// const car = function(make,speed){
//     this.make = make;
//     this.speed = speed;

// }

// //  cree une instance
// const voiture1 = new car('bmw', 120);
// console.log(voiture1);

// const voiture2 = new car('volswagen', 95);
// console.log(voiture2);



// car.prototype.acceleration = function(){
 
//     // console.log(this.speed + 10);
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)


// }

// car.prototype.ralentir = function(){
   
//     // console.log(this.speed - 5);
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }


// voiture1.acceleration();
// voiture1.acceleration();
// voiture1.ralentir();
// // console.log(car.prototype);

// // console.log('voiture1 : '+voiture1.ralentir()+' voiture2 '+voiture2)
