import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";

// import classes from "./App.module.css";
//  pages
import Howitworks from "./Pages/HowItworks";
import Home from "./Pages/Home";
import Meals from "./Pages/Meals";
import Testimonial from "./Pages/Testimonial";
import Pricing from "./Pages/Pricing";
import TryForFree from "./Pages/TryForFree";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="howitworks" element={<Howitworks />} />
            <Route path="meals" element={<Meals />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="tryforfree" element={<TryForFree />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
