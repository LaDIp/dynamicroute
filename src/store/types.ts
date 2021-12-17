export enum routeNodeActionTypes {
  ADD_NODE = 'ADD_NODE',
}

type routeNodeAddAction = {
  type: routeNodeActionTypes.ADD_NODE
  payload: {
    path: string
    newNode: RouteTree
  }
}

export type routeNodeAction = routeNodeAddAction
