import React from 'react'
import { MenuList } from './MenuList'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const menuList = MenuList.map(({ url, title }, index) => {

    return (
      <li key={index} className="nav-item active">
        <NavLink className="nav-link" exact to={url} > {title} </NavLink>
      </li>
    )
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          { menuList }
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
