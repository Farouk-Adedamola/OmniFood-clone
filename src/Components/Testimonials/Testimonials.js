import React, { Fragment } from "react";
import classes from "./Testimonial.module.css";
import { testimonials, images } from "./data";
import { BsDash } from "react-icons/bs";

const Testimonials = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <main className={classes.main}>
          <h1>TESTIMONIALS</h1>
          <h2>Once you try it, you can't go back.</h2>
        </main>
        <article className={classes.article}>
          {testimonials.map((test) => {
            const { id, img, name, text } = test;
            return (
              <nav key={id} className={classes.contain}>
                <img src={img} alt="img" />
                <p>{text}</p>
                <p className={classes.icon}>
                  <BsDash />
                  {name}
                </p>
              </nav>
            );
          })}
          <div className={classes.container}>
            {images.map((image) => {
              const { id, img } = image;
              return (
                <div key={id} className={classes.images}>
                  <img src={img} alt="img" />
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Testimonials;
