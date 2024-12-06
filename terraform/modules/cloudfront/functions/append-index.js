/**
 * CloudFront Function for Astro.js Static Sites
 *
 * This function handles two key requirements for Astro.js static sites:
 * 1. Appends /index.html to directory URLs (both with and without trailing slashes)
 *    - Required because Astro.js generates static pages as index.html files in directories
 *    - Example: /about -> /about/index.html
 *
 * 2. Handles redirects for sitemap files
 *    - Astro.js generates sitemap files with different naming conventions
 *    - Redirects common sitemap.xml requests to the actual generated files
 */
function handler(event) {
	const request = event.request;
	const uri = request.uri;

	if (uri === "/sitemap.xml") {
		return {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: { value: "/sitemap-index.xml" },
			},
		};
	}
	if (uri === "/sitemap_index.xml") {
		return {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: { value: "/sitemap-0.xml" },
			},
		};
	}

	if (uri.endsWith("/")) {
		request.uri += "index.html";
	} else if (!uri.includes(".")) {
		request.uri += "/index.html";
	}

	return request;
}
