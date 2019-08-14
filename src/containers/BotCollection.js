import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
 
 /// take the allBots array map over it to return one bot card and toggle. 
  render(){
   return (
   	<div className="ui four column grid">
    <div className="row">
    {this.props.allBots.map(bot => {
    return <BotCard key={bot.id} bot={bot} toggleBot={this.props.toggleBot}/>
	 })}
    </div>
    </div>
    );
  }
};

export default BotCollection;

