const carouselItems = document.querySelectorAll(".carousel-item");
if (carouselItems.length > 0) {
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

	const navigateCarousel = (step) => {
		currentCarouselIndex =
			(currentCarouselIndex + step + carouselItems.length) %
			carouselItems.length;
		updateCarousel();
	};

	document
		.querySelector(".carousel-control-prev")
		.addEventListener("click", () => navigateCarousel(-1));
	document
		.querySelector(".carousel-control-next")
		.addEventListener("click", () => navigateCarousel(1));

	for (const indicator of indicators) {
		indicator.addEventListener("click", () => {
			currentCarouselIndex = Number(
				indicator.getAttribute("data-carousel-index"),
			);
			updateCarousel();
		});
	}
}
