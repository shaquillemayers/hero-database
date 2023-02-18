import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["social-media-icons"]}>
        <p>Let me know how you get on:</p>
        <ul className={classes["social-ul"]}>
          <li
            className={classes["social-box"]}
            onClick={() => window.open("https://github.com/shaquillemayers")}
          >
            <div className={classes.icon} href="">
              <i className="fa fa-github" aria-hidden="true"></i>
            </div>
            <p id={classes["icon-font"]}>GitHub</p>
          </li>
          <li
            className={classes["social-box"]}
            onClick={() => window.open("https://www.linkedin.com/in/shaquillemayers")}
          >
            <div className={classes.icon} href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <p id={classes["icon-font"]}>LinkedIn</p>
          </li>
          <li
            className={classes["social-box"]}
            onClick={() => window.open("https://twitter.com/ShaqCodes")}
          >
            <div className={classes.icon} href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <p id={classes["icon-font"]}>Twitter</p>
          </li>
          <li
            className={classes["social-box"]}
            onClick={() => window.open("mailto:shaquillemayers@gmail.com")}
          >
            <div className={classes.icon} href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <p id={classes["icon-font"]}>Email</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
