const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const button = document.querySelectorAll(
	"#button-edimbourg, #button-bruxelles, #button-budapest, #button-valence",
);
const buttons = document.querySelectorAll("button");
const cardcity = document.querySelector(".city");
const arrLogo = [
	"./src/logo-villes/kilt_blue.png",
	"./src/logo-villes/fries_blue.png",
	"./src/logo-villes/thermal_blue.png",
	"./src/logo-villes/fan_blue.png",
];
const arrTitle = ["Edimbourg", "Bruxelles", "Budapest", "Valence"];
const arrParag = [
	"Blabla1",
	"Découvrez la capitale de la Belgique qui allie richesse historique, carrefour culturel et ambiance cosmopolite, au cœur de l'Europe.",
	"Blabla3",
	"Dotée d'un patrimoine architectural remarquable, la ville est notamment connue pour sa Cité des arts et des sciences, à l'architecture futuriste.",
];
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
const welcome = document.querySelector("#welcome");
const footer = document.querySelector("footer");
const categorySections = document.querySelectorAll("main section.category");
const screen = getComputedStyle(document.body)
	.getPropertyValue("--screen")
	.replace(/\W/g, "");
const navDestination = document.querySelector("nav-destination");

// Remplissage des coeurs

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

document.addEventListener("click", (event) => {
	let clickedbutton = false;

	// biome-ignore lint/complexity/noForEach: <explanation>
	buttons.forEach((btn) => {
		if (btn.contains(event.target)) {
			clickedbutton = true;
		}
	});

	if (!clickedbutton) {
		welcome.style.display = "flex";
		cardcity.style.display = "none";
		// biome-ignore lint/complexity/noForEach: <explanation>
		button.forEach((btn) => {
			const btnImg = btn.querySelector("img");
			btnImg.src = "./src/picto/heart_empty_yellow.png";
			btn.clicked = false;
		});
	}
});
// Ouverture des catégories

if (screen === "desktop") {
	// biome-ignore lint/complexity/noForEach: <explanation>
	categorySections.forEach((categorySection) => {
		const categoryHeader = categorySection.querySelector("header");
		const categoryContent = categorySection.querySelector("ul");
		const categoryArrow = categorySection.querySelector("#arrow");
		categoryHeader.addEventListener("click", () => {
			if (categoryContent.classList.contains("hidden")) {
				categoryContent.classList.replace("hidden", "open");
				categoryArrow.src = "src/picto/arrow_top_blue.png";
			} else {
				categoryContent.classList.replace("open", "hidden");
				categoryArrow.src = "src/picto/arrow_down_blue.png";
			}
		});
	});
}
