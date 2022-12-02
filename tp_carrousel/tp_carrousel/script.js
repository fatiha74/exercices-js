
class carrousel {
  constructor(container = ".container", nbslide, temps) {
    console.log(this)
    // this.compteur = 0;
    this.cumul = 0;
    this.cumulprev = 0;
    

    // translate x sur le content

    // class container
    this.container = document.querySelector(container);
    // on change la taille du container
    this.container.style.width = "1000px";
    this.container.style.display = "flex";
    this.container.style.overflow = "hidden";
    this.container.firstElementChild.style.display = 'flex';

    //  margin auto
    this.container.style.margin = 'auto';

    // nombre de slide
    this.nbslide = nbslide;

    // le slide change toutes les this.temps secondes
    this.temps = temps;

    // le premier enfant de container
    this.content = this.container.firstElementChild;
    this.content.style.width = "100%";

    console.log('content' + this.content);

    this.images = this.content.querySelectorAll("img");
    console.log('images ' + this.images)
    // this.images.forEach(image => {
    this.images.forEach(image => {
      console.log('hello');

      image.style.minWidth = 100 / this.nbslide + "%";
      this.taille = 100 / this.nbslide;
      
    })


     setInterval(() => {
    //   // on appelle la methode nextSlide
    // this.nextSlide()
    //   this.prevSlide()

    }, this.temps);


this.btng()

  }


  nextSlide() {

    //  on fait une transition de 0.4s
    this.content.style.transition = "all 0.4s";

    // on cumule
    this.cumul++;
    // on fait le translate

    this.content.style.transform = "translateX(-" + this.taille * this.cumul + "%)";

    setTimeout(() => {

      // on passe la transition du carousel à 0
      this.content.style.transition = "all 0s";

      //on clone le premier element du carousel
      const cloneimage = this.content.firstElementChild.cloneNode(true);

      // on ajoute le clone après le dernier élément du carousel
      this.content.appendChild(cloneimage);

      // on supprime le premier élément du carousel
      this.content.firstElementChild.remove();

      // on enleve 1 à notre compteur
      this.cumul--;

      // on execute de nouveau la translation
      this.content.style.transform = "translateX(" + this.taille * this.cumul + "%)";

    }, 400);


  }

  prevSlide() {

    //  - 1 slide
    this.cumulprev--;

    //  on fait une transition de 0s pour etre instantané
    this.content.style.transition = "all 0s";

    // on clone
    const cloneimage = this.content.lastElementChild.cloneNode(true);
    // on ajoute le clone après le dernier élément du carousel
    this.content.insertBefore(cloneimage, this.content.firstElementChild);

    // on fait le translate
     this.content.style.transform = "translateX(" + this.taille * this.cumulprev + "%)";


    setTimeout(() => {
    
      // on passe la transition du carousel à 0.4s
      this.content.style.transition = "all 0.4s";

      // on supprime le premier élément du carousel
      this.content.lastElementChild.remove();

      // on ajoute 1 à notre compteur
      this.cumulprev++;

      // on execute de nouveau la translation
       this.content.style.transform = "translateX(" + this.taille * this.cumul + "%)";

    }, 400);

  }

  btng(){
const monthis = this;
     const main = document.querySelector("main");
     main.classList('monbouton');
     main.style.display="flex";

    const btn = document.createElement("BUTTON");        // Créer un élément <button>
     const t = document.createTextNode("◀️");       // Créer un noeud textuel
    btn.appendChild(t);    
     document.appendChild(btn);                              // Ajouter le texte au bouton
     main.appendChild(btn);  

       // au clic
       btn.addEventListener('click', function (e) {  
        
        monthis.nextSlide();
        console.log(monthis)
});

  }

  btnd(){

  //   var btn2 = document.createElement("BUTTON");        // Créer un élément <button>
  //   var t2 = document.createTextNode("▶️");       // Créer un noeud textuel
  //   btn2.appendChild(t2);                                // Ajouter le texte au bouton
  //   main.appendChild(btn2); 
   
  //  // au clic
  //   btn2.addEventListener('click', function (e) {  
  //            this.prevSlide()
  //   });
  }
}


// on cree un bouton pour prevSlide()
// btn.addEventListener('onclick', function (e) {
//   this.nextSlide();
// });
// next = carouset transition = all 0.4s
// timeout 0,4s -> 400
// enlever la transition à 0s
// on clone la 1ere img
//  on la supprime
// compteur -1
// transition X
// on clone la premiere image on la met à la fin
// puis on supprime
// transition 0 seconde 

let slider = new carrousel(".container", 4, 2000);
// on cree un bouton pour nextSlide()

// const btn = document.createElement("BUTTON");        // Créer un élément <button>
// const t = document.createTextNode("nextSlide");       // Créer un noeud textuel
// btn.appendChild(t);                                // Ajouter le texte au bouton
// document.body.appendChild(btn);  

// const main = document.querySelector("main");
// main.style.display="flex";
// const btn = document.createElement("BUTTON");        // Créer un élément <button>
// const t = document.createTextNode("◀️");       // Créer un noeud textuel
// btn.appendChild(t);                                // Ajouter le texte au bouton
// main.appendChild(btn);  


// ********************test

// var btn = .createElement("BUTTON");        // Créer un élément <button>
// var t = document.createTextNode("nextSlide");       // Créer un noeud textuel
// btn.appendChild(t);                                // Ajouter le texte au bouton
// document.body.appendChild(btn);  

// ********************



// var btn2 = document.createElement("BUTTON");        // Créer un élément <button>
//  var t2 = document.createTextNode("▶️");       // Créer un noeud textuel
//  btn2.appendChild(t2);                                // Ajouter le texte au bouton
//  main.appendChild(btn2); 

// // au clic
//  btn.addEventListener('click', function (e) {  
//           slider.nextSlide()
//  });

//  // on cree un bouton pour nextSlide()
// var btn2 = document.createElement("BUTTON");        // Créer un élément <button>
// var t2 = document.createTextNode("prevSlide");       // Créer un noeud textuel
// btn.appendChild(t2);                                // Ajouter le texte au bouton
// document.body.appendChild(btn2);  


// // au clic
// btn2.addEventListener('click', function (e) {

//             slider.prevSlide()
  
//    });


