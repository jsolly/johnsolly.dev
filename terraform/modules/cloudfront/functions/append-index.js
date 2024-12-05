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
