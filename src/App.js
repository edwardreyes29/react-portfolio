import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import './App.css';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
