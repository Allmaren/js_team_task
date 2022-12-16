const refs = {
  form: document.querySelector(".form"),
  btnSearch: document.querySelector(".search"),
  btnMore: document.querySelector(".more"),
};

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const API_KEY = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=devjam&source=universe&countryCode=US&apikey={apikey} */

function fetchEvents(page, keyWord) {
  const params = new URLSearchParams({
    apikey: API_KEY,
    page,
    keyWord,
    size: 50,
  });
  return fetch(`${BASE_URL}events.json?${params}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
