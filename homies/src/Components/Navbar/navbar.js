import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#ffd900'}} light expand="md">
        <NavbarBrand href="/"  style={{fontFamily: 'Times New Roman'}} >HOMIES</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle nav >
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Transport and Moving 
                </DropdownItem>
                <DropdownItem>
                  Garden and Outdoor
                </DropdownItem>
                <DropdownItem>
                  Home Help
                </DropdownItem>
                <DropdownItem>
                  Health and Beauty
                </DropdownItem>
                <DropdownItem>
                  Multimedia
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem style={{listStyle: 'none'}} nav >
            <NavLink>Login</NavLink>
            </NavItem>
          <NavItem  style={{listStyle: 'none'}}  nav>
            <NavLink>Sign up</NavLink> 
            </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;
