import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map((bot, idx) => <BotCard showBotSpecs={this.props.showBotSpecs} bot={bot} key={idx}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
