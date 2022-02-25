import React, {Component} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';
 
class Note extends Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title"> {this.props.title}</h5>
            <p>{this.props.body}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );

    } 
} 

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body",
  };
   
  Note.propTypes = {
    title: PropTypes.string
  };
   
export default Note; 

//So we just copied the div inside of the return 
//We can copy the entire component though 
//Now when we go back into React it has changed each one of these dynamically 
//Just this one component and the properties were passed in from the parent 
//So they are no longer identical triplets they are something else 

