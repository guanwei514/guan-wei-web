import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PublicRoute from "./hoc/PublicRoute";
import Main from "./containers/Main";
import NotFound from "./containers/NotFound";
import { LanguageProvider } from "./langs/LanguageProvider";
import 'flag-icon-css/css/flag-icons.min.css'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/guan-wei-web" exact component={Main} />
          <Redirect exact from="/" to="/guan-wei-web" />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
