import {hotelsData}  from "../resources/data.js"

const sectionHotels = document.getElementById("gallery");
const nameHotel = document.getElementById("nameHotel");
const btn = document.getElementById("searchBtn");

//variables para la busqueda

let textoInput = "";

// ----- renderizado de imagen 1 x 1 (ejemplo) -----
 //const cardHotel = document.createElement("div");
 //cardHotel.setAttribute("class", "card");

 const titleHotel = document.createElement("h3");
 titleHotel.setAttribute("class", "card__title");

 
  //document.getElementById(element.photo).value;
  //console.log(a);


 //const imageHotel = document.createElement("img");
 //imageHotel.setAttribute("class", "card__image");
 //imageHotel.setAttribute("src", hotelsData[0].photo);
 //imageHotel.setAttribute("alt", "imagen del hotel" + hotelsData[0].name);

 //sectionHotels.appendChild(cardHotel);
 //cardHotel.appendChild(titleHotel);
 //cardHotel.appendChild(imageHotel);

//-------- subtema: filtrado de elementos
// function filtrarHoteles(nombrePais) {
//   return hotelsData.filter((element) => {
//     if (element.country == nombrePais) {
//       return element;
//     }
//   });
// }

//renderizado en masa con forEach()

// console.log(hotelsData);

//function imprimitHoteles() {
//  let hotelesFiltrados = hotelsData.filter((element) => {
//    if (textoInput.toLowerCase() === element.country.toLowerCase()) {
//      return element;
//    } else {
//      return element;
//    }
//  });

  hotelsData.forEach((element) => {
    const cardHotel = document.createElement("div");
    cardHotel.setAttribute("class", "card");

    //const titleHotel = document.createElement("h3");
    //titleHotel.setAttribute("class", "card__title");
    //titleHotel.textContent = element.name;

    const imageHotel = document.createElement("img");
    imageHotel.setAttribute("class", "card__image");
    imageHotel.setAttribute("src", element.photo);
    imageHotel.setAttribute("alt", "imagen del hotel " + element.name);

    sectionHotels.appendChild(cardHotel);
   // cardHotel.appendChild(titleHotel);
    cardHotel.appendChild(imageHotel);

  imageHotel.addEventListener("click",()=>{
   console.log(element.name)
  ponernombres();
  })
  
  function ponernombres(){
    titleHotel.textContent = element.name;
    nameHotel.appendChild(titleHotel);
  }

  });
//}

//inputSearch.addEventListener("keyup", (event) => {
//  textoInput = event.target.value;
//});
//btn.addEventListener("click", () => {
//  imprimitHoteles();
//});
