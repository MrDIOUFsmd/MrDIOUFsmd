    /* ----------------------------------PAGNIER----------------------------- */

    let enregistrementdanslocalstorage =JSON.parse(localStorage.getItem("produit"));
    console.log(enregistrementdanslocalstorage);
   
    let miseajourpanier = enregistrementdanslocalstorage;
    console.log(miseajourpanier);
    for (y = 0; y < enregistrementdanslocalstorage; y++){
      if (miseajourpanier[y].idproduit == miseajourpanier[y].idproduit){
        alert("Il y a une similarité")
        miseajourpanier = [];
        console.log(miseajourpanier);
      }
      else{
        alert("Il n'y a pas de similarité")
      }
    }
    var tableau = [0, 12, 34]
 
    for (var i = 0, lth = tableau.length; i < lth; i++)
    {
        if (tableau[i] == tableau[1] && i != 1)
        {
            alert("Il y a une similarité")
        }
    }
 /*  for (y = 0; y < enregistrementdanslocalstorage; y++){
      if (enregistrementdanslocalstorage[y]){
        enregistrementdanslocalstorage[k] = [];
        console.log(enregistrementdanslocalstorage);
      }
      else{
        enregistrementdanslocalstorage[k] = [];
        console.log(enregistrementdanslocalstorage);
      }
     }


    /* Sélection de la zone à intégrer le code html */
    const htmlcart = document.querySelector("#cart__items");
    console.log(htmlcart);
    let structureProduitPagnier = ``;
    /* Si le pagnier est vide */
    if(enregistrementdanslocalstorage === null){
    const pagniervide = `
       <article class="cart__item" <div> Le pagnier est vide </div> <article>
    `
    htmlcart.innerHTML = pagniervide;
    }
    /* Si le pagnier n'est pas vide */
    else{    
    for (k = 0; k < enregistrementdanslocalstorage.length; k++){
      console.log(" On est " + enregistrementdanslocalstorage.length);
     structureProduitPagnier = structureProduitPagnier + `
     <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                    <div class="cart__item__img">
                      <img src="${enregistrementdanslocalstorage[k].imageUrl}" alt="${enregistrementdanslocalstorage[k].altTxtProduit}">
                    </div>
                    <div class="cart__item__content">
                      <div class="cart__item__content__description">
                        <h2>${enregistrementdanslocalstorage[k].name}</h2>
                        <p> Color : ${enregistrementdanslocalstorage[k].color}</p>
                        <p>Price : ${enregistrementdanslocalstorage[k].price} €</p>
                      </div>
                      <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                          <p> Quantity : </p>
                          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${enregistrementdanslocalstorage[k].quantity}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                          <p class="deleteItem">Supprimer</p>
                        </div>
                      </div>
                    </div>
     </article> 
     `
   
    htmlcart.innerHTML = structureProduitPagnier;
     }
    }
    

 
     


     /* Réglage des doublons de produits */




 /* Réglage des doublons de produits 
const filteredArray = enregistrementdanslocalstorage.filter( (ele,pos)=>enregistrementdanslocalstorage.indexOf(ele) == pos);
console.log("The filtered array",filteredArray);    */


/* ---------------------Paramétrage bouton supprimer ------------------- */
 
let boutonSupprimer = document.querySelectorAll(".cart__item__content__settings__delete")
console.log(boutonSupprimer);

for (let l = 0; l < boutonSupprimer.length; l++){
  boutonSupprimer[l].addEventListener("click" , (event) => {
  event.preventDefault();

  /* Sélection de l'id à supprimer */
  let idProduitàSupprimer = enregistrementdanslocalstorage[l].idproduit;

  /* Utilisation de la méthode filter pour conserver les autres produits du panier et supprimer l'élément où le btn supprimer a été cliqué */
  enregistrementdanslocalstorage = enregistrementdanslocalstorage.filter( el => el.idproduit != idProduitàSupprimer);
  console.log(enregistrementdanslocalstorage);

  /* Envoie de la variable dans le localstorage */
  /* Transformation en format JSON */
  localStorage.setItem(
    "produit", 
    JSON.stringify(enregistrementdanslocalstorage)
    );  
  
  alert(" Produit supprimé du panier");
  window.location.href = "cart.html";

  })

}

/************************ Création du bouton pour vider complétement le panier ********************* */

/* Selection de la zone à intégrer le code html */
const htmlBtnSuppressionPanier = document.querySelector(".cart__price");

/* Html du bouton pour supprimer tout le panier */
const htmlBoutonSuppressionPanier = `
<div class="cart__price">
  <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
</div>
<button class="btn_suppression_panier"> <h3> Vider le pagnier </h3></button>

`
/* Insertion du code html  */
htmlBtnSuppressionPanier.innerHTML = htmlBoutonSuppressionPanier;


/* Paramétrage du bouton de suppression du panier */
let btnSuppressionPanier = document.querySelector(".btn_suppression_panier");
console.log(btnSuppressionPanier);

/* Boucle for */
  btnSuppressionPanier.addEventListener("click", (event)=>{
    event.preventDefault();
/* Selection des produits à supprimer */
localStorage.removeItem("produit");

alert(" Panier supprimé");
window.location.href = "cart.html";


  })

/************************ FIN Création du bouton pour vider complétement le panier ********************* */


/*********************************  Montant total du panier ******************************* */

/* Création de la variable qui contiendra tous les prix  */
let prixTotalProduits = [];

