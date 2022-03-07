fetch("https://api.thecatapi.com/v1/images/search")
  .then((cat) => cat.json())
  .then(
    (data) => (document.querySelector(".randomCatImage").src = data[0].url)
  );
document.getElementById("left").addEventListener("click", () => {
  scrollWidth = document.querySelector(".slide-container").offsetWidth;
  document.querySelector(".slide-gallery").scrollLeft -= scrollWidth;
});
document.getElementById("right").addEventListener("click", () => {
  scrollWidth = document.querySelector(".slide-container").offsetWidth;
  document.querySelector(".slide-gallery").scrollLeft += scrollWidth;
});

let createSlide = (imgSrc, phrase) => {
  let gallery = document.querySelector(".slide-gallery");
  let slideContainer = document.createElement("div");
  let imgBox = document.createElement("div");
  let textBox = document.createElement("div");
  slideContainer.className = "slide-container";
  imgBox.className = "imgBox";
  textBox.className = "textBox";
  slideContainer.appendChild(imgBox);
  slideContainer.appendChild(textBox);
  textBox.innerText = phrase;
  imgBox.style.backgroundImage = "url(" + imgSrc + ")";
  gallery.appendChild(slideContainer);
};

let clearKittens = () => {
  let kittyPanels = document.querySelector(".slide-gallery");
  kittyPanels.scrollBy(-600 * kittyPanels.childNodes.length, 0);
  while (kittyPanels.hasChildNodes()) {
    kittyPanels.removeChild(kittyPanels.firstChild);
  }
};
let generateKittens = async () => {
  let iterations = document.querySelector("#kittenValue").value;
  if (iterations == undefined || iterations < 2 || iterations > 100) {
    alert("aye yo only numbers between 2-100");
  } else {
    clearKittens();
    for (let i = 0; i < iterations; i++) {
      let catApiResponse = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      let catImg = catApiResponse.data[0].url;
      let catFactResponse = await axios.get("https://catfact.ninja/fact");

      let catFact = catFactResponse.data.fact;
      createSlide(catImg, catFact);
    }
  }
};

document
  .getElementById("kittenButton")
  .addEventListener("click", generateKittens);
