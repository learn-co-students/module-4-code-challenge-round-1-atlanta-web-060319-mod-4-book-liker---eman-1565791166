import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    let allBotComponents = []
    for(let index = 0 ; index < this.props.bots.length ; index++) {
      allBotComponents.push(<BotCard bot={this.props.bots[index]} handleShowSpecs={this.props.handleShowSpecs}/>)
    }

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allBotComponents}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
