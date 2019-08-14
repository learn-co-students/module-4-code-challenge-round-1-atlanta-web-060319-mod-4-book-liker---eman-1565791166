import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	getBots = () => {
		return this.props.bots.map(bot => {
		 return <BotCard addToArmy={this.props.addToArmy} bot={bot}/>
		})
	  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			{this.getBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
