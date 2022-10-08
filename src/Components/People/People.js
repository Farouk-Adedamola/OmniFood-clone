import React, { Fragment } from "react";
import classes from "./People.module.css";
import customer from "../../Assets/person-images/customer-1.jpg";
import customer1 from "../../Assets/person-images/customer-2.jpg";
import customer2 from "../../Assets/person-images/customer-3.jpg";
import customer3 from "../../Assets/person-images/customer-4.jpg";
import customer4 from "../../Assets/person-images/customer-5.jpg";
import customer5 from "../../Assets/person-images/customer-6.jpg";
const People = () => {
  return (
    <Fragment>
      <div className="contain">
        <section className={classes.section}>
          <img src={customer} alt="customer" className={classes.src} />
          <img src={customer1} alt="customer1" className={classes.src} />
          <img src={customer2} alt="customer2" className={classes.src} />
          <img src={customer3} alt="customer3" className={classes.src} />
          <img src={customer4} alt="customer4" className={classes.src} />
          <img src={customer5} alt="customer5" className={classes.src} />
          <p>
            <span>250,000+ </span> meals delivered last year!
          </p>
        </section>
      </div>
    </Fragment>
  );
};

export default People;
