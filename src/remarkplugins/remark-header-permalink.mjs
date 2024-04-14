// Decided against this plugin because heading ids are not added until after this plugin runs
// Instead we add the headings during runtime in the MarkdownProjectLayout component
import { visit } from "unist-util-visit";

export function remarkHeaderPermalink() {
	return (tree) => {
		visit(tree, "heading", (node) => {
			// Ensure node.data and node.data.hProperties are initialized
			if (!node.data) node.data = {};
			if (!node.data.hProperties) node.data.hProperties = {};

			// Add the group class to the heading so it can reveal the link on hover
			node.data.hProperties.className = (
				node.data.hProperties.className || []
			).concat("group");
			console.info(node.data);
			const id = node.data.id;
			const linkHtml = `<a href="#${id}" class="header-link no-underline ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">¶</a>`;

			// Append the link to the heading
			node.children.push({
				type: "html",
				value: linkHtml,
			});
		});
	};
}
