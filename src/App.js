import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav';
import Breed from './component/Breed';
import Random from './component/Random';
import Multiple from './component/Multiple';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> <Nav /> </header>

        <Switch>
          <Route  exact path='/random/:id' component={Multiple} />
          <Route  exact path="/breed" component={Breed}/> 
          <Route  path='/random' component={Random}/> 
        </Switch>

      </div>
    );
  }
}

export default App;
