import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { useActions } from '../../hooks'
import style from './style.module.scss'
import LinkList from '../LinkList'
import { ThemeContext } from '../../themes'

type PropsTypes = RouteTree

type FormValues = {
  route: string
  title: string
}

function Card(node: PropsTypes) {
  const [theme, setTheme] = useState<Theme>('fb')
  const loaction = useLocation()
  const { routeNodeAddAction } = useActions()
  const initialValues: FormValues = { route: '', title: '' }

  useEffect(() => {
    setTheme(node.nodes.length === 0 ? 'fb' : 'wa')
  }, [node, setTheme])

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={style.card}>
        <h1 className={style.head}>{node.title}</h1>
        <Link
          className={classNames(style.back, {
            fb: theme === 'fb',
            wa: theme === 'wa',
          })}
          to={loaction.pathname.replace(node.route, '')}
        >
          Back
        </Link>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            actions.setSubmitting(false)
            actions.resetForm()
            routeNodeAddAction({
              path: loaction.pathname,
              newNode: {
                route: '/' + values.route,
                nodes: [],
                title: values.title,
              },
            })
          }}
        >
          <Form className={style.form}>
            <Field
              className={style.form__input}
              id='route'
              name='route'
              placeholder='Route'
            />
            <Field
              className={style.form__input}
              id='title'
              name='title'
              placeholder='Title'
            />
            <button
              className={classNames(style.form__submit, {
                fb: theme === 'fb',
                wa: theme === 'wa',
              })}
              type='submit'
            >
              Add Node
            </button>
          </Form>
        </Formik>
        <h1 className={style.head}>Nodes</h1>
        <LinkList nodes={node.nodes} />
      </div>
    </ThemeContext.Provider>
  )
}

export default Card
