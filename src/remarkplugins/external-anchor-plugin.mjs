import { visit } from 'unist-util-visit';

const site = "https://johnsolly.dev";

export function externalAnchorPlugin() {
  return (tree, _) => {
    visit(tree, 'link', (node) => {
      if (/^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(node.url) && !node.url.includes(site)) {
        node.data ??= {};
        node.data.hProperties ??= {};
        node.data.hProperties.target = '_blank';
        node.data.hProperties.rel = 'noreferrer noopener';
      }
    });
  }
}
