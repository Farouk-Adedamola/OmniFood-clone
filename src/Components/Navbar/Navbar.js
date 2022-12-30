import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from "../../Assets/logo-images/omnifood-logo.png";
import { links } from "./navData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    // const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      linksContainerRef.current.style.height = `${100}vh`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <Fragment>
      <section className={classes.container}>
        <div className={classes.header}>
          <div className={fix ? classes.scroll : classes.fixed}>
            <img src={logo} alt="logo" />
            <button type="button" onClick={() => setToggle(!toggle)}>
              <FaBars style={{ fontSize: "1.5rem" }} />
            </button>
          </div>
          <div className={classes.article} ref={linksContainerRef}>
            <ul ref={linksRef}>
              {links.map((menu) => {
                const { id, url, text } = menu;
                return (
                  <li className={classes.menu} key={id}>
                    <NavLink to={url} className={classes.NavLink}>
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;
