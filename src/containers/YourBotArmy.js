import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map((bot, idx) => <BotCard removeBotFromArmy={this.props.removeBotFromArmy} bot={bot} key={idx}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
