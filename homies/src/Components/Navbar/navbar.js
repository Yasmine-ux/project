import React, { useState } from 'react';
import './style.css';
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
    <div className='Nav'>
      <Navbar style={{backgroundColor: 'FFFFFF'}} light expand="md" className='Navbar' >
        <img alt='logo' src={require('./logo.png')} className='logo'/>
        {/* <NavbarBrand href="/"  style={{color:'#2c3792'}} >HOMIES</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink href="/components/"  style={{color:'#2c3792'}} className='navmenu'>Home</NavLink>
            </NavItem>
            <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle nav style={{color:'#2c3792'}} className='navmenu'>
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Plumbing and Painting 
                </DropdownItem>
                <DropdownItem>
                  Garden and Outdoor
                </DropdownItem>
                <DropdownItem>
                  Home help
                </DropdownItem>
                <DropdownItem>
                  Health and Beauty
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem style={{listStyle: 'none'}} nav className='login'>
            <NavLink>Login</NavLink>
            </NavItem>
          <NavItem  style={{listStyle: 'none'}} className='login' nav>
            <NavLink>Sign up</NavLink> 
            </NavItem>
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Navmenu;
