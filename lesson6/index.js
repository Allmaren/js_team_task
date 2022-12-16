const refs = {
  form: document.querySelector(".form"),
  eventList: document.querySelector(".list"),
  btnMore: document.querySelector(".more"),
};

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const API_KEY = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

let pageToFetch = 0;
let queryToPage = "";

/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=devjam&source=universe&countryCode=US&apikey={apikey} */

function fetchEvents(page, keyword) {
  const params = new URLSearchParams({
    apikey: API_KEY,
    page,
    keyword,
    size: 100,
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
    // console.log(result);
    if (result.page.totalElements === 0) {
      refs.btnMore.classList.add("btn_hidden");
      alert("No results by your requirement!!!");
      return;
    }
    if (pageToFetch === result.page.totalPages) {
      refs.btnMore.classList.add("btn_hidden");
      alert("No more results by your requirement!!!");
      return;
    }
    const events = result._embedded.events;
    renderEvents(events);
    if (result.page.totalPages > 1) {
      refs.btnMore.classList.remove("btn_hidden");
    }
  });
}

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

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  queryToPage = event.target.elements.search.value;

  pageToFetch = 0;
  refs.eventList.innerHTML = "";

  getEvents(pageToFetch, queryToPage);
});

refs.btnMore.addEventListener("click", () => {
  pageToFetch += 1;
  getEvents(pageToFetch, queryToPage);
});
