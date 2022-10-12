import classes from "./App.module.css";
import Navbar from "./Components/Navbar";
import Featured from "./Components/belowHeader/Featured";
import HowItworks from "./Components/HowItworks/HowItworks";
import Meals from "./Components/Meals/Meals";
import Testimonials from "./Components/Testimonials/Testimonials";
import Pricing from "./Components/Pricing/Pricing";
import Advantages from "./Components/Advantages/Advantages";
function App() {
  return (
    <>
      <section className={classes.components}>
        <Navbar />
        <Featured className={classes.featured} />
        <HowItworks />
        <Meals />
        <Testimonials />
        <Pricing />
        <Advantages />
      </section>
    </>
  );
}

export default App;
