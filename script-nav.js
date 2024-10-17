const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const footer = document.querySelector("footer");

const navDestination = document.querySelector("#nav-destination");
const ulDestination = document.querySelector(".list-destination");
const liDestination = document.querySelector(".destination-nav");

// Création de la navigation mobile

function buildNavigation() {
	const mainNav = document.createElement("main");
	const ulNav = document.createElement("ul");
	ulNav.classList.add("list-nav");
	const accueil = document.createElement("li");
	accueil.innerText = "Accueil";
	accueil.classList.add("cat-nav");
	const destinations = document.createElement("li");
	destinations.innerText = "Destinations";
	destinations.classList.add("cat-nav");
	const arrow = document.createElement("img");
	arrow.src = "./src/picto/arrow_right_blue.png";
	arrow.id = "arrow";
	destinations.appendChild(arrow);
	const aPropos = document.createElement("li");
	aPropos.innerText = "À propos";
	aPropos.classList.add("cat-nav");
	ulNav.appendChild(accueil);
	ulNav.appendChild(destinations);
	ulNav.appendChild(aPropos);
	mainNav.appendChild(ulNav);
	return mainNav;
}

burger.addEventListener("click", () => {
	main.style.display = "none";
	burger.style.display = "none";
	cross.style.display = "inline-block";
	header.style.display = "none";
	const mainNav = buildNavigation();
	body.insertBefore(mainNav, body.childNodes[2]);
	body.style.display = "flex";
	body.style.flexDirection = "column";
	body.style.justifyContent = "space-between";
	footer.style.position = "fixed";
	footer.style.bottom = "0px";
});

cross.addEventListener("click", () => {
	main.style.display = "block";
	const mainNav = document.querySelector("main");
	mainNav.style.display = "none";
	burger.style.display = "inline-block";
	cross.style.display = "none";
	footer.style.position = "static";
	footer.style.removeProperty("bottom");
});

// Menu destination desktop

navDestination.addEventListener("click", () => {
	if (ulDestination.style.display !== "flex") {
		ulDestination.style.display = "flex";
	} else ulDestination.style.display = "none";
});
