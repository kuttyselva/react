import React, {Component} from 'react';
import './Recipe.css';
export default class Recipe extends Component {
render(){
  const {title,img,instructions}= this.props;
    const ing=this.props.ingredients.map((ing,index) =>(<li key={index}> {ing} </li>));
return(
  <div class="card" style={{width: `${18}rem`}}>
  <img class="card-img-top" src={img} alt="Card"></img>
  <div class="card-body">
    <h3 class="card-title">Recipe {title}</h3>
    <h5 class="card-text">
      ingredients  </h5>

              <ul>{ing}</ul>

              <h5>instructions</h5>
            <ul style={{float:'auto'}}>{instructions}</ul>


  </div>
</div>


);

}

  }
