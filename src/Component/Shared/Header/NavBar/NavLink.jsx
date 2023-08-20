import React from 'react'
import { Nav } from 'react-bootstrap'

export default function NavLink({menu}) {
    const {menu_label, menu_url} = menu;
  return (
    <Nav.Link className="text-white fw-bold" href={menu_url}>{menu_label}</Nav.Link>
  )
}
