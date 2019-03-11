import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cars from './pages/Cars/';
import About from './pages/About'
import Nomatch from './pages/Nomatch'
import Navbar from './components/Navbar'
import Detail from './pages/Detail';

const App = () => (
  <Router>
    <div className="container">
    <Navbar />
      <Switch>
        <Route exact path="/" component={Cars} />
        <Route exact path="/cars" component={Cars} />
        <Route exact path="/cars/:id" component={Detail} />
        <Route exact path="/about" component={About} />
        <Route component={Nomatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
