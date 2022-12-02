// objet fusee
let fusee = {
    // les attributs
    reservoir: 0,
    construite: false,
    passagers: [],
    planete: "terre",
    status: "",
    // les methodes

    // On génère un nouvel utilisateur
    ajouterpassageraleatoire: function () {

        // l'url de l'api, on ne veut qu'un seul resultat
        let url = "https://randomuser.me/api/?results=1";

        // on cree une variable pour avoir accès à l'objet fusée dans la fonction .then(function(data))
        let lafusee = this;

        //on envoie une requete à l'url
        fetch(url)

            // on met la reponse sous forme d'un objet
            .then((response) => response.json())

            //   j'appelle la fonction ajouterpassager grace à la variable lafusee qui fait le lien pour y acceder
            .then(function (data) {

                // je cree un nouveau passager
                lafusee.ajouterpassager(data.results)

            });
    },

    // on construit la fusee
    construirefusee: function () {
        this.construite = true;
    },

    // on rempli le reservoir à 100
    remplirreservoir: function () {
        this.reservoir = 100;
    },

    // on ajoute un passager, en parametre un objet
    ajouterpassager: function (objetutil) {
        // on verifie si il y a déjà quatre passagers
        if (this.passagers.length < 4) {
            // on ajoute dans le tableau passagers l'objet
            this.passagers.push(objetutil);
            // console.log(this.passagers)
        } else {
            console.log("il y a déjà quatre passagers");
        }
    },

    // trois conditions pour decoler,  le reservoir >0  construite ==true  et nb passagers == 4
    decolage: function () {
        // niveau reservoir
        if (this.reservoir > 0 && this.construite && this.passagers.length == 4) {


            // on change le status
            this.status = "en vol";

            // on baisse le reservoir et on verifie la qte
            if ((this.reservoir -= 35) <= 0) {
                console.log('echec');
            }
        }

    },

    // on donne le nom d'une planete en parametre, on verifie le status
    atterissage: function (nomplanete) {

        // on verifie le statut
        if (this.status == "en vol") {
            this.status = "sur une planete";
            this.planete = nomplanete;
        } else {
            console.log("echec de l'atterissage");
        }
    },
};


