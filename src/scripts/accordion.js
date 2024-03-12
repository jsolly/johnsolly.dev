document.addEventListener("astro:page-load", initAccordion);

function initAccordion() {
	const accordionHeaders = document.querySelectorAll(".accordion-header");
	for (const header of accordionHeaders) {
		header.addEventListener("click", () => toggleAccordion(header));
	}
}

function toggleAccordion(accordionHeader) {
	const accordionItem = accordionHeader.parentElement;
	const accordionCollapse = accordionItem.querySelector(".accordion-collapse");
	const accordionBtn = accordionHeader.querySelector(".accordion-btn");
	const isExpanded = accordionCollapse.classList.toggle("expanded");

	// Update aria-expanded attribute
	accordionBtn.setAttribute("aria-expanded", isExpanded);

	// Set the height for the accordion collapse
	accordionCollapse.style.height = isExpanded
		? `${accordionCollapse.firstElementChild.scrollHeight}px`
		: "0";
}
