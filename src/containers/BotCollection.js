import React from "react";
import BotCard from "../components/BotCard";
import BotFilter from '../components/BotFilter'

class BotCollection extends React.Component {
  constructor() {
	  super()
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			<h2>Available Bots</h2>
			<BotFilter checked={this.props.checked} filterTerm={this.props.filterTerm} botFilter={this.props.botFilter}/>
    		<div className="row">
			  {this.props.bots.map((bot) => <BotCard key={bot.id} showSpecs={this.props.showSpecs} assignBot={this.props.assignBot} bot={bot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
