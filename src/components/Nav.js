import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
  return (
    <nav>
      <span className="nav__item">
        <NavLink
          to="/home"
          activeClassName="nav__item--active"
          exact>
          home
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/user"
          activeClassName="nav__item--active"
          exact>
          user
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/login"
          activeClassName="nav__item--active"
          exact>
          login
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/logout"
          activeClassName="nav__item--active"
          exact>
          logout
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/peopleList"
          activeClassName="nav__item--active"
          exact>
          peopleList
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/peopleList/peopleDetail"
          activeClassName="nav__item--active"
          exact>
          peopleDetail
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/typescript"
          activeClassName="nav__item--active"
          exact>
          typescript
        </NavLink>
      </span>
      <style jsx>{`
        .nav__item {
          padding-left: 30px;
        }
      `}</style>
    </nav>
  )
}

export default Nav
