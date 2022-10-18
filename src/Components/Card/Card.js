import React, { Fragment, useState } from "react";
import classes from "./Card.module.css";
import image from "../../Assets/menu-images/gallery-9.jpg";

const Card = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email) {
      const persons = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
      };
      setData([...persons], [name], [email]);
    }
    setEmail("");
    setName("");
  };
  return (
    <Fragment>
      <section className={classes.section}>
        <main className={classes.main}>
          <div className={classes.image}>
            <img src={image} alt="" />
          </div>
          <div className={classes.container}>
            <div className={classes.texts}>
              <h1>Get your first meal free!</h1>
              <p>
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
            </div>
            <form onSubmit={submitHandler}>
              <label>Full Name: </label>
              <input
                type="text"
                value={name}
                placeholder="farouk adedamola"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email Address: </label>
              <input
                className={classes.email}
                type="email"
                value={email}
                placeholder="me@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Where did you hear about us? </label>
              <select name="find" id="">
                <option value="">please choose any option</option>
                <option value="">friends and family</option>
                <option value="">youtube video</option>
                <option value="">podcasts</option>
                <option value="">facebook ad</option>
                <option value="">others</option>
              </select>
              <button type="submit">sign up now</button>
            </form>
          </div>
        </main>
      </section>
    </Fragment>
  );
};

export default Card;
