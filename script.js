fetch("https://api.thecatapi.com/v1/images/search")
  .then((cat) => cat.json())
  .then(
    (data) => (document.querySelector(".randomCatImage").src = data[0].url)
  );

document.querySelector(".arrow").addEventListener("click", () => {
  document.querySelector(".slide-gallery").scrollBy(610, 0);
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
  imgBox.style.backgroundImage =
    "url('https://cdn2.thecatapi.com/images/MjA0MjYyMA.jpg')";
  gallery.appendChild(slideContainer);
};

let generateKittens = () => {
  let iterations = document.getElementById("kittenValue").value;
  if (iterations == undefined || iterations < 2 || iterations > 100) {
    alert("aye yo only numbers between 2-100");
  } else {
    for (let i = 0; i < iterations; i++) {
      let imgSrcs = [];
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((cat) => cat.json())
        .then((data) => data[0].url);
      createSlide(0, "yerr");
    }
  }
};

document
  .getElementById("kittenButton")
  .addEventListener("click", generateKittens);
