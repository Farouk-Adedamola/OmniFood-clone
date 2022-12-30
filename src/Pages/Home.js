import React, { Fragment } from "react";
import classes from "./Home.module.css";
import HeaderText from "../Components/header-texts/HeaderText";
import Featured from "../Components/belowHeader/Featured";
import HowItworks from "../Components/HowItworks/HowItworks";
import Meals from "../Components/Meals/Meals";
import Testimonials from "../Components/Testimonials/Testimonials";
import Pricing from "../Components/Pricing/Pricing";
import Advantages from "../Components/Advantages/Advantages";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.components}>
        <HeaderText />
        <Featured className={classes.featured} />
        <HowItworks />
        <Meals />
        {/* <Testimonials /> */}
        <Pricing />
        <Advantages />
        <Card />
        {/* <Footer /> */}
      </section>
    </Fragment>
  );
};

export default Home;
