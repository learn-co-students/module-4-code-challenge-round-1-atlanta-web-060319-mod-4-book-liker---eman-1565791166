import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class YourBotArmy extends React.Component {
  
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            <br/>

            {this.props.bots.map(bot => bot.map(b => <BotCard bot={b}/>))}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
