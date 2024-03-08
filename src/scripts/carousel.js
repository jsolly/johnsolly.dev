document.addEventListener("DOMContentLoaded", () => {
	let currentCarouselIndex = 0;
	let previousActiveIndex = 0;
	const carouselItems = document.querySelectorAll(".carousel-item");
	const indicators = document.querySelectorAll("[data-carousel-index]");

	// Function to update the visibility of carousel items and the active indicator
	const updateCarousel = () => {
		if (previousActiveIndex !== currentCarouselIndex) {
			// Hide the previously visible item, if it exists
			carouselItems[previousActiveIndex].classList.add("hidden");
			carouselItems[previousActiveIndex].classList.remove("block");

			// Remove the background color from the previously active indicator
			indicators[previousActiveIndex].classList.remove("bg-accent");
			indicators[previousActiveIndex].classList.add("bg-gray-300");
		}

		// Show the current item
		carouselItems[currentCarouselIndex].classList.add("block");
		carouselItems[currentCarouselIndex].classList.remove("hidden");

		// Add the background color to the active indicator
		indicators[currentCarouselIndex].classList.remove("bg-gray-300");
		indicators[currentCarouselIndex].classList.add("bg-accent");

		// Update the previously visible item index
		previousActiveIndex = currentCarouselIndex;
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

	updateCarousel();
});
