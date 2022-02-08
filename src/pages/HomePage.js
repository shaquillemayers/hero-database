/* 
  This page renders the home page, which can also be access via the By Bits logo
*/

import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";

const HomePage = () => {
  // Home page, prompt to log in, unless already logged in.
  return (
    <section className={classes.homepage}>
      <h1>Welcome!</h1>
      <p>
        To access hero database, please{" "}
        <Link to="/search" className={classes.link}>
          click here
        </Link>
      </p>
    </section>
  );
};

export default HomePage;
