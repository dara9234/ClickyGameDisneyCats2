import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className = "nav navbar">
        
        <h2> Score: {this.props.score}</h2>
        <h2> Top Score: {this.props.topscore}</h2>
       
      </div>


    );
  }
}
export default Navbar;
    

    

   