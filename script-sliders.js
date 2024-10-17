const previousActivity = document.querySelector("#previous-activity")
const nextActivity = document.querySelector("#next-activity")
const previousDrink = document.querySelector("#previous-drink")
const nextDrink = document.querySelector("#next-drink")
const previousEat = document.querySelector("#previous-eat")
const nextEat = document.querySelector("#next-eat")

let sliderNumberActivity = 1;
nextActivity.addEventListener("click", () => {
		// j'incrémente activity et sliderNumber (ici devient 1), cache l'image en cours
		document.querySelector("#activity" + sliderNumberActivity).classList.add("hidden-image");
		// je passe à l'image suivante
		sliderNumberActivity++;	
		// si on dépasse le 3e on revient à 1
		if (sliderNumberActivity > 3) {
			sliderNumberActivity = 1;
		}
		// afficher la prochaine image
		document.querySelector("#activity" + sliderNumberActivity).classList.remove("hidden-image");
	});
	
previousActivity.addEventListener("click", () => {
		document.querySelector("#activity" + sliderNumberActivity).classList.add("hidden-image");
		sliderNumberActivity--;
		if (sliderNumberActivity <1) {
			sliderNumberActivity = 3;
		}
		document.querySelector("#activity" + sliderNumberActivity).classList.remove("hidden-image");
	});

let sliderNumberDrink = 1;
	nextDrink.addEventListener("click", () => {
		// j'incrémente activity et sliderNumber (ici devient 1), cache l'image en cours
		document.querySelector("#drink" + sliderNumberDrink).classList.add("hidden-image");
		// je passe à l'image suivante
		sliderNumberDrink++;	
		// si on dépasse le 3e on revient à 1
		if (sliderNumberDrink > 3) {
			sliderNumberDrink = 1;
		}
		// afficher la prochaine image
		document.querySelector("#drink" + sliderNumberDrink).classList.remove("hidden-image");
	});
	
	previousDrink.addEventListener("click", () => {
		document.querySelector("#drink" + sliderNumberDrink).classList.add("hidden-image");
		sliderNumberDrink--;
		if (sliderNumberDrink <1) {
			sliderNumberDrink = 3;
		}
		document.querySelector("#drink" + sliderNumberDrink).classList.remove("hidden-image");
	});

	console.log(sliderNumberDrink)
		
let sliderNumberEat = 1;
	nextEat.addEventListener("click", () => {
		// j'incrémente activity et sliderNumber (ici devient 1), cache l'image en cours
		document.querySelector("#eat" + sliderNumberEat).classList.add("hidden-image");
		// je passe à l'image suivante
		sliderNumberEat++;	
		// si on dépasse le 3e on revient à 1
		if (sliderNumberEat > 3) {
			sliderNumberEat = 1;
		}
		// afficher la prochaine image
		document.querySelector("#eat" + sliderNumberEat).classList.remove("hidden-image");
	});
	
	previousEat.addEventListener("click", () => {
		document.querySelector("#eat" + sliderNumberEat).classList.add("hidden-image");
		sliderNumberEat--;
		if (sliderNumberEat <1) {
			sliderNumberEat = 3;
		}
		document.querySelector("#eat" + sliderNumberEat).classList.remove("hidden-image");
	});

	console.log(sliderNumberEat)
	

