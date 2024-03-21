import { visit } from "unist-util-visit";

// Locally, I put localhost:4321 in the allowed hosts list
// inside a .env.local file
const relativeDomains = import.meta.env.VITE_ALLOWED_HOSTS.split(",") || [
	"johnsolly.dev",
	"www.johnsolly.dev",
];

export function remarkExternalAnchor() {
	return (tree, _) => {
		visit(tree, "link", (node) => {
			let host;
			try {
				host = new URL(node.url).host;
			} catch (_) {
				// URL might be invalid or not fully qualified, e.g., a relative URL
				host = null;
			}

			// In development, localhost is allowed; otherwise, check against allowedHosts
			if (host && !relativeDomains.includes(host)) {
				node.data ??= {};
				node.data.hProperties ??= {};
				node.data.hProperties.target = "_blank";
				node.data.hProperties.rel = "noreferrer noopener";
			}
		});
	};
}
