import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import Card from './components/Card'
import Tree from './helper/Tree'
import { useAppSelector } from './hooks'
import './global.scss'

function App() {
  const routeTree = useAppSelector((state) => state)
  const tree = new Tree(routeTree)
  const routes = tree.setRoutes()
  console.log(routes)
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to='/main' />} />
          <Route path={routeTree.route} element={<Card {...routeTree} />} />
          {routes.map(({ path, node }) => (
            <Route key={path} path={path} element={<Card {...node} />} />
          ))}
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
