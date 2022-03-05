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
        This is the superhero database. Search the name of any superheroes or
        villains of your choosing to find out various information about the
        characters.
      </p>
      <p>
        To access the database, please{" "}
        <Link to="/search" className={classes.link}>
          click here.
        </Link>{" "}
        Enjoy!
      </p>
    </section>
  );
};

export default HomePage;
