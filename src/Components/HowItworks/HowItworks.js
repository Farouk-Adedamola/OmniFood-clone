import React, { Fragment } from "react";
import phone from "../../Assets/phone-images/app-screen-1.png";
import phone2 from "../../Assets/phone-images/app-screen-2.png";
import phone3 from "../../Assets/phone-images/app-screen-3.png";
import classes from "./HowItworks.module.css";
const Howitworks = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <h1>how it works</h1>
        <p>your daily dose of health in 3 simple steps</p>
        <div className={classes.article}>
          <img src={phone} alt="phone" />
          <div className={classes.elements}>
            <h1>01</h1>
            <h2>Tell us what you like (and what not)</h2>
            <p>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
        </div>
        <div className={`${classes.article} ${classes.diff}`}>
          <div className={classes.wrap2}>
            <div className={classes.wrap}>
              <img src={phone2} alt="phone" />
            </div>
          </div>
          <div className={classes.elements}>
            <h1>02</h1>
            <h2>Approve your weekly meal plan</h2>
            <p>
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
        </div>
        <div className={classes.article}>
          <img src={phone3} alt="phone" />
          <div className={classes.elements}>
            <h1>03</h1>
            <h2>Receive meals at convenient time</h2>
            <p>
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Howitworks;
