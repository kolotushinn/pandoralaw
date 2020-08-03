import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Main, Categories, Advanced, Profile } from './containers';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/" component={Main} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/advanced" component={Advanced} />

        <Route exact path="/profile" component={Profile} />

      </Switch>
      <Footer />

    </div>
  );
}

export default App;
