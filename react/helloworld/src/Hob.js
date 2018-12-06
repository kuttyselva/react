import React , {Component} from 'react';
export default class Box extends Component {
  render() {
      const fontSize=Math.floor(Math.random()*80)+20;
      const backgroundColor=['red','green','blue','black'][Math.floor(Math.random()*4)];
      return(
<div style={{
fontSize: `${fontSize}px`,
backgroundColor,color: 'white',height: '200px',width:'500px',
}}>
Random box
</div>
);
    }
  }
