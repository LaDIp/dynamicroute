type RouteTree = {
  route: string
  nodes: Array<RouteTree>
  title: string
}

type Theme = 'fb' | 'wa'

type ThemeContext = { theme: Theme }
