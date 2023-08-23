import React, { useContext, useEffect } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../../Context/ContextProvider';
import NavLink from './NavLink';


export default function NavBar() {
  const {menu,subMenu} = useContext(AuthContext);

  const titleStyle = {
    color: "white"
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="text-white fw-bold" style={{backgroundColor:"#229ba3"}}>
    <Container>
      <Navbar.Toggle className="white" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {
            menu.map((menu) =>  subMenu[menu.id] ? 
            <NavDropdown className="my-dropdown-title" style={titleStyle} key={menu.id} title={menu.menu_label} id="collasible-nav-dropdown">
              {
                subMenu[menu.id].map(subMenuItem => <NavDropdown.Item key={subMenuItem.id} href={subMenuItem.url}>{subMenuItem.submenu_label}</NavDropdown.Item>)
              }
            </NavDropdown>
            :
            <NavLink key={menu.id} menu={menu}/> 
          
          )}
        </Nav>
        <Nav>
          <Nav.Link href="#deets" className="text-white fw-bold">Publication</Nav.Link>
          <Nav.Link href="#deets" className="text-white fw-bold">Information</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
