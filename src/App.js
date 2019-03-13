import React, { Component } from 'react';
import './App.css';
import Radium,{StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id:'ffsd',name:"Max", age:28},
      {id:'sdfds',name:"Manu", age:29},
      {id:'grwt',name:"Stephani", age:26}
    ],
    showPersons:false
  }

  deletePersonHandler = (personIndex) =>{


    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  nameChangeHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex( p=>{
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //Don't this
  // this.state.persons[0].name = 'Naresh';
   this.setState({persons:persons})
  
  }

  tooglePersonHandler = () =>{
       const doesShowPerson = this.state.showPersons;
       this.setState({showPersons:!doesShowPerson});
  }

  render() {

     const style = {
       backgroundColor:'green',
       color:'white',
       font:'inherit',
       border:'1px solid blue',
       padding:'8px',
       cursor:'pointer',
       ':hover':{
         backgroundColor:'lightgreen',
         color:'black'
       }

     }

     let persons = null;

     if(this.state.showPersons) {
       persons = ( <div>

         {
           this.state.persons.map( (person, index) =>{
             return  <Person click={()=>this.deletePersonHandler(index)}
             name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) =>this.nameChangeHandler(event, person.id)}
              />
           })
         }
        
        </div>);

        style.backgroundColor = 'red';
        style[':hover'] ={
          backgroundColor:'salmon',
          color:'black'
        }

     }

     const classes = [];

     if(this.state.persons.length <=2) {
       classes.push('red');
     }

     if(this.state.persons.length <=1) {
       classes.push('bold');
     }

    return (

      <StyleRoot>
      <div className="App">
        <h1> Hi, I'am React App</h1>
        <p className={classes.join(' ')}> This is really working</p>
        <button 
        style={style}
        onClick={this.tooglePersonHandler}>Toogle Person</button>

      {persons}
        
        
       </div> 
       </StyleRoot>

      
    );
  }
}

export default Radium(App);
