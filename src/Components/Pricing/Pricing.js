import React, { Fragment } from "react";
import classes from "./Pricing.module.css";
import { price } from "./data";
const Pricing = () => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h1>pricing</h1>
          <h2>Eating well without breaking the bank</h2>
        </div>
        <section className={classes.section}>
          {price.map((card) => {
            const { id, name, price, css, info, tick, tick2, tick3, tick4 } =
              card;
            return (
              <div key={id} style={css} className={classes.container}>
                <div className={classes.head}>
                  <h2>{name}</h2>
                  <h1>
                    <span>$</span>
                    {price}
                  </h1>
                </div>
                <div className={classes.body}>
                  <p>{info}</p>
                  <p>{tick}</p>
                  <p>{tick2}</p>
                  <p>{tick3}</p>
                  <p>{tick4}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </Fragment>
  );
};

export default Pricing;
