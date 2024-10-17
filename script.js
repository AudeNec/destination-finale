const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const button = document.querySelectorAll(
	"#button-edimbourg, #button-bruxelles, #button-budapest, #button-valence",
);
const array1 = document.querySelectorAll(".slide1");
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const cardcity = document.querySelector(".city");
const arrLogo = [
	"./src/logo-villes/kilt_blue.png",
	"./src/logo-villes/fries_blue.png",
	"./src/logo-villes/thermal_blue.png",
	"./src/logo-villes/fan_blue.png",
];
const arrTitle = ["Edimbourg", "Bruxelles", "Budapest", "Valence"];
const arrParag = ["Blabla1", "Blabla2", "Blabla3", "Blabla4"];
const logo = document.querySelector(".logocity");
const title = document.querySelector(".fichecity h1");
const parag = document.querySelector(".fichecity p");
const discover = document.querySelector(".fichecity button");
const discoverLink = [
	"edimbourg.html",
	"bruxelles.html",
	"budapest.html",
	"valence.html",
];
const footer = document.querySelector("footer");
const categorySections = document.querySelectorAll("main section.category");
const screen = getComputedStyle(document.body)
	.getPropertyValue("--screen")
	.replace(/\W/g, "");

// Création de la navigation mobile

() => {
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
};

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

// Remplissage des coeurs

// biome-ignore lint/complexity/noForEach: <explanation>
button.forEach((element, index) => {
	element.clicked = false;
	const img = element.querySelector("img");
	element.addEventListener("mouseover", () => {
		if (!element.clicked) {
			img.src = "./src/picto/heart_full_yellow.png";
		}
	});
	element.addEventListener("mouseout", () => {
		if (!element.clicked) {
			img.src = "./src/picto/heart_empty_yellow.png";
		}
	});
	element.addEventListener("click", () => {
		// biome-ignore lint/complexity/noForEach: <explanation>
		// biome-ignore lint/complexity/noForEach: <explanation>
		button.forEach((btn) => {
			if (btn !== element) {
				const btnImg = btn.querySelector("img");
				btnImg.src = "./src/picto/heart_empty_yellow.png";
				btn.clicked = false;
			}
		});

		element.clicked = true;
		img.src = "./src/picto/heart_full_yellow.png";
	});
	element.addEventListener("click", () => {
		const welcome = document.querySelector("#welcome");
		welcome.style.display = "none";
		cardcity.style.display = "flex";
		title.innerText = arrTitle[index];
		parag.innerText = arrParag[index];
		logo.src = arrLogo[index];
		document
			.querySelector(".fichecity button")
			.setAttribute("href", discoverLink[index]);
	});
});

	// slider

	let sliderNumber = 1;
	next.addEventListener("click", () => {
		// j'incrémente activity et sliderNumber (ici devient 1), cache l'image en cours
		document.querySelector("#activity" + sliderNumber).classList.add("hidden-image");
		// je passe à l'image suivante
		sliderNumber++;	
		// si on dépasse le 3e on revient à 1
		if (sliderNumber > 3) {
			sliderNumber = 1;
		}
		// afficher la prochaine image
		document.querySelector("#activity" + sliderNumber).classList.remove("hidden-image");
	});
	
	previous.addEventListener("click", () => {
		document.querySelector("#activity" + sliderNumber).classList.add("hidden-image");
		sliderNumber--;
		if (sliderNumber <1) {
			sliderNumber = 3;
		}
		document.querySelector("#activity" + sliderNumber).classList.remove("hidden-image");
	});
		
	

// Ouverture des catégories

if (screen === "desktop") {
	// biome-ignore lint/complexity/noForEach: <explanation>
	categorySections.forEach((categorySection) => {
		const categoryHeader = categorySection.querySelector("header");
		const categoryContent = categorySection.querySelector("ul");
		const categoryArrow = categorySection.querySelector("#arrow");
		categoryHeader.addEventListener("click", () => {
			if (categoryContent.style.display !== "flex") {
				categoryContent.style.display = "flex";
				categoryArrow.src = "src/picto/arrow_top_blue.png";
			} else {
				categoryContent.style.display = "none";
				categoryArrow.src = "src/picto/arrow_down_blue.png";
			}
		});
	});
}

