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
              <NavLink href="/home"  style={{color:'#2c3792'}} className='navmenu'>Home</NavLink>
            </NavItem>
            
            <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle nav style={{color:'#2c3792'}} className='navmenu'>
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='plumbing'>
                  Plumbing and Painting 
                </DropdownItem>
                <DropdownItem href='gardenoutdoor'>
                  Garden and Outdoor
                </DropdownItem>
                <DropdownItem href='homehelp'>
                  Home Help
                </DropdownItem>
                <DropdownItem href='healthbeauty'>
                  Health and Beauty
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem style={{listStyle: 'none'}} nav className='login'>
            <NavLink href='/login'>Login</NavLink>
            </NavItem>
              <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle nav style={{color:'#2c3792'}} className='navmenu'>
                Sing up
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='register'>
                  Client 
                </DropdownItem>
                <DropdownItem href='registerserver'>
                  Service Provider
                </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Navmenu;
