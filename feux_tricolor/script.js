let feu_tricolor = {
    // on initialise les feux à l'étape 1
    feu1: 'rouge',
    feu2: 'vert',
    feu3: 'rouge',
    feu4: 'vert',
    // on commence à l'étape 1
    etapeActuel: 0,
    changerfeu:function (feu1, feu2, feu3,feu4){
        this.feu1 = feu1;
        this.feu2 = feu2;
        this.feu3 = feu3;
        this.feu4 = feu4;

    },
    
    // *******************************************************
    // si on veut faire dans un tableau sans le css
    // *******************************************************
    // on défini un tableau contenant toutes les étapes
    // etapes: [
    //     ['rouge','rouge','rouge','vert','orange','rouge'],
    //     ['vert','orange','rouge','rouge','rouge','rouge'],
    //     ['rouge','rouge','rouge','vert','vert','orange'],
    //     ['vert','vert','orange','rouge','rouge','rouge'],
    // ],
    
    // etapeSuivante: function () {
    //     // si nous avons dépassé la dernière étape on reviens à la première
    //     if (this.etapeActuel == 6) {
    //         this.etapeActuel = 0;
    //     } 

    //     // on met à jours les feu en fonction de l'étape actuelle
    //     this.feu1 = this.etapes[0][this.etapeActuel];
    //     this.feu2 = this.etapes[1][this.etapeActuel];
    //     this.feu3 = this.etapes[2][this.etapeActuel];
    //     this.feu4 = this.etapes[3][this.etapeActuel];

    //     //on passe à l'étape suivante 
    //     this.etapeActuel++;

    //     return `feu 1 : ${this.feu1} feu 2 : ${this.feu2} feu 3 : ${this.feu3} feu 4 : ${this.feu4}`;

    // },
    // ***************************************************************************************
    // methode pour utiliser le css qui va changer les couleurs
    // ***************************************************************************************
    // on créer la méthode pour passer à l'étape suivante (version simple)
    etapeSuivante1: function () {


        //un compteur pour voir on est à quelle etape, on cumul
        this.etapeActuel++;

        // si nous sommes à l'étape 1 
        if (this.etapeActuel == 1) {
            this.feu1 = 'rouge';
            this.feu2 = 'vert';
            this.feu3 = 'rouge';
            this.feu4 = 'vert';
        }

//         this.etape == 1 ? this.changerfeu('rouge','vert','rouge','vert')
//  : null    
    // si nous sommes à l'étape 2
        // if (this.etapeActuel == 2) {
        //     this.feu1 = 'rouge';
        //     this.feu2 = 'orange';
        //     this.feu3 = 'rouge';
        //     this.feu4 = 'vert';
        // }

        // si nous sommes à l'étape 3 
        if (this.etapeActuel == 3) {
            this.feu1 = 'rouge';
            this.feu2 = 'rouge';
            this.feu3 = 'rouge';
            this.feu4 = 'orange';
        }

        // si nous sommes à l'étape 4
        if (this.etapeActuel == 4) {
            this.feu1 = 'vert';
            this.feu2 = 'rouge';
            this.feu3 = 'vert';
            this.feu4 = 'rouge';
        }

        // si nous sommes à l'étape 5 
        if (this.etapeActuel == 5) {
            this.feu1 = 'orange';
            this.feu2 = 'rouge';
            this.feu3 = 'vert';
            this.feu4 = 'rouge';
        }

        // si nous sommes à l'étape 6
        if (this.etapeActuel == 6) {
            this.feu1 = 'rouge';
            this.feu2 = 'rouge';
            this.feu3 = 'orange';
            this.feu4 = 'rouge';
            this.etapeActuel = 0;
        }



       


        // on selectionne le 
        
       
    
    

        // let feu2actif = document.querySelector('.feux2 .actif');
        // feu1actif.classList.remove.apply('.actif');

        // let feu3actif = document.querySelector('.feux3 .actif');
        // feu1actif.classList.remove.apply('.actif');

        // selon la valeur du feu on ajoute la classe actif sur celui qui correspond
        let feu1actif = document.querySelector('.feux1 .actif');
        feu1actif.classList.remove('actif');
        switch (this.feu1){
            case 'rouge':
                document.querySelector('.feux1 .couleur_1').classList.add('actif')
                break;
            case 'orange':
                document.querySelector('.feux1 .couleur_2').classList.add('actif')
                 break;
             case 'vert':
                document.querySelector('.feux1 .couleur_3').classList.add('actif')
                break; 
        }

        let feu2actif = document.querySelector('.feux2 .actif');
        feu2actif.classList.remove('actif');
        switch (this.feu2){
            case 'rouge':
                document.querySelector('.feux2 .couleur_1').classList.add('actif')
                break;
            case 'orange':
                document.querySelector('.feux2 .couleur_2').classList.add('actif')
                 break;
             case 'vert':
                document.querySelector('.feux2 .couleur_3').classList.add('actif')
                break; 
        }


        let feu3actif = document.querySelector('.feux3 .actif');
        feu3actif.classList.remove('actif');
        switch (this.feu3){
            case 'rouge':
                document.querySelector('.feux3 .couleur_1').classList.add('actif')
                break;
            case 'orange':
                document.querySelector('.feux3 .couleur_2').classList.add('actif')
                 break;
             case 'vert':
                document.querySelector('.feux3 .couleur_3').classList.add('actif')
                break; 
        }

        let feu4actif = document.querySelector('.feux4 .actif');
        feu4actif.classList.remove('actif');
        switch (this.feu4){
            case 'rouge':
                document.querySelector('.feux4 .couleur_1').classList.add('actif')
                break;
            case 'orange':
                document.querySelector('.feux4 .couleur_2').classList.add('actif')
                 break;
             case 'vert':
                document.querySelector('.feux4 .couleur_3').classList.add('actif')
                break; 
        }
        return `feu 1 : ${this.feu1} feu 2 : ${this.feu2} feu 3 : ${this.feu3} feu 4 : ${this.feu4}`;

    }}

    setInterval(() => {
        // toute les 2 secondes on appel la methode etapeSuivante1
        feu_tricolor.etapeSuivante1()
    }, 2000);


// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());
// console.log(feu_tricolor.etapeSuivante());



// window.setTimeout(etapeActuel, 5000);


// **********************************************************************************************

// setInterval(etapeActuel, 5000);


// setInterval(etapeSuivante()  {


//             // on récupère tous les bouttons
//         let feux = document.querySelectorAll('.feux_tricolor');

    

// // pour chaque boutton dans la variable bouttons
//     feux.forEach(feu =>{
//   // on ajoute un litener au click sur

// //   feu.addEventListener('click', function (e) {
// //     // on filtre en fonction de l'attribut data-filter du boutton clické
// //     iso.arrange({filter: boutton.getAttribute('data-filter')});
//     let feu1actif = document.querySelector('.feux1 .actif');
//     //         feu1actif.classList.remove.apply('.actif');
//                 switch (this.feux1){
//                     case 'rouge':
//                         document.querySelector('feux1 .couleur_1').classList.add('actif')
//                         break;
//                     case 'orange':
//                         document.querySelector('feux1 .couleur_1').classList.add('actif')
//                         break;
//                     case 'vert':
//                         document.querySelector('feux1 .couleur_1').classList.add('actif')
//                         break; 
//                 }
//                 switch (this.feux2){
//                     case 'rouge':
//                         document.querySelector('feux2 .couleur_1').classList.add('actif')
//                         break;
//                     case 'orange':
//                         document.querySelector('feux2 .couleur_1').classList.add('actif')
//                         break;
//                     case 'vert':
//                         document.querySelector('feux2 .couleur_1').classList.add('actif')
//                         break; 
//                 }
//                 switch (this.feux3){
//                     case 'rouge':
//                         document.querySelector('feux3 .couleur_1').classList.add('actif')
//                         break;
//                     case 'orange':
//                         document.querySelector('feux3 .couleur_1').classList.add('actif')
//                         break;
//                     case 'vert':
//                         document.querySelector('feux3 .couleur_1').classList.add('actif')
//                         break; 
//                 }

// })

    
// }, 5000);


// *********************************************************************************************




//    let elementlists= document.querySelectorAll('feux_tricolor');

//     elementlists.forEach(elementlist => {
//     etapeActuel = n;

//     });

//     element.innerHTML += "Hello"





// 




// setTimeout(function() => {
//    let feuxtr =  document.querySelector('feux_tricolor');
   
// console.log( 'coucou'+feuxtr);
// }, 5000);