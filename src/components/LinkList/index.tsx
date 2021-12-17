import React, { useContext } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../themes'
import classNames from 'classnames'

type PropsTypes = {
  nodes: Array<RouteTree>
}

const LinkList = ({ nodes }: PropsTypes) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ul className={style.list}>
      {nodes.map((node) => (
        <Link
          className={classNames(style.list__link, {
            fb: theme === 'fb',
            wa: theme === 'wa',
          })}
          key={node.route}
          to={'.' + node.route}
        >
          {node.title}
        </Link>
      ))}
    </ul>
  )
}
export default LinkList
