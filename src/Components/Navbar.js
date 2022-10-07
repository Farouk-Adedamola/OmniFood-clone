import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from "../Assets/logo-images/omnifood-logo.png";
import "./Navbar.css";
import { links } from "./navData";
import { FaBars } from "react-icons/fa";

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
      <section className="container">
        <div className="header">
          <img src={logo} alt="logo" />
          <button type="button" onClick={() => setToggle(!toggle)}>
            <FaBars />
          </button>
        </div>
        <div className="article" ref={linksContainerRef}>
          <ul className="unordered" ref={linksRef}>
            {links.map((menu) => {
              const { id, url, text } = menu;
              return (
                <li className="menu" key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;
