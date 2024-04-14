document.addEventListener("astro:page-load", addHeaderLinks);

function addHeaderLinks() {
	const headers = document.querySelectorAll("h2, h3, h4");
	for (const header of headers) {
		if (header.querySelector(".header-link")) {
			// Skip if the link already exists
			continue;
		}
		// Add the class 'group' to each header to enable group-hover
		// for the permalink icon
		header.classList.add("group");

		const headerId = header.getAttribute("id");
		const link = document.createElement("a");
		link.href = `#${headerId}`;
		link.classList.add(
			"header-link",
			"no-underline",
			"ml-1",
			"opacity-0",
			"group-hover:opacity-100",
			"transition-opacity",
			"duration-300",
			"ease-in-out",
			"relative",
		);

		// Create a span for the tooltip
		const tooltip = document.createElement("span");
		tooltip.textContent = "Copy link";
		tooltip.classList.add(
			"tooltip",
			"absolute",
			"invisible",
			"bg-black",
			"text-white",
			"text-xs",
			"py-1",
			"px-2",
			"rounded",
			"whitespace-nowrap",
			"left-1/2",
			"transform",
			"-translate-x-1/2",
			"translate-y-[-25px]",
			"opacity-0",
			"transition-opacity",
			"duration-300",
			"ease-in-out",
		);

		link.innerHTML = "¶";
		link.appendChild(tooltip); // Append the tooltip to the link
		header.appendChild(link);

		// Show the tooltip on hover
		link.addEventListener("mouseover", () => {
			tooltip.classList.remove("invisible", "opacity-0");
			tooltip.classList.add("opacity-100");
		});

		// Hide the tooltip when not hovering
		link.addEventListener("mouseout", () => {
			tooltip.classList.add("invisible", "opacity-0");
			tooltip.classList.remove("opacity-100");
		});

		link.addEventListener("click", (event) => {
			event.preventDefault(); // Prevent the default anchor behavior
			const linkUrl = window.location.href.split("#")[0] + link.href;
			navigator.clipboard.writeText(linkUrl).then(
				() => {
					console.info(`Link URL copied to clipboard: ${linkUrl}`);
					tooltip.textContent = "Copied!"; // Update tooltip text
					setTimeout(() => {
						tooltip.textContent = "Copy link"; // Reset tooltip text after 2 seconds
					}, 2000);
				},
				(err) => {
					console.error("Unable to copy link URL: ", err);
					tooltip.textContent = "Failed to copy"; // Indicate failure on tooltip
					setTimeout(() => {
						tooltip.textContent = "Copy link"; // Reset tooltip text after 2 seconds
					}, 2000);
				},
			);
		});
	}
}

// Run the function on initial load as well
addHeaderLinks();
