import {hotelsData}  from "../resources/data.js"


//variables para asociar al DOM

const sectionHotels = document.getElementById("gallery");
const cityRooms = document.getElementById("cityRooms");
const cityName = document.getElementById("cityName");
const cityTittle = document.getElementById("cityTittle")
const imgn = document.getElementById("container")
const cardD = document.getElementById("cont");



//variables para la busqueda

const titleHotel = document.createElement("h3");
titleHotel.setAttribute("class", "card__title");

const ubication = document.createElement("h4");
ubication.setAttribute("class","main__nameHotelc__city");

const cantHab = document.createElement("div");
cantHab.setAttribute("class","main__nameHotelc__chab");

const cardDesc = document.createElement("h5");
cardDesc.setAttribute("class","main__container__card");


const cardHoteldes = document.createElement("div");
cardHoteldes.setAttribute("class", "card");

const imageHotel3 = document.createElement("img");
    imageHotel3.setAttribute("class", "card__image");
    


//let textoInput = "";

// ----- renderizado de imagen 1 x 1 (ejemplo) -----
 //const cardHotel = document.createElement("div");
 //cardHotel.setAttribute("class", "card");



 
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

  function ponernombres(){
    titleHotel.textContent = element.name;
    ubication.textContent = element.city + ", " + element.country;
    cantHab.textContent = element.rooms + "   Rooms  ";
    cardDesc.textContent = element.description;


    cityTittle.appendChild(titleHotel);
    cityName.appendChild(ubication);
    cityRooms.appendChild(cantHab);
    cardD.appendChild(cardDesc);
    
    
    imgn.appendChild(cardHoteldes);
    cardHoteldes.appendChild(imageHotel3);
    imageHotel3.setAttribute("src", element.photo);
    imageHotel3.setAttribute("alt", "imagen del hotel " + element.name);

  }

  imageHotel.addEventListener("click",()=>{
    console.log(element.name)
   ponernombres();
   })




  });


  
   
  
  




//}

//inputSearch.addEventListener("keyup", (event) => {
//  textoInput = event.target.value;
//});
//btn.addEventListener("click", () => {
//  imprimitHoteles();
//});
