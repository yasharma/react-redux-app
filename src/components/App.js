import React, { Component } from "react";
import Router from "../router";
import Menu from "./Menu";
class App extends Component {
  	render() {
    	return (
      		<div className="container">
      			<div className="row">
      				<Menu />
      			</div>
    			<Router />    
      		</div>  
    	);
  	}
}

export default App;
