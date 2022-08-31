let enregistrementdanslocalstorage = JSON.parse(localStorage.getItem("produit"));
console.log(enregistrementdanslocalstorage);

/* Génération numéro de commande */
let numcommande = Math.random();
console.log(numcommande);
if(numcommande){
numcommande = numcommande;
console.log(numcommande)
}
else{
  numcommande = [numcommande];
console.log(numcommande);
 }

const numerodecommande = {
    numero_de_commande: numcommande * 10E16,
}
  console.log(numerodecommande);

let databondecommande = {
    numero_de_commande: numerodecommande,
    
}
console.log(databondecommande);

  /* Local storage */
let datacommandelocalstorage = JSON.parse(localStorage.getItem("bondecommande"));
console.log(datacommandelocalstorage);

if(datacommandelocalstorage){
  datacommandelocalstorage.push(numerodecommande);
  localStorage.setItem("bondecommande", JSON.stringify(datacommandelocalstorage));
  console.log(databondecommande);
}

else{
  datacommandelocalstorage = [];
  datacommandelocalstorage.push(databondecommande);
  localStorage.setItem("bondecommande", JSON.stringify(datacommandelocalstorage));
  console.log(datacommandelocalstorage);
 }


/* Sélection de la zone à intégrer le code html */
const htmlconfirmation = document.querySelector("#orderId");

/* Html à intégrer */
const structurehtmlconfirmation = `
<span id="orderId">${datacommandelocalstorage.numero_de_commande}</span>
`
htmlconfirmation.innerHTML = structurehtmlconfirmation;


/*
function numerodecommande(min, max){
   return Math.random() ;
   console.log(numerodecommande);
}
console.log(Math.random());

function getRandomInt(min, max) {
    min = Math.ceil(100);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (1 - 100)) + 1;   
  }
  console.log(Math.random() * (100) + 1 ); */