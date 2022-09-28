/* 
  This component takes the hero name as an input and fetches based on that input.
  In future this may also be able to filter via place of birth and age.
  I will also improve the css.
*/

import { useState, useRef, Fragment } from "react";

import classes from "./HeroForm.module.css";

const HeroForm = () => {
  // Used to conditionally render text below
  const [heroData, setHeroData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fn that resets heroData state
  const resetUserData = () => {
    setHeroData([]);
    setError("");
    setIsLoading(false);
  };

  // Grab input refs
  const nameInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Assign inputs to ref values
    const enteredHeroName = nameInputRef.current.value;

    // validation would go here

    const fetchHeroId = async () => {
      try {
        // reset state
        resetUserData();
        setIsLoading(true);

        // fetch based on entered Hero name
        const response = await fetch(
          `https://shielded-dusk-39150.herokuapp.com/https://www.superheroapi.com/api/10166146687505061/search/${enteredHeroName}`,
          {
            method: "GET",
          }
        );
        // Handle unsuccessful response
        if (!response.ok) {
          setIsLoading(false);
          setError("Oops! There was a problem fetching this info");
          throw new Error("Something went wrong fetching this information");
        } else {
          setIsLoading(false);
        }

        const data = await response.json();
        console.log(data);

        if (data.response === "success") {
          // asign results to Hero Data, if fetch is successful
          setHeroData(data.results);
        } else {
          console.log(data.error);
          setError(data.error);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchHeroId();
  };

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>Search</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.form}>
            <label htmlFor="name">Hero Name</label>
            <input ref={nameInputRef} type="text" id="name" required />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button>Search</button>}
            {isLoading && <p>Loading...</p>}
            <p>{!error ? "Please enter hero details" : error}</p>
          </div>
        </form>
      </section>

      {/* Display heros if Hero Data exists */}
      {heroData && (
        <div>
          {heroData.map((hero) => {
            if (hero) {
              return (
                <section key={hero.id} className={classes.wrapper}>
                  <h2>{hero.name}</h2>
                  <div className={classes.details}>
                    <img
                      className={classes["hero-img"]}
                      src={`${hero.image.url}`}
                      alt={`${
                        hero.biography["full-name"] !== ""
                          ? hero.biography["full-name"]
                          : hero.name
                      }`}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "no-superhero.png";
                        currentTarget.innerHTML = "";
                      }}
                    />

                    <div className={classes["hero-info"]}>
                      <span>Real name: </span>{" "}
                      <p> {hero.biography["full-name"]}</p>
                      <span>Place of birth: </span>{" "}
                      <p>{hero.biography["place-of-birth"]}</p>
                      <span>Work: </span>
                      <p>{hero.work.occupation}</p>
                    </div>

                    <h3 style={{ textDecoration: "underline" }}>Powers </h3>

                    <div className={classes["skills-wrapper"]}>
                      {Object.entries(hero.powerstats).map(([key, value]) => (
                        <li key={Math.random() * hero.id}>
                          {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
                          <div className={classes.skill}>
                            <div className={classes.outer}>
                              <div className={classes.inner}>
                                <div className={classes.number}>
                                  {value === "null" ? "null" : value + "%"}
                                </div>
                              </div>
                            </div>
                            {value !== "null" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                width="130px"
                                height="130px"
                              >
                                <defs>
                                  <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                  </linearGradient>
                                </defs>
                                <circle
                                  cx="80"
                                  cy="80"
                                  r="35"
                                  strokeLinecap="round"
                                  strokeDashoffset={
                                    value === "null"
                                      ? 220
                                      : Number(223 + 223 * (1 - value / 100)) // 223
                                  }
                                />
                              </svg>
                            )}
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>
                </section>
              );
            }
            return <p>No heroes found</p>;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default HeroForm;
