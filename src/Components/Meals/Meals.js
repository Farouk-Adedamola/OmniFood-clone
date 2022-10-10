import React, { Fragment } from "react";
import { meal, list } from "./Mealsdata";
import classes from "./Meals.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { FaSuperpowers } from "react-icons/fa";
import { BiRegistered } from "react-icons/bi";
import { BsCheckAll, BsBoxArrowInRight } from "react-icons/bs";
const Meals = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <h1>meals</h1>
        <h2>Omnifood AI chooses from 5,000+ recipes</h2>
      </main>

      <section className={classes.section}>
        <div className={classes.card}>
          {meal.map((meal) => {
            const {
              id,
              img,
              type,
              dish,
              number,
              type2,
              calories,
              nutri,
              rate,
            } = meal;
            return (
              <div key={id} className={classes.container}>
                <img src={img} alt="img" />
                <div className={classes.contain}>
                  <div className={classes.type}>
                    <h1>{type}</h1>
                    <h1 className={classes.second}>{type2}</h1>
                  </div>
                  <div className={classes.wrapper}>
                    <h2>{dish}</h2>
                    <p>
                      <FaSuperpowers className={classes.p1} />
                      {calories}
                    </p>
                    <p>
                      <GiKnifeFork className={classes.p1} />
                      {nutri}
                      <BiRegistered className={classes.p2} />
                      {number}
                    </p>
                    <p>
                      <AiOutlineStar className={classes.p1} />
                      {rate}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={classes.list}>
            <h1>Works with any diet</h1>
            {list.map((list) => {
              const { id, name } = list;
              return (
                <div key={id} className={classes.items}>
                  <p>
                    <BsCheckAll className={classes.check} />
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.last}>
          <p className={classes.link}>
            <a href="">see all recipes</a>
            <BsBoxArrowInRight className={classes.right} />
          </p>
          <div className={classes.underline}></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Meals;
