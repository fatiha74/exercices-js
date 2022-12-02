let barbecue = {

etatmerguez : "crue",
sorti : false,

cuiremerguez : function(){

    // setTimeout(() => {
    //     this.etatmerguez = "cuite";
    //     alert("utiliser la methode ' sortirmerguez()' ");




    // }, 10000);


    setTimeout(() => {
        this.etatmerguez = "cuite";
        alert("utiliser la methode ' sortirmerguez()' ");


        setTimeout(() => {
        
            if(this.etatmerguez == ""){
                alert("bon ap");
            }else{
                this.etatmerguez = "cramé";
            alert("cramé!!!! ");
            }
        }, 5000);

    }, 10000);

// fonction dans variable
    let mafonction = function(){
console.log('coucou')

    }

    setTimeout(mafonction,15000) ;
    

    // setTimeout(() => {
        
    //     if(this.etatmerguez == ""){
    //         alert("bon ap");
    //     }else{
    //         this.etatmerguez = "cramé";
    //     alert("cramé!!!! ");
    //     }
    // }, 15000);

},

sortirmerguez : function(){
    this.etatmerguez = "";
    // this.sorti = true;
},

ajoutermerguez : function(){
    
    this.etatmerguez = "crue";

    this.cuiremerguez();
}

}

// // ex distributeur automatique

// let distributeur = {

//     // element : [{nom:'coca', prixliquide: 3, quantite: 0},{nom:'fanta', prixliquide: 3, quantite: 0},{nom:'badoit', prixliquide: 3, quantite: 0}],



//     // element : [[{nom:'coca', prix: 3, quantite: 0},{nom:'fanta', prix: 3, quantite: 0},{nom:'badoit', prixliquide: 3, quantite: 0}],[{nom:'snickers', prix: 2.5, quantite: 0},{nom:'chips', prix: 2.5, quantite: 0},{nom:'mars', prix: 2.5, quantite: 0}]],


//     // solide : ['chips','cookies','snickers'],
//     // liquide : ['coca', 'fanta','badois'],
//     // prixliquide : 3,
//     // prixsolide : 2.5,

//     elements : {
//         liquide :{
//             coca : {prix :3 , qte:5},
//             fanta:  {prix :3 , qte:10},
//             badoit : {prix :3 , qte:6}
//         },
//         solide :{
//             chips : {prix :2.5 , qte:7},
//             mars:  {prix :3 , qte:20},
//             snickers : {prix :3 , qte:20}
//         }
//     },


//     remplir : function(tableau){
//         // rempli le distributeur de 10 elements
// console.log('le tableau : '+tableau);
//         // console.log(this.elements.liquide.coca.prix);      
//         // this.elements.liquide.tableauls[0][0].prix += 10;
//         // this.elements.liquide.tableauls[0][1].prix += 10;
//         // this.elements.liquide.tableauls[0][2].prix += 10;
//         // this.elements.liquide.tableauls[1][0].prix += 10;
//         // this.elements.liquide.tableauls[1][1].prix += 10;
//         // this.elements.liquide.tableauls[1][2].prix += 10;

//         // const object = { a: 1, b: 2, c: 3 };

//         for (const property in this.elements.liquide) {
//             console.log(property);
//             if(tableau.includes(property)){
//                 console.log('dans le 1ER if')
//                 //  console.log(`${property}: ${object[property]}`);
//                 this.elements.liquide.eval(property).qte += 10;
//                 console.log('laqte'+this.elements.liquide.eval(property).qte);
//                 //  this.elements.liquide.prix += 10;
//             }
         
//         }
//         for (const property in this.elements.solide) {
//             console.log(property);
//             if(tableau.includes(property)){
//                 console.log('dans le 2eme if')
//                 //  console.log(`${property}: ${object[property]}`);
//                  this.elements.solide.eval(property).prix += 10;
//                 //  this.elements.solide.prix += 10;
//             }
         
//         }

//     }
// }





















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

// let burger = {
//     lesingredients : [],
//     prix : 0,
//     lesburgers : [{prix : 5,ingredients : ['tomate', 'ail','pain','steack'],nom : "le black and white"},{prix : 7,ingredients : ['tomate', 'oignon','pain','steack'],nom : "le white"},{prix : 5,ingredients : ['tomate', 'persil','pain','steack'],nom : "le black"}],
     
//     composerBurger : function(argument){
        
//         // on verifie si c'est un tableau 
//         if(Array.isArray(argument) ){

//             // on rempli le tableau ingredients
//             this.lesingredients = argument;

//             // on fait un cumul pour ajouter à 5 +1EURO pour chaque ingredient en plus
//             let i= 0;
//             for (y of argument){
//                 i++;
//             }
//             // nbingredient = argument.ingredients.length;
//             this.prix =i + 5;
           

//         }else{
//             for (valeur of this.lesburgers){
//                 // on cherche le nom du burger dans le tableau
//                 if (argument == valeur.nom){
                    
//                     // une assignation 
//                this.lesingredients=[valeur.ingredients];

//                this.prix = valeur.prix;
            
//                 } 
//             }
//         }


// console.log(this.lesingredients);
// console.log(this.prix);
   

// },

// // on ajourte un burger 
// addburger : function(argument){
//     this.lesburgers.push(argument);
//     console.log(this.lesburgers);
// }
// }




// for (nom in tbburger){
//     console.log(nom);
// }

//  api renvoi du json, on se balade dans des tableaux d'objet

// objet burger
