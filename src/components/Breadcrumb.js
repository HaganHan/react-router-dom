import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getBreadcrumbList } from '~src/common/tools'

const Breadcrumb = props => {
  const location = useLocation()
  const breadcrumbList = getBreadcrumbList(location.pathname)
  console.log(breadcrumbList)
  return (
    <article>
      <NavLink
        style={{ textDecorationLine: 'none' }}
        to={{ pathname: '/' }}>
        首页
      </NavLink>
      &nbsp;/&nbsp;
      {
        breadcrumbList.map((item, index) => {
          if (index === breadcrumbList.length - 1) {
            return (
              <span key={index}>{item.title}</span>
            )
          }
          return (
            <span key={index}>
              <NavLink
                style={{ textDecorationLine: 'none' }}
                to={{ pathname: item.path }}>
                {item.title}
              </NavLink>
              &nbsp;/&nbsp;
            </span>
          )
        })
      }
    </article>
  )
}

export default Breadcrumb
