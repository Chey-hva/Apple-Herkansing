// JavaScript Document

/*uit de powerpoint uit de les van js-3stap*/
var deP = document.querySelector("p");
deP.onclick = ietsDoen;
function ietsDoen() {
    deP.classList.toggle("anders");
}

/*https://codepen.io/joesayegh/pen/jOEVPKO voor het hamburger menu*/
const burger = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burger.onclick = function () {
    burger.classList.toggle("close");
    menu.classList.toggle("overlay");
};

/* Zorgen dat de zoekbalk werkt*/
searchTerms = mySearch.value;
const mySearch = document.querySelector("#site-search");
const myForm = document.querySelector("#search-form");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let searchTerms = mySearch.value.toLowerCase();

    let products = document.querySelectorAll("section li");

    products.forEach(function(product) {
        let productName = product.textContent.toLowerCase();

        if (productName.includes(searchTerms)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
});


const button = document.querySelector(".button");

button.addEventListener("click", function () {
    button.classList.remove("loading");

    // Animatie opnieuw starten
    void button.offsetWidth;

    button.classList.add("loading");

    setTimeout(function () {
        button.classList.remove("loading");
    }, 3800);
});
  

