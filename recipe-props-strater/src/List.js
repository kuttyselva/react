import React,{Component} from 'react';
import Recipe from './Recipe';
import './List.css'

import PropTypes from 'prop-types';
export default class List extends Component{
  static defaultProps={
    recipes:[
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      },
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      },
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      },
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      },
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      },
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      },
      {
        title:"spaghetti",
        instructions:"open jar and mix up the food , Eat",
        ingredients:["pasta","8 cups Water","spaghetti"],
        img:"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      }
    ]
  }
  static propTypes={
    recipes:PropTypes.arrayOf(PropTypes.object)
  }
  render(){
const recipes=this.props.recipes.map((r,index)=>(<Recipe key={index}{...r}></Recipe>));

return (
  <div class="recipe">

  {recipes}</div>


);
  }
}
