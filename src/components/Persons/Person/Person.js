import React from 'react';
import './Person.css';
//import Aux from '../../../hoc/Aux';

const person = (props) =>{

  

    return (
   // <Aux>
   <React.Fragment>
    <p onClick={props.click}>I am a {props.name} and age is {props.age}</p>
     <p>{props.children}</p>
     <input type="text" 
     onChange={props.changed} value={props.name}/>
     </React.Fragment>
   // </Aux>
    )
};

export default person;