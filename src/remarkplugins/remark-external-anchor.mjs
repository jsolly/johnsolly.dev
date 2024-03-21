import { visit } from "unist-util-visit";

const allowedHosts = ["johnsolly.dev", "www.johnsolly.dev"];

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

			// Check against allowedHosts
			if (host && !allowedHosts.includes(host)) {
				node.data ??= {};
				node.data.hProperties ??= {};
				node.data.hProperties.target = "_blank";
				node.data.hProperties.rel = "noreferrer noopener";
			}
		});
	};
}
