

import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  addBots = () => (
    this.props.army.map((bot, index) => (
      <BotCard bot={bot} key={index} removeFromArmy={this.props.removeFromArmy} />

    ))
  )

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.addBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
