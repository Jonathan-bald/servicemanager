import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';


const Navbar = () => {
    return (
              <div className='bg-dark'>
                <Nav>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/cars/:id">Vehicles Serviced</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                </Nav>
              </div>
            );
          }

export default Navbar

