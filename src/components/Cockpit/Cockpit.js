import React, {} from 'react';
import './Cockpit.css';
const cockpit = (props) => {

    const style = {
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      };

      if(props.showPersons) {
          style.backgroundColor = 'red';
      }

    const classes = [];

     if(props.personsLength <=2) {
       classes.push('red');
     }

     if(props.personsLength <=1) {
       classes.push('bold');
     }

    return (
        <div className="Cockpit">
        <h1> {props.title}</h1>
        <p className={classes.join(' ')}> This is really working</p>
        <button 
        style={style}
        onClick={props.clicked}>Toogle Person</button>
        </div>
    );
     
};

export default React.memo(cockpit);