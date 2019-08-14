import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	  const botCards = this.props.bots.map(bot =>{
		  if(bot.inArmy === false){
			  return <BotCard key={bot.id}  bot={bot} handleBotRecruit={this.props.handleBotRecruit} handleBotClick={this.props.handleBotClick}/>
		  }
	  })
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCards}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
