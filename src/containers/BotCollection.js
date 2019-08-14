import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor() {
	  super()
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			Collection of all bots:
    		<div className="row">
			  {this.props.bots.map((bot) => <BotCard assignBot={this.props.assignBot} bot={bot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
