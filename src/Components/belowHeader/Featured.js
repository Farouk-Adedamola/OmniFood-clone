import React, { Fragment } from "react";
// import techcrunch from "../../Assets/logo-images/techcrunch.png";
// import businessinsider from "../../Assets/logo-images/business-insider.png";
// import newyorktimes from "../../Assets/logo-images/the-new-york-times.png";
// import forbes from "../../Assets/logo-images/forbes.png";
// import usatoday from "../../Assets/logo-images/usa-today.png";
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
