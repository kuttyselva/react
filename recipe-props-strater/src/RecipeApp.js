import React, { Component } from 'react';
import './RecipeApp.css' ;


import List from './List';

import Navb from './Navb';

class RecipeApp extends Component {
  render() {
    return (

      <div className="App" >
          <Navb/>
        <List />

        </div>
    );
  }
}

export default RecipeApp;
