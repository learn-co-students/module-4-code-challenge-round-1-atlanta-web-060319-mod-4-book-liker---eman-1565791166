import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  constructor() {
    super()
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <h2>Your Bot Army</h2>
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myBotArmy.map((bot) => <BotCard key={bot.id} bot={bot} assignBot={this.props.assignBot}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
