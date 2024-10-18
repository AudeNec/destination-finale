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
	"Capitale de la Hongrie, Budapest est traversée par le Danube qui sépare la ville en Buda (rive droite) et Pest (rive gauche). Elle offre une combinaison unique de cultures diverses, une cuisine raffinée et un large éventail d’activités de loisirs.",
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
			.querySelector(".fichecity a")
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
