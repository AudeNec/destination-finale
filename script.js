const button = document.querySelectorAll(
	"#button-edimbourg, #button-bruxelles, #button-budapest, #button-valence",
);

// biome-ignore lint/complexity/noForEach: <explanation>
button.forEach((element) => {
	let clicked = false;
	const img = element.querySelector("img");
	element.addEventListener("mouseover", () => {
		if (!clicked) {
			img.src = "./src/picto/heart_full_yellow.png";
		}
	});
	element.addEventListener("mouseout", () => {
		if (!clicked) {
			img.src = "./src/picto/heart_empty_yellow.png";
		}
	});
	element.addEventListener("click", () => {
		button.forEach((btn) => {
			if (btn !== element) {
				btn.clicked = false;
				const btnImg = btn.querySelector("img");
				btnImg.src = "./src/picto/heart_empty_yellow.png";
			}
		});

		clicked = true;
		img.src = clicked
			? "./src/picto/heart_full_yellow.png"
			: "./src/picto/heart_empty_yellow.png";
	});
});
