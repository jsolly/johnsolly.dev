function initAccordion() {
	const accordionHeaders = document.querySelectorAll(".accordion-header");
	if (accordionHeaders.length === 0) {
		return;
	}
	for (const header of accordionHeaders) {
		header.addEventListener("click", () => toggleAccordion(header));
	}
}

function toggleAccordion(accordionHeader) {
	const accordionItem = accordionHeader.parentElement;
	const accordionCollapse = accordionItem.querySelector(".accordion-collapse");
	const accordionBtn = accordionHeader.querySelector(".accordion-btn");
	const isExpanded = accordionCollapse.classList.toggle("expanded");

	accordionBtn.setAttribute("aria-expanded", isExpanded);

	accordionCollapse.style.height = isExpanded
		? `${accordionCollapse.firstElementChild.scrollHeight}px`
		: "0";
}

// Self-execute
initAccordion();
