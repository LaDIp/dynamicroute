export default class Tree {
  tree: RouteTree
  constructor(tree: RouteTree) {
    this.tree = tree
  }

  setRoutes() {
    return Tree.setRoutes(this.tree, this.tree.route)
  }

  static setRoutes(
    node: RouteTree,
    path: string,
    paths: Array<{ node: RouteTree; path: string }> = [],
  ) {
    node.nodes.forEach((node) => {
      Tree.setRoutes(node, path + node.route, paths)
    })
    paths.push({
      path,
      node,
    })
    return paths
  }
}
