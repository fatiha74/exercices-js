
    // on utilise une api , avec des chien  "https://dog.ceo/api/breeds/image/random");
// pour un chien
"use strict";
// dit même petite erreur

// on cree une class
const dogContainer = document.querySelector(".dogContainer");

// on cree une class asynchrone, 
async function getDogs() {
  try {
    // on utilise toujours un await
    const fetchDog = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(fetchDog);
    const dog = await fetchDog.json();
    console.log(dog);
    console.log(dog.message);
    createDogImg(dog.message);
    // retourne un chien
    return dog;
    // si il y a une erreur
  } catch (err) {
    console.error(err);
  }
}

getDogs();

function createDogImg(url) {
  // on cree une balise img
  const img = document.createElement("img");
  // on ajoute un attribut src et le lien de la source
  img.setAttribute("src", url);
  // on cree une class img
  img.classList.add("img");
  // on ajoute dans le dom dans le container dogContainer(css)
  dogContainer.appendChild(img);
}

// ***************************************************************************
// AVEC PLUSIEUR ANIMAUX = TABLEAU
// 'use strict';

// const dogContainer = document.querySelector('.dogContainer')

// async function getDogs() {
//   try {
//     const fetchDog = await fetch("https://dog.ceo/api/breed/hound/images");
//     console.log(fetchDog);
//     if(!fetchDog.ok) throw new Error('Error could not fetch the data')
//     const dogs = await fetchDog.json()
//     console.log(dogs);
//     console.log(dogs.message);
//     dogs.message.forEach( dog => {
//         createDogImg(dog)
//     })
//   } catch (err) {
//     console.error(err);
//   }
// }

// getDogs()

// function createDogImg(url){
//     const img = document.createElement('img');
//     img.setAttribute('src', url);
//     img.classList.add('img')
//     dogContainer.appendChild(img);

// }

// ***************************************************************************

// ***************************************************************************

// TABLEAU AVEC CLASSES NUMEROTES
// 'use strict';

// const dogContainer = document.querySelector('.dogContainer')

// async function getDogs() {
//   try {
//     const fetchDog = await fetch("https://dog.ceo/api/breed/hound/images%22);
//     console.log(fetchDog);
//     if(!fetchDog.ok) throw new Error('Error could not fetch the data')
//     const dogs = await fetchDog.json()
//     console.log(dogs);
//     console.log(dogs.message);
//     dogs.message.forEach( (dog, i) => {
//         createDogImg(dog, i);
//         // console.log(i);
//         // console.log(arr);
//     })
//   } catch (err) {
//     console.error(err);
//   }
// }

// getDogs()

// function createDogImg(url, i){
//     const img = document.createElement('img');
//     img.setAttribute('src', url);
//     img.classList.add('img', dog-${i})
//     dogContainer.appendChild(img);
// }
