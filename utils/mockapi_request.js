const API_URLBASE =
  "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation";

//Ejemplo
// const optionsPost = {
//   method: "POST",
//   headers: HEADERS,
//   body: myBody,
//   redirect: "follow",
// };

// GET
export function getHotels() {
  return fetch(API_URLBASE);
}

export function getHotelbyId(id) {
  return fetch(API_URLBASE + "/hotel/" + id);
}

// POST

export function POSTHotel(hotel) {
  return fetch(API_URLBASE + "/hotel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hotel)
  });
}

// PUT

export function PUTHotel(id, hotel) {
  return fetch(API_URLBASE + "/hotel/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hotel)
  });
}

// DELETE

export function DELETEHotel(id) {
  return fetch(API_URLBASE + "/hotel/" + id, { method: "DELETE" });
}
