import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor() {
	  super()
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			<h2>Available Bots</h2>
    		<div className="row">
			  {this.props.bots.map((bot) => <BotCard key={bot.id} showSpecs={this.props.showSpecs} assignBot={this.props.assignBot} bot={bot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
