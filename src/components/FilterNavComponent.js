import React, { useState, useEffect, useRef } from "react";
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
  NavbarText,
} from "reactstrap";
import Toasts from "./ToastComponent";

function FilterNav(props) {
  const isSticky = props.sticky === true ? "navbar-sticky" : "";

  const navbarRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = (stickiness, guideHeight, navHeight) => {
    console.log("scrollY in here is" + window.scrollY);
    if (window.scrollY >= guideHeight) {
      if (stickiness !== true) {
        props.updateSticky(true);
        props.updateNavHeight(navHeight);
      }
    } else {
      if (stickiness !== false) {
        props.updateSticky(false);
        props.updateNavHeight(0);
      }
    }
  };

  useEffect(() => {
    var navRect = navbarRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(props.sticky, props.guideHeight, navRect.height);
    };
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [props.guideHeight, props.sticky]);

  useEffect(() => {
    var navRect = navbarRef.current.getBoundingClientRect();
    handleScroll(props.sticky, props.guideHeight, navRect.height);
  }, [props.guideHeight]);

  const Dropdowns = (props) => {
    useEffect(() => {
      var filterItems = document.querySelectorAll(".filter-item");
      for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].addEventListener("click", (ev) =>
          props.updateCriteria(
            ev.target.dataset.crittype,
            ev.target.dataset.critval
          )
        );
        if (props.valCheck(filterItems[i], props.criteria)) {
          filterItems[i].classList.add("active");
        }
      }
      var clearItems = document.querySelectorAll(".clear-item");
      for (let i = 0; i < clearItems.length; i++) {
        clearItems[i].addEventListener("click", (ev) =>
          props.clearCriteria(ev.target.dataset.critclear)
        );
      }
    }, []);

    return (
      <Nav className="navbar-nav d-flex" navbar>
        <NavItem id="guideitem" className="nav-item active">
          <NavLink
            id="guidebutton"
            role="button"
            onClick={props.collapseHandler}
          >
            Guide
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Height
          </DropdownToggle>
          <DropdownMenu id="plantheight">
            <DropdownItem
              className="filter-item"
              data-crittype="height"
              data-critval="0 to 1 foot"
            >
              0 to 1 foot
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="height"
              data-critval="1 to 3 feet"
            >
              1 to 3 feet
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="height"
              data-critval="3 to 6 feet"
            >
              3 to 6 feet
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="height"
              data-critval="6 to 9 feet"
            >
              6 to 9 feet
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="height"
              data-critval="over 9 feet"
            >
              over 9 feet
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="clear-item" data-critclear="height">
              Clear All
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Light
          </DropdownToggle>
          <DropdownMenu id="plantlight">
            <DropdownItem
              className="filter-item"
              data-crittype="light"
              data-critval="low indirect"
            >
              low indirect
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="light"
              data-critval="bright indirect"
            >
              bright indirect
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="light"
              data-critval="partial direct"
            >
              partial direct
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="light"
              data-critval="full direct"
            >
              full direct
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="clear-item" data-critclear="light">
              Clear All
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Care
          </DropdownToggle>
          <DropdownMenu id="plantcare">
            <DropdownItem
              className="filter-item"
              data-crittype="care"
              data-critval="loves neglect"
            >
              loves neglect
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="care"
              data-critval="tolerates neglect"
            >
              tolerates neglect
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="care"
              data-critval="needs attention"
            >
              needs attention
            </DropdownItem>
            <DropdownItem
              className="filter-item"
              data-crittype="care"
              data-critval="needs extra attention"
            >
              needs extra attention
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="clear-item" data-critclear="care">
              Clear All
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  };

  const RenderToasts = (props) => {
    const types = ["height", "light", "care"];
    const makeToasts = types.map((type) => {
      if (
        props.criteria &&
        props.criteria.find(function (criterium) {
          return criterium[0] == type;
        }) != undefined
      ) {
        return (
          <Toasts
            updateCriteria={props.updateCriteria}
            clearCriteria={props.clearCriteria}
            criteria={props.criteria.filter(function (criterium) {
              return criterium[0] == type;
            })}
            crittype={type}
          />
        );
      }
    });

    return (
      <div className="d-none d-lg-flex" style={{ maxWidth: 200 + "px" }}>
        <div id="toastcontainer">{makeToasts}</div>
      </div>
    );
  };

  return (
    <div id="navbarcontainer" className={isSticky} ref={navbarRef}>
      <div className="container">
        <Navbar light expand="lg">
          <NavbarBrand href="#">Plant Selector</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-between">
            <Dropdowns
              valCheck={props.valCheck}
              updateCriteria={props.updateCriteria}
              clearCriteria={props.clearCriteria}
              collapseHandler={props.collapseHandler}
              criteria={props.criteria}
            />
            <form className="form-inline navbar-nav">
              <input
                className="form-control"
                id="plantsearch"
                type="search"
                placeholder="Keyword Search"
                value={props.formValue}
                onChange={props.formControll}
              />
            </form>
          </Collapse>
          <RenderToasts
            updateCriteria={props.updateCriteria}
            clearCriteria={props.clearCriteria}
            criteria={props.criteria}
          />
        </Navbar>
      </div>
    </div>
  );
}

export default FilterNav;
