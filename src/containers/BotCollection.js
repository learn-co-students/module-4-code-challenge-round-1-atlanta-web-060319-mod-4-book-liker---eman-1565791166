import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


	render(){
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.props.bots.map(bot => <BotCard bot={bot} handleRecruits={this.props.handleRecruits} mybots={this.props.myBots}/>)}
					Collection of all bots
				</div>
			</div>
			);
	}

};

export default BotCollection;
