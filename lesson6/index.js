const refs = {
  form: document.querySelector(".form"),
  eventList: document.querySelector(".list"),
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

function getEvents(page, keyWord) {
  fetchEvents(page, keyWord).then((result) => {
    console.log(result);
    const events = result._embedded.events;
    renderEvents(events);
  });
}
getEvents(1, "cat");

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `  <li>
  <img src="${images[0].url}" width="370" height="270"/>
  <h2>${name}</h2></li>
  `;
    })
    .join("");

  refs.eventList.insertAdjacentHTML("beforeend", markup);
}
