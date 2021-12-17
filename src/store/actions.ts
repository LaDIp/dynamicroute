import { routeNodeAction, routeNodeActionTypes } from './types'

const routeNodeAddAction = (payload: {
  path: string
  newNode: RouteTree
}): routeNodeAction => ({
  type: routeNodeActionTypes.ADD_NODE,
  payload,
})

export default { routeNodeAddAction }
