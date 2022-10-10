import classes from "./App.module.css";
import Navbar from "./Components/Navbar";
import Featured from "./Components/belowHeader/Featured";
import HowItworks from "./Components/HowItworks/HowItworks";
function App() {
  return (
    <>
      <section className={classes.Navbar}>
        <Navbar />;
        <Featured />
        <HowItworks />
      </section>
    </>
  );
}

export default App;
