import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  // Route to & render relevant page components
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
