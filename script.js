const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const button = document.querySelectorAll(
	"#button-edimbourg, #button-bruxelles, #button-budapest, #button-valence",
);
const footer = document.querySelector("footer");
const categorySections = document.querySelectorAll("main section.category");
const screen = getComputedStyle(document.body)
	.getPropertyValue("--screen")
	.replace(/\W/g, "");

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

// Remplissage des coeurs

// biome-ignore lint/complexity/noForEach: <explanation>
button.forEach((element) => {
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
