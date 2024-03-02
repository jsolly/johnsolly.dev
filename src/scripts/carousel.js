document.addEventListener("DOMContentLoaded", () => {
	let currentCarouselIndex = 0;
	const carouselItems = document.querySelectorAll(".carousel-item");
	const indicators = document.querySelectorAll("[data-carousel-index]");

	// Function to update the visibility of carousel items and the active indicator
	const updateCarousel = () => {
		carouselItems.forEach((item, index) => {
			if (index === currentCarouselIndex) {
				item.classList.add("block");
				item.classList.remove("hidden");
			} else {
				item.classList.add("hidden");
				item.classList.remove("block");
			}
		});

		indicators.forEach((indicator, index) => {
			if (index === currentCarouselIndex) {
				indicator.classList.add("bg-blue-600");
				indicator.classList.remove("bg-gray-300");
			} else {
				indicator.classList.add("bg-gray-300");
				indicator.classList.remove("bg-blue-600");
			}
		});
	};

	// Function to move carousel to the next or previous item
	const changeCarouselItem = (step) => {
		currentCarouselIndex =
			(currentCarouselIndex + step + carouselItems.length) %
			carouselItems.length;
		updateCarousel();
	};

	// Event listeners for previous and next controls
	const prevControl = document.querySelector(".carousel-control-prev");
	const nextControl = document.querySelector(".carousel-control-next");

	prevControl.addEventListener("click", () => changeCarouselItem(-1));
	nextControl.addEventListener("click", () => changeCarouselItem(1));

	// Event listeners for carousel indicators
	// When an indicator is clicked, update the carousel to show the corresponding item
	for (const indicator of indicators) {
		indicator.addEventListener("click", () => {
			const index = parseInt(indicator.getAttribute("data-carousel-index"), 10);
			currentCarouselIndex = index;
			updateCarousel();
		});
	}

	// Initialize the carousel display
	updateCarousel();
});
