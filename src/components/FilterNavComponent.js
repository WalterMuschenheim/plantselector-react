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
import Toasts from './ToastComponent';

function FilterNav(props) {
    React.useEffect(() => {
        document.querySelector('.dropdown-item').addEventListener("click", function(event) {props.clickFunction(event)})
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return(
        <div id="navbarcontainer">
            <div className="container">
                
            {/*selector menu */}
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="#">Plant Selector</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar className="justify-content-between">


                        <Nav className="navbar-nav d-flex " navbar>
                            <NavItem id="guideitem" className="nav-item active">
                            <NavLink id="guidebutton" role="button" data-toggle="collapse" data-target="#carouselcollapse">Guide</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Height
                                </DropdownToggle>
                                <DropdownMenu id="plantheight">
                                    <DropdownItem className="dropdown-item" data-crittype="height" data-critval="0 to 1 foot">0 to 1 foot</DropdownItem>
                                    <DropdownItem className="dropdown-item" data-crittype="height" data-critval="1 to 3 feet">1 to 3 feet</DropdownItem>
                                    <DropdownItem className="dropdown-item" data-crittype="height" data-critval="3 to 6 feet">3 to 6 feet</DropdownItem>
                                    <DropdownItem className="dropdown-item" data-crittype="height" data-critval="6 to 9 feet">6 to 9 feet</DropdownItem>
                                    <DropdownItem className="dropdown-item" data-crittype="height" data-critval="over 9 feet">over 9 feet</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="dropdown-item" data-critclear="height">Clear All</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="nav-item dropdown">
                                <DropdownToggle nav caret>
                                Light
                                </DropdownToggle>
                                <DropdownMenu id="plantlight">
                                    <DropdownItem data-crittype="light" data-critval="low indirect">low indirect</DropdownItem>
                                    <DropdownItem data-crittype="light" data-critval="bright indirect">bright indirect</DropdownItem>
                                    <DropdownItem data-crittype="light" data-critval="partial direct">partial direct</DropdownItem>
                                    <DropdownItem data-crittype="light" data-critval="full direct">full direct</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem data-critclear="light">Clear All</DropdownItem>
                                </DropdownMenu>
                            </NavItem>
                            <NavItem className="nav-item dropdown">
                                <DropdownToggle nav caret>
                                Care
                                </DropdownToggle>
                                <DropdownMenu id="plantcare">
                                    <DropdownItem data-crittype="care" data-critval="loves neglect">loves neglect</DropdownItem>
                                    <DropdownItem data-crittype="care" data-critval="tolerates neglect">tolerates neglect</DropdownItem>
                                    <DropdownItem data-crittype="care" data-critval="needs attention">needs attention</DropdownItem>
                                    <DropdownItem data-crittype="care" data-critval="needs extra attention">needs extra attention</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem data-critclear="care">Clear All</DropdownItem>
                                </DropdownMenu>
                            </NavItem>
                        </Nav>


                        <form className="form-inline navbar-nav">
                        
                            <input className="form-control" id="plantsearch" type="search" placeholder="Keyword Search"/>
                        </form>
                    </Collapse>
                    <Toasts/>
                </Navbar>
            {/* end of selector menu */}

            
            </div>
        </div>
    )
}

export default FilterNav;