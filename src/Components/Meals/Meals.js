import React, { Fragment } from "react";
import { meal, list } from "./Mealsdata";
import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <main className={classes.main}>
          <h1>meals</h1>
          <h2>Omnifood AI chooses from 5,000+ recipes</h2>
        </main>

        <div className={classes.card}>
          {meal.map((meal) => {
            const { id, img, type, dish, type2, calories, nutri, rate } = meal;
            return (
              <div key={id} className={classes.container}>
                <img src={img} alt="img" />
                <div className={classes.type}>
                  <h1>{type}</h1>
                  <h1>{type2}</h1>
                </div>
                <h2>{dish}</h2>
                <div>
                  <p>{calories}</p>
                  <p>{nutri}</p>
                  <p>{rate}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.list}>
          {list.map((list) => {
            const { id, name } = list;
            return (
              <div key={id}>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Meals;
