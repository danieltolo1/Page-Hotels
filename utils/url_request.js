const URL_GIPHY = "https://api.giphy.com/v1/gifs";
const API_KEY = "api_key=giCcMb9aml0SqD6kZ51Wjrt3sGQUNlK1";

function request(palabraDeBusqueda) {
  return fetch(
    `${URL_GIPHY}/search?${API_KEY}&q=${palabraDeBusqueda}&limit=12&offset=0&rating=g&lang=en`
  );
}
