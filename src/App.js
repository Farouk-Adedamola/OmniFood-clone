import classes from "./App.module.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <section className={classes.Navbar}>
        <Navbar />;
      </section>
    </>
  );
}

export default App;
