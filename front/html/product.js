/* Récuperation de la chaine de requete
 */
const queryString_url_id = window.location.search;

/* Récuperation de l'id
 */
const _id = queryString_url_id.slice(4);
console.log(_id)  

/*Afficher chaque produit dans la page produit */
fetch ('http://localhost:3000/api/products')
  .then(res => res.json())
  .then(data =>{ 
    const idproduit = data.find((element)=>element._id === _id);
    console.log(idproduit)
  

    
/* Selection de la zone à inserer le code html */
const htmlproduit = document.querySelector(".item");
/* Insertion du code html dans la apge produit */
    const structurehtmlproduit =  `
    <article>
            <div class="item__img" id="item__img">
               <img src="${idproduit.imageUrl}" alt="${idproduit.altTxt}"> 
            </div>
            <div class="item__content">
              <div class="item__content__titlePrice >
                <h1 id="title">${idproduit.name}</h1>
                <p>Prix : <span id="price">${idproduit.price}</span>€</p>
              </div>
              <div class="item__content__description" id="item__content__description">
                <p class="item__content__description__title">Description :</p>
                <p id="description">${idproduit.description}</p>
              </div>
              <form>
              <div class="item__content__settings">
                
                <div class="item__content__settings__color">
                  <label for="color-select">Choisir une couleur :</label>
                  <select name="color-select" id="colors">
                      <option value="">Découvrez les couleurs disponibles</option>
                    
                  </select>
                </div>
                <div class="item__content__settings__quantity">
                  <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                  <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
                </div>
              </div>
              </form>
              <div class="item__content__addButton">
                <button id="addToCart">Ajouter au panier</button>
              </div>
            </div>
          </article>
    `
    htmlproduit.innerHTML = structurehtmlproduit;

    /* Géneration automatique des couleurs */
const optionsCouleur = idproduit.colors;
/* Selection de la zone à intégrer le code  */
const htmlcouleurs = document.querySelector("#colors");
let structureCouleurs = [];
/* Boucle for */
for (i = 0; i < optionsCouleur.length; i++){
  structureCouleurs = structureCouleurs + `
  <option value = "${optionsCouleur[i]}">${optionsCouleur[i]}</option>
  `
  
}
htmlcouleurs.innerHTML = structureCouleurs;



/* -------------------------PAGNIER-------------------------------*/

  const choixCouleur = document.querySelector("#colors");

/* Paramétrage bouton de validation */
const btnValidation = document.querySelector("#addToCart");

/* Paramétrage de la quantité de produit */
const nbreProduit = document.querySelector('#quantity');


/* Ecouter le bouton et envoyer le pagnier */
btnValidation.addEventListener("click", (event)=>{
  event.preventDefault();  
  /* Stocker la quantité de produit dans une variable */
  let productQuantity = quantity.value;
  if (productQuantity > 0) {
    productQuantity = quantity.value;
  }
  else{
   /* alert("Veillez choisir une quantité !"); */
  }



  /* Stocker le choix de la couleur dans une variable */
  
  
  console.log(choixCouleur.value);


  /* Récupération des valeurs du formulaire */
  let optionsproduit = [];
  if (productQuantity > 0){   
  optionsproduit = {
  name: idproduit.name,
  altTxtProduit: idproduit.altTxt,
  idproduit: idproduit._id,
  color: choixCouleur.value,
  quantity: productQuantity,
  price: idproduit.price*productQuantity,
  imageUrl: idproduit.imageUrl,
  };
  console.log(optionsproduit);
  }
  else {
  delete optionsproduit;
  }






     /* ---------------local storage ----------*/
     let enregistrementdanslocalstorage =JSON.parse(localStorage.getItem("produit")); 
     
     if(enregistrementdanslocalstorage){
      /* Si la quantité est inférieure à 1 */
        if(productQuantity > 0){  
        /*  if(_id != optionsproduit.id) */
          enregistrementdanslocalstorage.push(optionsproduit);
          localStorage.setItem("produit", JSON.stringify(enregistrementdanslocalstorage));
          alert("Le produit vient d'être ajouté au pagnier ")           
        
        }
      /* Si la quantité est supérieure ou égale à 1 */
        else{
          delete optionsproduit
          alert("Veillez choisir une quantité !")
        }
        console.log(enregistrementdanslocalstorage);
      } 
     
  
     else{
      if(productQuantity > 0){    
        enregistrementdanslocalstorage = [];    
        enregistrementdanslocalstorage.push(optionsproduit);
        localStorage.setItem("produit", JSON.stringify(enregistrementdanslocalstorage));
        console.log(enregistrementdanslocalstorage);
        }
        else{
          enregistrementdanslocalstorage = [];
        }
      }

      /*
      let identifiant = enregistrementdanslocalstorage;
      for (let x = 0; x < identifiant.length; x++){
        if(identifiant[x] = _id){
          delete optionsproduit
          alert ("Ce produit est déjà dans le panier")
        }
        else{
          alert ("Nouys nous occupons de tout")
        }
      }
      console.log(identifiant[x].idproduit);  */

/*
      let enregistrementsecondaire = enregistrementdanslocalstorage;
      let _id = queryString_url_id.slice(4);
      console.log(enregistrementdanslocalstorage.value);
      console.log(_id);
      for (let z = 0; z < idproduit; z++){

       if(_id = idproduit[z]){
        enregistrementsecondaire.optionsproduit = [];                                    
        alert ("Le produit existe déjà")  
       }
       else{
        alert ("Nous nous occupons de tout")
       }


      }
      console.log("enregistrement secondaire");
      console.log(enregistrementsecondaire);      */


         /* ---------------local storage ----------
         let enregistrementdanslocalstorage =JSON.parse(localStorage.getItem("produit")); 
     
         if(enregistrementdanslocalstorage) {
          /* Si le produit est déja sélectionné 
          if(optionsproduit.idproduit ){  
          /*  alert ("Le produit existe déjà")  */    
          /* Si la quantité est déja choisie *        
            if(optionsproduit.quantity < 0){             
            delete optionsproduit
            alert ("Ce produit est déja dans le pagnier")
            }
          /* Si la quantité est déja choisie *
            else{
              enregistrementdanslocalstorage.push(optionsproduit);
              localStorage.setItem("produit", JSON.stringify(enregistrementdanslocalstorage));
            }
            console.log(enregistrementdanslocalstorage);
          } 
         
      
         else{
          if(productQuantity > 0){    
            enregistrementdanslocalstorage = [];    
            enregistrementdanslocalstorage.push(optionsproduit);
            localStorage.setItem("produit", JSON.stringify(enregistrementdanslocalstorage));
            console.log(enregistrementdanslocalstorage);
            }
            else{
              enregistrementdanslocalstorage = [];
            }
          }
        }
        */
});

   

  })
  .catch(err => console.log("Problem !", err))
