// burger

class fastfood {
  // constructeur cree attribut
  constructor() {
    this.commande = [];
    this.ingredients = [];
    this.prixcommande = 0;
    this.nom;
    this.menu = [
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
    ];
  }

  // methode soitf nom de burger soit tableau
  composerburger(leburger) {
    if (Array.isArray(leburger)) {
      // on rempli le tableau ingredients
      this.ingredients = leburger;

      this.prix = this.ingredients.length + 5;
    } else {
      for (const burger of this.menu) {
        // on cherche le nom du burger dans le tableau
        if (leburger == burger.nom) {
          // une assignation
          this.ingredients = burger.ingredients;

          this.prix = burger.prix;
          this.nom = burger.nom;
        }
      }
    }

    console.log(this.ingredients);
    console.log(this.prix);
  }

  ajouterburger(objetburger) {
    this.menu.push(objetburger);
    console.log(this.menu);
  }

  commander(param, nomcommande) {
    if (Array.isArray(param)) {
      for (const valeur of param) {
        // parcourir le tableau contenant les nom des burgers
        for (const burger of this.menu) {
          if (burger.nom == valeur) {
            this.commande.push(burger);
            this.prixcommande += burger.prix;
          }
        }
      }
    } else {
      for (const burger of this.menu) {
        if (burger.nom == param) {
          this.commande.push(burger);
          this.prixcommande += burger.prix;
        }
      }

    }
    console.log(`${nomcommande} ${this.commande} ${this.prixcommande}`);
    // ajout tableau objet soit texte soit tableau
  }

  commanderkevin(commandeclient, nomdecommande) {
    // on check si la commande est un tableau ou pas
    if (Array.isArray(commandeclient)) {
      // pour chaque élement de la commande
      for (const commande of commandeclient) {

        for (const burger of this.menu) {
          // si le burger qu'on est en train de parcourir correspond à la commande client
          if (burger.nom == commande) {
            // on ajoute ce burger dans l'attribut commande
            this.commande.push(burger);
            // on ajoute le prix du burger dans le prix de la commande
            this.prixcommande += burger.prix;
          }
        }
      }
    } else {
      // pour chaque burger du menu
      for (const burger of this.menu) {
        // si le burger qu'on est en train de parcourir correspond à la commande client
        if (burger.nom == commandeclient) {
          // on ajoute ce burger dans l'attribut commande
          this.commande.push(burger);
          // on ajoute le prix du burger dans le prix de la commande
          this.prixcommande += burger.prix;
        }
      }

    }
  }
}

let chezAdri = new fastfood();

console.log(chezAdri);

// LES BOUCLES 

// 1) Afficher dans la console chaque valeur du tableau suivant

// let tableau = [1,2,3,4,5];

// for (const valeur of tableau) {
//   console.log(valeur)
// }

// 2) Afficher dans la console chaque valeur du tableau suivant

// let tableau = [1,'test',[],false,5];
// for (const valeur of tableau) {
//   console.log(valeur)
// }

// 3) Afficher dans la console chaque valeur plus grande que 10

// let tableau = [1,20,3,54,5];
// for (const valeur of tableau) {
//   if(valeur>10){
//   console.log(valeur)
//   }
// }

// 4) En utilisant typeOf on affichera uniquement les string

//  let tableau = [1,'salut',3,'abdess',5];

//  for (const valeur of tableau) {
//   if(typeof valeur == "string")
//      console.log( valeur,typeof valeur)
//  }

// 5) En utilisant typeOf on affichera uniquement les number

// let tableau = [1,'salut',3,'abdess',5];

// for (const valeur of tableau) {
//   if(typeof valeur == "number")

//     console.log( valeur,typeof valeur)

//   }

// 6) En utilisant Array.isArray on affichera uniquement le tableau

// let tableau = [1,'salut',3,'abdess',[1,40,50]]; 
// for (const valeur of tableau) {
//   if (Array.isArray(valeur)) 

//        console.log( valeur)

//     }


