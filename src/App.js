import './App.css';
import React, { Component } from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './routes'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">

            </div>
            {this.showMenuContent(routes)}
          </div>
        </div>
      </Router>
    );
  }

  showMenuContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main} />
      })
    }
    return <Switch>{result}</Switch>
  }
}


export default App;
