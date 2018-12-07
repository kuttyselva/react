import React, { Component } from 'react';
import './RecipeApp.css' ;
import Recipe from './Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe title="pasta"
        ingredients={['flower','water']}
        instructions="mix ingredients"
        img="https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"/>

      </div>
    );
  }
}

export default RecipeApp;
