function initAddHeaderLinks() {
	const headers = document.querySelectorAll("h2, h3, h4");
	if (headers.length === 0) {
		// No headers on this page
		return;
	}
	for (const header of headers) {
		if (header.querySelector(".header-link")) {
			// Skip if the link already exists
			continue;
		}

		const headerId = header.getAttribute("id");
		const link = document.createElement("a");
		link.href = `#${headerId}`;
		link.innerHTML = "¶";
		link.classList.add("header-link", "opacity-0");

		// Create a span for the tooltip
		const tooltip = document.createElement("span");
		tooltip.textContent = "Copy link";
		tooltip.classList.add("header-link-tooltip", "opacity-0");

		link.appendChild(tooltip);
		header.appendChild(link);

		header.addEventListener("mouseover", () => {
			link.classList.remove("opacity-0");
			link.classList.add("no-underline");
		});

		header.addEventListener("mouseout", () => {
			link.classList.add("opacity-0");
		});

		// Show the tooltip on hover
		link.addEventListener("mouseover", () => {
			tooltip.classList.remove("opacity-0");
		});

		// Hide the tooltip when not hovering
		link.addEventListener("mouseout", () => {
			tooltip.classList.add("opacity-0");
		});

		link.addEventListener("click", (event) => {
			event.preventDefault(); // Prevent the default anchor behavior
			navigator.clipboard.writeText(link.href).then(
				() => {
					console.info(`Link URL copied to clipboard: ${linkUrl}`);
					tooltip.textContent = "Copied!"; // Update tooltip text
					setTimeout(() => {
						tooltip.textContent = "Copy link"; // Reset tooltip text after 2 seconds
					}, 1500);
				},
				(err) => {
					console.error("Unable to copy link URL: ", err);
					tooltip.textContent = "Failed to copy"; // Indicate failure on tooltip
					setTimeout(() => {
						tooltip.textContent = "Copy link"; // Reset tooltip text after 2 seconds
					}, 1500);
				},
			);
		});
	}
}

export { initAddHeaderLinks };
