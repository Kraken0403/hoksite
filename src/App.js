import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './Components/colors.scss'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import InnerWork from './Pages/InnerWork/InnerWork';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/inner" component={InnerWork} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
