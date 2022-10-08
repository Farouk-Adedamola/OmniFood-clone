import React, { Fragment } from "react";
import People from "../People/People";
import classes from "./HeaderText.module.css";

import { BsBoxArrowDown } from "react-icons/bs";

const HeaderText = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>A healthy meal delivered to your door, every single day</h1>
        <p>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
      </div>
      <div className={classes.buttons}>
        <button type="button">Start eating well</button>
        <button type="button">
          Learn More
          <BsBoxArrowDown className={classes.boxArrow} />
        </button>
      </div>
      <People />
    </Fragment>
  );
};

export default HeaderText;
