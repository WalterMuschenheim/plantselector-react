import React from 'react';
import Toasts from './ToastComponent';

function FilterNav(props) {
    return(
        <div id="navbarcontainer">
            <div className="container">
                
            {/*selector menu */}
                <nav className="navbar navbar-light navbar-expand-lg">
                    <a className="navbar-brand" href="#">Plant Selector</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navcollapse"><span className="navbar-toggler-icon"></span></button>
                    <div id="navcollapse" className="collapse navbar-collapse justify-content-between">


                        <ul className="navbar-nav d-flex ">
                            <li id="guideitem" className="nav-item active">
                            <a className="nav-link" id="guidebutton" role="button" data-toggle="collapse" data-target="#carouselcollapse">Guide</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Height
                                </a>
                                <div id="plantheight" className="dropdown-menu">
                                    <a className="dropdown-item" data-crittype="height" data-critval="0 to 1 foot">0 to 1 foot</a>
                                    <a className="dropdown-item" data-crittype="height" data-critval="1 to 3 feet">1 to 3 feet</a>
                                    <a className="dropdown-item" data-crittype="height" data-critval="3 to 6 feet">3 to 6 feet</a>
                                    <a className="dropdown-item" data-crittype="height" data-critval="6 to 9 feet">6 to 9 feet</a>
                                    <a className="dropdown-item" data-crittype="height" data-critval="over 9 feet">over 9 feet</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" data-critclear="height">Clear All</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Light
                                </a>
                                <div id="plantlight" className="dropdown-menu">
                                    <a className="dropdown-item" data-crittype="light" data-critval="low indirect">low indirect</a>
                                    <a className="dropdown-item" data-crittype="light" data-critval="bright indirect">bright indirect</a>
                                    <a className="dropdown-item" data-crittype="light" data-critval="partial direct">partial direct</a>
                                    <a className="dropdown-item" data-crittype="light" data-critval="full direct">full direct</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" data-critclear="light">Clear All</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Care
                                </a>
                                <div id="plantcare" className="dropdown-menu">
                                    <a className="dropdown-item" data-crittype="care" data-critval="loves neglect">loves neglect</a>
                                    <a className="dropdown-item" data-crittype="care" data-critval="tolerates neglect">tolerates neglect</a>
                                    <a className="dropdown-item" data-crittype="care" data-critval="needs attention">needs attention</a>
                                    <a className="dropdown-item" data-crittype="care" data-critval="needs extra attention">needs extra attention</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" data-critclear="care">Clear All</a>
                                </div>
                            </li>
                        </ul>


                        <form className="form-inline navbar-nav">
                        
                            <input className="form-control" id="plantsearch" type="search" placeholder="Keyword Search"/>
                        </form>
                    </div>
                    <Toasts/>
                </nav>
            {/* end of selector menu */}

            
            </div>
        </div>
    )
}

export default FilterNav;