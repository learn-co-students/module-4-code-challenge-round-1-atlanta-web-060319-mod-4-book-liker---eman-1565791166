




import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  addBots = () => (
    this.props.bots.map((bot, index) => (
      <BotCard bot={bot} key={index} addBotToArmy={this.props.addBotToArmy} />
    ))
  )

  render() {

    return (
      <div className="ui four column grid">
        <div className="row">
          {this.addBots()}
          Collection of all bots
    		</div>
      </div>
    );
  }

};

export default BotCollection;
