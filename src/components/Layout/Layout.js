import classes from "./Layout.module.css";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  // Layout wrapper that displays main navigation as well as all of the components it wraps around.
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
