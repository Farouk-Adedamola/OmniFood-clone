import React, { Fragment } from "react";
import classes from "./Pricing.module.css";
import { price } from "./data";
import { BsCheckAll } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
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
            const {
              id,
              name,
              price,
              css,
              check,
              info,
              tick,
              tick2,
              tick3,
              tick4,
              value,
            } = card;
            return (
              <div key={id} style={css} className={classes.container}>
                <div
                  className={value ? `${classes.check}` : `${classes.checked}`}
                >
                  best value
                </div>
                {/* <div className={classes.checked}>best value</div> */}
                <div className={classes.head}>
                  <h2>{name}</h2>
                  <h1>
                    <span>$</span>
                    {price}
                  </h1>
                  <p>{info}</p>
                </div>
                <div className={classes.body}>
                  <p>
                    <BsCheckAll className={classes.icon} />
                    {tick}
                  </p>
                  <p>
                    <BsCheckAll className={classes.icon} />
                    {tick2}
                  </p>
                  <p>
                    <BsCheckAll className={classes.icon} />
                    {tick3}
                  </p>
                  <p>
                    {check ? (
                      <BsCheckAll className={classes.icon} />
                    ) : (
                      <MdOutlineCancelPresentation className={classes.icon} />
                    )}
                    {tick4}
                  </p>
                </div>
                <button type="button">Start eating well</button>
              </div>
            );
          })}
        </section>
        <p className={classes.last}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>
    </Fragment>
  );
};

export default Pricing;
