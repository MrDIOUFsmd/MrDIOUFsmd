fetch ('http://localhost:3000/api/products')
  .then(res => res.json())
  .then(data =>{ 
    console.log(data)

  /* Afficher les canapés dans la page d'accueil */
  const items = document.getElementById('items')
  let htmlaccueil = ""
  for (let canape of data ){
    htmlaccueil = htmlaccueil + `
          <a href="./product.html?id=${canape._id}">
            <article>
              <img src="${canape.imageUrl}" alt="${canape.altTxt}, ${canape.name}">
              <h3 class="productName">${canape.name}</h3>
              <p class="productDescription">${canape.description}</p>
              <p>Prix : <span id="price">${canape.price}</span>€</p>
            </article>
          </a> ` 
  }
  
  items.innerHTML = htmlaccueil

  })
  .catch(err => console.log("Problem !", err))



