import React, { Fragment } from "react";
import classes from "./Advantages.module.css";
import { Advantage } from "./data";
import { BiInfinite } from "react-icons/bi";
import { GiShinyApple } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { AiOutlinePauseCircle } from "react-icons/ai";

const Advantages = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        {Advantage.map((advantage) => {
          const { name, id, apple, pause, leaf, infinite, info } = advantage;
          return (
            <div key={id} className={classes.container}>
              <div>{infinite && <BiInfinite className={classes.wrap} />}</div>
              <div>{apple && <GiShinyApple className={classes.wrap} />}</div>
              <div>{leaf && <FaLeaf className={classes.wrap} />}</div>
              <div>
                {pause && <AiOutlinePauseCircle className={classes.wrap} />}
              </div>
              <div className={classes.info}>
                <h1>{name}</h1>
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </main>
    </Fragment>
  );
};

export default Advantages;
