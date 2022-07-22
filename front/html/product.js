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
                      <option value="${idproduit.colors[0]}">${idproduit.colors[0]}</option>
                      <option value="${idproduit.colors[1]}">${idproduit.colors[1]}</option> 
                      <option value="${idproduit.colors[2]}">${idproduit.colors[2]}</option>
                      <option value="${idproduit.colors[3]}">${idproduit.colors[3]}</option>
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

/* -------------------------PAGNIER-------------------------------*/

  const idForm = document.querySelector("#colors");

/* Paramétrage bouton de validation */
const btnValidation = document.querySelector("#addToCart");

/* Paramétrage de la quantité de produit */
const nbreProduit = document.querySelector('#quantity');


/* Ecouter le bouton et envoyer le pagnier */
btnValidation.addEventListener("click", (event)=>{
  event.preventDefault();  
  /* Stocker la quantité dans une variable */
  const productQuantity = quantity.value;
  /* Stocker le choix dans une variable */
  const choixForm = idForm.value;

  /* Récupération des valeurs du formulaire */
  let optionsproduit = {
  name: idproduit.name,
  idproduit: idproduit._id,
  color: choixForm,
  quantity: productQuantity,
  price: idproduit.price*productQuantity,

  }
  
     /* ---------------local storage ----------*/
     let enregistrementdanslocalstorage =JSON.parse(localStorage.getItem("produit"));

  
     if(enregistrementdanslocalstorage){
      enregistrementdanslocalstorage.push(optionsproduit);
      localStorage.setItem("produit", JSON.stringify(enregistrementdanslocalstorage));
      console.log(enregistrementdanslocalstorage);
     }
  
     else{
      enregistrementdanslocalstorage = [];
      enregistrementdanslocalstorage.push(optionsproduit);
      localStorage.setItem("produit", JSON.stringify(enregistrementdanslocalstorage));
      console.log(enregistrementdanslocalstorage);
     }
});

   

  })
  .catch(err => console.log("Problem !", err))


