import React, {Component} from 'react';
import './Recipe.css';
export default class Recipe extends Component {
render(){
  const {title,img,instructions}= this.props;
    const ing=this.props.ingredients.map((ing,index) =>(<li key={index}> {ing} </li>));
return(
<div style={{padding:'10px'}}>
  <div class="card" style={{width: `${10}rem`}}>
  <img class="card-img-top" src={img} alt="Card"></img>
  <div class="card-body">
    <h5 class="card-title">Recipe {title}</h5>
    <h5 class="card-text">
      ingredients</h5>

              <ul>{ing}</ul>

              <h5>instructions</h5>
            <ul style={{float:'auto'}}>{instructions}</ul>


  </div>
</div>

</div>

);

}

  }
