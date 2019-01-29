import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav';
import Breed from './component/Breed';
import Random from './component/Random';
import Multiple from './component/Multiple';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state ={
      favorites: [],
    };
  };

    addNewFavorite = url => {
        const {favorites} = this.state;
        let newState = [...favorites];
        let newFav = {
          id: Math.random(),
          url: url,
          comments: [],
        }
        newState.push(newFav);
        this.setState({
          favorites: newState
        });
    };

  render() {
    return (
      <div className="App">
        <header> <Nav /> </header>

        <Switch>
          <Route exact path='/' />

          <Route  path='/random' render={() => {
              return <Random addNewFavorite={this.addNewFavorite} /> }}
          /> 
          <Route path="/breed" render={() => {
              return <Breed addNewFavorite={this.addNewFavorite} /> }}
          /> 
          <Route path='/random/:id' component={Multiple} />

        </Switch>

      </div>
    );
  }
}

export default App;