/* Chercher les prix dans le panier */
for ( n = 0; n < enregistrementdanslocalstorage.length; n++){
  let prixProduitsDansPanier = enregistrementdanslocalstorage[n].price;
  /* Mettre les prix du panier dans la variable prixTotalProduits */
  prixTotalProduits.push(prixProduitsDansPanier);
  console.log(prixTotalProduits);
}


/* Additionner les prix de tous les articles du panier */
const reducer1 = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalProduits.reduce(reducer1);
console.log(prixTotal);

/* Zone à intégrerle code html */
const montantTotal = document.querySelector("#totalPrice");

/* Html à intégrer au code */
const structureHtmlMontantTotal = `
<span id="totalQuantity"> ${prixTotal} </span>
`


/* Insertion du html dans le code */
montantTotal.innerHTML = structureHtmlMontantTotal;  

/*********************************  Fin Montant total du panier ******************************* */

/*********************************  Total des produits du panier ******************************* */

/* Création de la variable qui contiendra tous les produits  */
let nbreTotalProduits = [];

/* Chercher les nbres dans le panier */
for ( o = 0; o < enregistrementdanslocalstorage.length; o++){
  let nbreProduitsDansPanier = enregistrementdanslocalstorage[o].quantity;
  nbreProduitsDansPanier = nbreProduitsDansPanier/1;
  /* Mettre les prix du panier dans la variable nbreTotalProduits */
  nbreTotalProduits.push(nbreProduitsDansPanier);
  console.log(nbreTotalProduits);

  

}


/* Additionner les prix de tous les articles du panier */
const reducer2 = (accumulator2, currentValue2) => accumulator2 + currentValue2;
const totalProduits = nbreTotalProduits.reduce(reducer2);
console.log(totalProduits);

/* Zone à intégrerle code html */
const totalArticles = document.querySelector("#totalQuantity");

/* Html à intégrer au code */
const structureHtmlTotalArticles = `
<span id="totalQuantity">${totalProduits}</span>
`

/* Insertion du html dans le code */
totalArticles.innerHTML = structureHtmlTotalArticles;  

/*********************************  Fin total produits du panier ******************************* */


/********************************* Paramétrage du formulaire de commande  ******************************* */

const affichageFormulaire = () => {
  const htmlForm = document.querySelector(".cart__order");

  /* Html à injecter au code  */
  const structureHtmlForm = `
  <form method="get" class="cart__order__form">
                <div class="cart__order__form__question">
                  <label for="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required>
                  <p id="firstNameErrorMsg"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required>
                  <p id="lastNameErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="address">Adresse: </label>
                  <input type="text" name="address" id="address" required>
                  <p id="addressErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="city">Ville: </label>
                  <input type="text" name="city" id="city" required>
                  <p id="cityErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="email">Email: </label>
                  <input type="email" name="email" id="email" required>
                  <p id="emailErrorMsg"></p>
                </div>
                <div class="cart__order__form__submit">
                  <input type="submit" value="Commander !" id="order">
                </div>
              </form> 
  `

  /* Insertion html */
  htmlForm.insertAdjacentHTML("beforeend", structureHtmlForm);

};
affichageFormulaire();

/* Sélection du bouton de validation du Formulaire */
const btnValidationCommande = document.querySelector("#order"); 

/* Ecouter le btn de validation de la commande */
btnValidationCommande.addEventListener("click", (event) => {
  event.preventDefault();

  class Formulaire{
    constructor(prenom, nom){
      this.prenom = document.querySelector("#firstName").value;
      this.nom = document.querySelector("#lastName").value;
      this.adresse = document.querySelector("#address").value;
      this.ville = document.querySelector("#city").value;
      this.email = document.querySelector("#email").value;
    }
  }

  /* Appel de l'instance de classe formulaire pour créer l'objett donneesFormulaire */
const donneesFormulaire = new Formulaire();
console.log("Donnees Formulaire");
console.log(donneesFormulaire);

  /* Récupération des données du formulaire pour le sauvegarder dans le localStorage 
  localStorage.setItem("prenom", document.querySelector("#firstName").value);
  localStorage.setItem("nom", document.querySelector("#lastName").value);
  localStorage.setItem("adresse", document.querySelector("#address").value);
  localStorage.setItem("ville", document.querySelector("#city").value);
  localStorage.setItem("email", document.querySelector("#email").value);


   Mettre toutes les values dans un objet 
  const Formulaire = {
  prenom: localStorage.getItem("prenom"),
  nom: localStorage.getItem("nom"),
  adresse: localStorage.getItem("adresse"),
  ville: localStorage.getItem("ville"),
  email: localStorage.getItem("email"),
  }
  console.log("Formulaire");
  console.log(Formulaire);  */

  /* Création de l'objet à envoyer au server */

  const bonDeCommande = {
  enregistrementdanslocalstorage,
  Formulaire,
} 
  console.log("Bon de commande ");
  console.log(bonDeCommande);

  
  alert(" Commande validée :) ");
  window.location.href = "confirmation.html";   


})

  /******************************* Mettre les données du localstorage dans le formulaire **********************/
/* Mettre les données du localstorage dans une variable */
const dataLocalStorage = localStorage.getItem("donneesFormulaire");

const dataLocalStorageObject = JSON.parse(dataLocalStorage);
console.log("dataLocalStorage");
console.log(dataLocalStorageObject);

/******************************* FIN Mettre les données du localstorage dans le formulaire *********************/