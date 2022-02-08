import { Fragment } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {

  // Layout wrapper that displays main navigation as well as all of the components it wraps around.
  return (
    <Fragment>
      <MainNavigation />
      <main>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  )
};

export default Layout;