// 7) En utilisant Array.isArray et une boucle dans une boucle, 
// afficher les nombres des tableaux

// let tableau = [1, 'salut', 3, [16, 36, 56], 'abdess', [1, 40, 50]];

// for (const valeur of tableau) {

//   if (Array.isArray(valeur)) {

//     for (const tab of valeur) {
//       console.log(tab)

//     }



//   }
// }

// 8) Afficher les ingrédients du DoubleCheese

// let tableau = [
//   { nom: "Whopper", ingredients: ["steak", "sauce", "tomate", "salade", "oignon"], prix: "6€" },
//   { nom: "Doublecheese", ingredients: ["steak", "sauce", "tomate", "double cheddar", "oignon"], prix: "6,50€" },
//   { nom: "Double Whopper", ingredients: ["steakx2", "sauce", "tomate", "salade", "oignon"], prix: "7€" }
// ];


// // je parcour le tableau
// for (const valeur of tableau) {

//   // si la valeur est egale à doublecheese
//   if (valeur.nom == "Doublecheese") {

//     // on parcour le tableau ingredients
//     for (const ingredient of valeur.ingredients) {

//       console.log(ingredient)
//     }


//   }
// }
// 9) Afficher un par un les ingrédients du DoubleCheese



// let tableau =  [
//   {nom: "Whopper", ingredients : ["steak","sauce","tomate","salade","oignon"],prix :"6€"},
//   {nom: "Doublecheese", ingredients : ["steak","sauce","tomate","double cheddar","oignon"],prix :"6,50€"},
//   {nom: "Double Whopper", ingredients : ["steakx2","sauce","tomate","salade","oignon"],prix :"7€"}
//   ]; 

// 10) changer les valeurs du tableau pour qu'il resemble à : [1,2,3,4,5]


// let tableau = [1,true,3,false,5];

// console.log(tableau.length)

// for(i=0;i < tableau.length;i++){

  

// if(typeof tableau[i] === "boolean"){

//  tableau[i] = i+1;

// }
 

// }
// console.log(tableau)

// console.log(array1.fill(0, 2, 4));
// 11) changer les valeurs du tableau pour qu'il resemble à : [1,2,3,4,[5,6]]

// let tableau = [1,true,3,false,true];

// for(i=0;i < tableau.length;i++){
//   console.log(tableau[i]);

//   if(typeof tableau[i] == "boolean"){
//     console.log("hello")
   

//     if(i== 4){
//           tableau[i]=[i+1, i+2];
//     }else{
//       tableau[i]=i+1;
//     }
   

// }
// }
// console.log(tableau)

// 12)  changer les valeurs du tableau1 pour qu'il resemble au tableau 2

// let tableau1 = [1,true,3,false,true];
// let tableau2 = ['a','b',17,'$',5];

// for(i=0;i < tableau1.length;i++){
//   tableau1[i]=tableau2[i];
// }

//  console.log(tableau1)
//  console.log(tableau2);

//  13)  changer les valeurs du tableau1 pour qu'il resemble au tableau 2

// let tableau1 = [1,true,3,[1,2,3],true];
// let tableau2 = ['a','b',17,['a','b','c'],5];

//  for(i=0;i < tableau1.length;i++){
//   if(i==1 || i== 4){
//     tableau1[i] = tableau2[i];
//   }
//   else if(i==3){
//     let tab = tableau1[i];

//     for(n=0;n<tableau1[i].length;n++){
     
//       tableau1[i]=tableau2[i];
      
//     }
//   }
//   else{
//     tableau1[i]=tableau2[i];
//   }
//  }

//  for(i=0;i < tableau1.length;i++){
//  if(Array.isArray(tableau1[i])){
//     let tab = tableau2[i];
    
//     for(n=0;n<tab.length;n++){
     
//       tableau1[i][n]=tab[n];
      
//     }
//   }
//   else{
//     tableau1[i]=tableau2[i];
//   }
//  }
//  console.log(tableau1)
//  console.log(tableau2)







