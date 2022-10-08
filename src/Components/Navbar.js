import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from "../Assets/logo-images/omnifood-logo.png";
import { links } from "./navData";
import { FaBars } from "react-icons/fa";
import HeaderText from "./header-texts/HeaderText";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);
  return (
    <Fragment>
      <section className={classes.container}>
        <div className={classes.header}>
          <div className={classes.fixed}>
            <img src={logo} alt="logo" />
            <button type="button" onClick={() => setToggle(!toggle)}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className={classes.article} ref={linksContainerRef}>
          <ul ref={linksRef}>
            {links.map((menu) => {
              const { id, url, text } = menu;
              return (
                <li className={classes.menu} key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <HeaderText />
      </section>
    </Fragment>
  );
};

export default Navbar;
