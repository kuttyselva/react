import React, {Component} from 'react';
import './Pet.css';
import Box from './Hob';
export default class Pet extends Component {
  render() {
    const style={fontSize: '1.5em'};
    const hob=['sleeping','eating','cuddling'];
    return(
    <div class="card">
    <h2 class="name">Moxie</h2>
    <img src="https://pbs.twimg.com/profile_images/1057899591708753921/PSpUS-Hp_400x400.jpg" alt="moxie"/>
    <h3 style={style}>hobbies</h3>
    <ul>
      {hob.map(h =>{
        return <li style={style}>{h}</li>
      })}
    </ul>
<Box />
    </div>


  );
    // const h2= ReactDOMFactories.h2(null, "Moxie");
    // const img=ReactDOMFactories.img({
    //   src:"https://pbs.twimg.com/profile_images/1057899591708753921/PSpUS-Hp_400x400.jpg",
    //   alt: "moxie"
    // });
    // return ReactDOMFactories.div(null,h2,img);

  }
}

// export default Pet;
