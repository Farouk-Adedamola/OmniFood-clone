import classes from "./App.module.css";
import Navbar from "./Components/Navbar";
import Featured from "./Components/belowHeader/Featured";
import HowItworks from "./Components/HowItworks/HowItworks";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <>
      <section className={classes.Navbar}>
        <Navbar />;
        <Featured />
        <HowItworks />
        <Meals />
      </section>
    </>
  );
}

export default App;
