import React, { Fragment } from "react";

import { image } from "./imageData";
import classes from "./Featured.module.css";

const Featured = () => {
  return (
    <Fragment>
      <div className={classes.featured}>
        <h1>as featured in</h1>
        <article className={classes.article}>
          {image.map((images) => {
            const { id, img, css } = images;
            return (
              <img
                key={id}
                src={img}
                style={css}
                alt="img"
                className={classes.busimg}
              />
            );
          })}
        </article>
      </div>
    </Fragment>
  );
};

export default Featured;
