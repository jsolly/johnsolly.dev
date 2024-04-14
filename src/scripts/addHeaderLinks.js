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
			"0.3s",
			"ease-in-out",
		);
		link.innerHTML = "¶";
		header.appendChild(link);
		link.addEventListener("click", (event) => {
			event.preventDefault(); // Prevent the default anchor behavior
			const linkUrl = window.location.href.split("#")[0] + link.href;
			navigator.clipboard.writeText(linkUrl).then(
				() => {
					console.info(`Link URL copied to clipboard: ${linkUrl}`);
				},
				(err) => {
					console.info("Unable to copy link URL: ", err);
				},
			);
		});
	}
}

// Run the function on initial load as well
addHeaderLinks();
