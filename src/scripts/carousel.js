document.addEventListener("astro:page-load", () => {
	carouselInit();
});

function carouselInit() {
	const carouselItems = document.querySelectorAll(".carousel-item");
	if (carouselItems.length === 0) {
		// No carousel on this page
		return;
	}
	let currentCarouselIndex = 0;
	const indicators = document.querySelectorAll("[data-carousel-index]");

	const updateCarousel = () => {
		carouselItems.forEach((item, index) => {
			item.classList.toggle("block", index === currentCarouselIndex);
			item.classList.toggle("hidden", index !== currentCarouselIndex);
		});

		indicators.forEach((indicator, index) => {
			indicator.classList.toggle("bg-accent", index === currentCarouselIndex);
			indicator.classList.toggle("bg-gray-300", index !== currentCarouselIndex);
		});
	};

	// When clicking on the previous or next buttons, we want to navigate to the previous or next slide
	const navigateCarousel = (step) => {
		currentCarouselIndex =
			(currentCarouselIndex + step + carouselItems.length) %
			carouselItems.length;
		updateCarousel();
	};

	// Control event listeners
	document
		.querySelector(".carousel-control-prev")
		.addEventListener("click", () => navigateCarousel(-1));
	document
		.querySelector(".carousel-control-next")
		.addEventListener("click", () => navigateCarousel(1));

	// Indicator event listeners
	for (const indicator of indicators) {
		indicator.addEventListener("click", () => {
			currentCarouselIndex = Number(
				indicator.getAttribute("data-carousel-index"),
			);
			// When clicking on an indicator, we want to navigate to the corresponding slide
			updateCarousel();
		});
	}
}
