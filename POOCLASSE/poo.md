 # les classes poo

```js
class voiture {

  // constructor(modele, couleur= "grise") { si on veut donner une couleur par defaut
  constructor(couleur, modele) {
    // sans recuperer l'attribut
    this.couleur = couleur;
    this.modele = modele;
    this.marque = 'peugeot';
    this.kilometres = 0;
  }
  // pas de virgule
  avancer() {
    this.kilometres += this.kilometres;
  }
}
```

- set
    - pour modifier

```js
  set peindre (couleur){
    
this.couleur = couleur;
  }
  ```


```js
ma_207.peindre = 'vert';
```


- get 
    - pour recuperer des valeurs



## heritage


