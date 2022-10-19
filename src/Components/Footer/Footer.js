import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../Assets/logo-images/omnifood-logo.png";
const Footer = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.area}>
          <div className={`${classes.section} ${classes.a}`}>
            <p>Account</p>
            <ul>
              <li>
                <a href="/">create account</a>
              </li>
              <li>
                <a href="/">sign in</a>
              </li>
              <li>
                <a href="/">android app</a>
              </li>
              <li>
                <a href="/">iOS app</a>
              </li>
            </ul>
          </div>

          <div className={`${classes.section} ${classes.b}`}>
            <p>company</p>
            <ul>
              <li>
                <a href="/">about omnifood</a>
              </li>
              <li>
                <a href="/">for business</a>
              </li>
              <li>
                <a href="/">cooking partners</a>
              </li>
              <li>
                <a href="/">careers</a>
              </li>
            </ul>
          </div>

          <div className={`${classes.section} ${classes.c}`}>
            <p>resources</p>
            <ul>
              <li>
                <a href="/">Recipe directory</a>
              </li>
              <li>
                <a href="/">help center</a>
              </li>
              <li>
                <a href="/">privacy & terms</a>
              </li>
            </ul>
          </div>
          <article className={classes.article}>
            <div className={`${classes.last} ${classes.d}`}>
              <img src={logo} alt="logo" />
              <div className={classes.space}>
                <ul className={classes.images}>
                  <li>
                    <a href="/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
                <p className={classes.copy}>
                  Copyright © 2022 by Omnifood, Inc. All rights reserved.
                </p>
              </div>
            </div>

            <div className={`${classes.last} ${classes.e}`}>
              <p>contact us</p>
              <ul>
                <li>
                  <a href="/">
                    623 Harrison St., 2nd Floor, San Francisco, CA 94107
                  </a>
                </li>
                <li>
                  <a href="/">415-201-6370 faroukadedamola1@gmail.com</a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>
    </Fragment>
  );
};

export default Footer;
