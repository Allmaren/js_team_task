//Необхідно додати потрібну логіку, щоб при кліку на одну з карток,
// вона ставала активною(у нас для цього є клас active), а всі інші залишались / ставали неактивними
const allImages = document.querySelectorAll(".slide");
const mainContainer = document.querySelector(".container");

mainContainer.addEventListener("click", activeClassHandler);

function activeClassHandler(event) {
  if (event.target.classList[0] === "slide") {
    allImages.forEach((image) => {
      image.classList.remove("active");
    });

    event.target.classList.add("active");
  }
}
