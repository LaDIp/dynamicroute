import produce from 'immer'
import { routeNodeAction } from './types'

const defaultState: RouteTree = {
  route: '/main',
  nodes: [
    {
      route: '/title',
      nodes: [
        { route: '/text', nodes: [], title: 'text' },
        { route: '/text2', nodes: [], title: 'text2' },
      ],
      title: 'title',
    },
  ],
  title: 'Main',
}

const routeNodeRuducer = (
  state: RouteTree = defaultState,
  action: routeNodeAction,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_NODE':
        const { path, newNode } = action.payload
        const routes = path.substring(1).split('/')

        const addNodeToTree = (
          node: RouteTree,
          routes: Array<string>,
          newNode: RouteTree,
          depth = 1,
        ) => {
          if (depth === routes.length) {
            const isNodeInTree = node.nodes.find(
              (node) => node.route === newNode.route,
            )
            if (isNodeInTree) {
              alert('This node is already in the tree')
            } else {
              node.nodes.push(newNode)
            }
          } else {
            const currentRoute = routes[depth]
            node.nodes.forEach((node) => {
              if (node.route.substring(1) === currentRoute) {
                depth += 1
                addNodeToTree(node, routes, newNode, depth)
              }
            })
          }
        }
        addNodeToTree(draft, routes, newNode)
        break
      default:
        return draft
    }
  })

export default routeNodeRuducer
