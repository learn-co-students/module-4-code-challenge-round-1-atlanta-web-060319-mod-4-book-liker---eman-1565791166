import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showSpecToggle: false
		}
	}
  //your code here

  render(){
	  const { showSpecToggle } = this.state;
	  const { bots } = this.props;

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		
			{bots.map(bot => (<BotCard bot={bot} key={bot.id} onBotSelect={this.props.onBotSelect} />))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
