import React, { Component } from 'react';
import './App.css';
const nobx= 8;
const Box= ({color}) =>{
  const style={
    width:'180px',
    height:'180px',
    display:'inline-block',
    backgroundColor:color
  }
  return <div style={style}></div>;
}

class App extends Component {

constructor(props){
  super(props);
  const boxes= Array(nobx).fill().map(this.getRandomcol,this);
  this.state={boxes};
  setInterval(() => {
    const boxes=this.state.boxes.slice();
    const ri=Math.floor(Math.random()*boxes.length);
    boxes[ri]=this.getRandomcol();
    this.setState({boxes});
  },300);
}
// constructor(props){
//   super(props);
//   this.state={ name:"kutty"};
// }
  getRandomcol(){
    let ci=Math.floor(Math.random()*this.props.allcol.length);
    return this.props.allcol[ci];
  }
  render() {
    const boxes= this.state.boxes.map((color,index)=>(<Box key={index} color={color}></Box>))
    return (
      <div>
        {boxes}
        {/* <p>{this.state.name}</p>
        <button type="button" onClick={()=>this.setState({name:"KUTTY"})}>upper</button> */}
      </div>
    );
  }
}
App.defaultProps={
  allcol:["AliceBlue","AntiqueWhite","Aqua","Blue","Red","Green","Orange","Yellow","Black","Brown"]
};
export default App;
