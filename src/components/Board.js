import React, { Component } from 'react';
import '../css/Board.css';
import Note from './Note'
//We are inputtig the Note class

class Board extends Component {
    constructor() {
    super();
}

render() {
    return (
        <div>
    <div className="div-board">
          <div className="row">
              <Note title= "My First Book" body="Hungry Caterpillar"/>
              <Note title="My First Vacation" body="Costa Rica"/>
              <Note title="My First Movie" body="Lion King"/>
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>

        </div>
    );
}

}

export default Board;

//So basically Component that we are importing from React 
//We are going to extend the React component so that we can use it in our 
//Board 
//This looks like our bench - it's not really indented at all 

